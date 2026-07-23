// Cache offline leve para aulas + quizzes usando IndexedDB.
// Objectivo: permitir reler aulas já abertas mesmo sem internet.

const DB_NAME = "amigo-do-saber-offline";
const DB_VERSION = 1;
const STORE = "lessons";

interface CachedLesson {
  key: string; // kind/track/sector/module/lesson
  lessonId: string;
  title: string;
  content_md: string;
  quiz: unknown | null;
  savedAt: number;
  kind: string;
  trackSlug: string;
  sectorSlug: string;
  moduleSlug: string;
  lessonSlug: string;
}

function isSupported(): boolean {
  return typeof window !== "undefined" && "indexedDB" in window;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "key" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export function offlineKey(parts: {
  kind: string;
  trackSlug: string;
  sectorSlug: string;
  moduleSlug: string;
  lessonSlug: string;
}): string {
  return `${parts.kind}/${parts.trackSlug}/${parts.sectorSlug}/${parts.moduleSlug}/${parts.lessonSlug}`;
}

export async function saveLessonOffline(entry: Omit<CachedLesson, "savedAt">): Promise<void> {
  if (!isSupported()) return;
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put({ ...entry, savedAt: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    // silencioso — offline é bónus
  }
}

export async function readLessonOffline(key: string): Promise<CachedLesson | null> {
  if (!isSupported()) return null;
  try {
    const db = await openDb();
    const result = await new Promise<CachedLesson | null>((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(key);
      req.onsuccess = () => resolve((req.result as CachedLesson | undefined) ?? null);
      req.onerror = () => reject(req.error);
    });
    db.close();
    return result;
  } catch {
    return null;
  }
}

export async function updateQuizOffline(key: string, quiz: unknown): Promise<void> {
  if (!isSupported()) return;
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      const store = tx.objectStore(STORE);
      const getReq = store.get(key);
      getReq.onsuccess = () => {
        const existing = getReq.result as CachedLesson | undefined;
        if (existing) {
          store.put({ ...existing, quiz, savedAt: Date.now() });
        }
      };
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    /* noop */
  }
}

export async function listOfflineLessons(): Promise<CachedLesson[]> {
  if (!isSupported()) return [];
  try {
    const db = await openDb();
    const result = await new Promise<CachedLesson[]>((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).getAll();
      req.onsuccess = () => resolve((req.result as CachedLesson[]) ?? []);
      req.onerror = () => reject(req.error);
    });
    db.close();
    return result.sort((a, b) => b.savedAt - a.savedAt);
  } catch {
    return [];
  }
}

export async function countOfflineLessons(): Promise<number> {
  const list = await listOfflineLessons();
  return list.length;
}

export async function removeOfflineLesson(key: string): Promise<void> {
  if (!isSupported()) return;
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    /* noop */
  }
}
