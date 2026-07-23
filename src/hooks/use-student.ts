import { useEffect, useState, useCallback } from "react";

export interface StudentSession {
  id: string;
  phone: string;
  surname: string;
}

const KEY = "angopdf.student";

function read(): StudentSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.id === "string") return parsed as StudentSession;
    return null;
  } catch {
    return null;
  }
}

export function useStudent() {
  const [student, setStudent] = useState<StudentSession | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStudent(read());
    setHydrated(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setStudent(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const save = useCallback((s: StudentSession) => {
    window.localStorage.setItem(KEY, JSON.stringify(s));
    setStudent(s);
  }, []);

  const clear = useCallback(() => {
    window.localStorage.removeItem(KEY);
    setStudent(null);
  }, []);

  return { student, hydrated, save, clear };
}
