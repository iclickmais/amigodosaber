/**
 * Sistema de gamificação — Amigo do Saber
 * XP, streaks, níveis, mensagens motivacionais e liberdade de estudo.
 */

const STATS_KEY = "angopdf.game-stats";

export interface GameStats {
  xp: number;
  streak: number;
  lastActiveDate: string; // ISO date string
  totalLessonsCompleted: number;
  totalQuizzesPassed: number;
  level: number;
  badges: string[];
}

function today(): string {
  return new Date().toISOString().split("T")[0];
}

function loadStats(): GameStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    xp: 0,
    streak: 0,
    lastActiveDate: "",
    totalLessonsCompleted: 0,
    totalQuizzesPassed: 0,
    level: 1,
    badges: [],
  };
}

function saveStats(stats: GameStats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

/** Atualizar streak — chama no início de cada sessão */
export function updateStreak(): GameStats {
  const stats = loadStats();
  const td = today();

  if (stats.lastActiveDate === td) {
    // Já ativo hoje, não alterar
    return stats;
  }

  // Verificar se é dia consecutivo
  const lastDate = stats.lastActiveDate ? new Date(stats.lastActiveDate) : null;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  if (lastDate && stats.lastActiveDate === yesterdayStr) {
    stats.streak += 1;
  } else {
    // Streak quebrado — recomeçar
    if (stats.streak > 0) {
      stats.streak = 1; // dia novo começa a 1
    } else {
      stats.streak = 1;
    }
  }

  stats.lastActiveDate = td;
  saveStats(stats);
  return stats;
}

/** Adicionar XP por conclusão de aula */
export function addLessonXp(lessonSlug: string): { newStats: GameStats; reward: string } {
  const stats = loadStats();

  // +25 XP por aula lida
  stats.xp += 25;
  stats.totalLessonsCompleted += 1;

  // Nível = floor(xp / 100) + 1
  const newLevel = Math.floor(stats.xp / 100) + 1;
  if (newLevel > stats.level) {
    stats.level = newLevel;
  }

  // Badges
  if (stats.totalLessonsCompleted >= 5 && !stats.badges.includes("first-5")) {
    stats.badges.push("first-5");
  }
  if (stats.totalLessonsCompleted >= 20 && !stats.badges.includes("twenty-lessons")) {
    stats.badges.push("twenty-lessons");
  }
  if (stats.streak >= 3 && !stats.badges.includes("streak-3")) {
    stats.badges.push("streak-3");
  }
  if (stats.streak >= 7 && !stats.badges.includes("streak-7")) {
    stats.badges.push("streak-7");
  }
  if (stats.level >= 5 && !stats.badges.includes("level-5")) {
    stats.badges.push("level-5");
  }
  if (stats.level >= 10 && !stats.badges.includes("level-10")) {
    stats.badges.push("level-10");
  }

  saveStats(stats);

  // Determinar recompensa
  let reward = "+25 XP";
  if (stats.level > newLevel - 1) {
    reward = `+25 XP · Subiste para o nível ${stats.level}!`;
  }

  return { newStats: stats, reward };
}

/** Adicionar XP por quiz passado */
export function addQuizXp(score: number, total: number): { newStats: GameStats; reward: string } {
  const stats = loadStats();

  // +50 XP se passou (>=60%), +15 XP se não
  const passed = score / total >= 0.6;
  const earnedXp = passed ? 50 : 15;
  stats.xp += earnedXp;
  stats.totalQuizzesPassed += passed ? 1 : 0;

  const newLevel = Math.floor(stats.xp / 100) + 1;
  if (newLevel > stats.level) {
    stats.level = newLevel;
  }

  saveStats(stats);

  let reward = passed ? `+50 XP · Quiz aprovado!` : `+15 XP · Quase lá, tenta de novo!`;
  if (newLevel > stats.level) {
    reward += ` · Nível ${stats.level}!`;
  }

  return { newStats: stats, reward };
}

/** Obter mensagens motivacionais rotativas */
export function getMotivationalMessage(context: "login" | "lesson" | "quiz-pass" | "quiz-fail" | "streak" | "streak-broken"): string {
  const messages: Record<string, string[]> = {
    login: [
      "Bem-vindo de volta! O teu futuro agradece cada minuto.",
      "Cada dia de estudo te aproxima do teu objectivo.",
      "A disciplina de hoje é a liberdade de amanhã.",
      "Angola conta contigo. Vamos lá!",
      "Mais um dia, mais perto da aprovação.",
    ],
    lesson: [
      "Excelente! Mais uma aula concluída. Estás no caminho certo.",
      "O saber não ocupa espaço — mas transforma vidas.",
      "Cada aula é um tijolo na construção do teu futuro.",
      "Continua assim! A consistência é a chave.",
      "Tu estás a fazer o que muitos só planeiam. Parabéns!",
    ],
    "quiz-pass": [
      "Brilhante! Dominaste esta matéria!",
      "O teu cérebro agradece o esforço. +50 XP!",
      "Aprovado! Cada quiz é uma vitória.",
      "Isso sim é determinação! Continua assim.",
    ],
    "quiz-fail": [
      "Quase lá! Revisa a matéria e tenta de novo.",
      "Os erros de hoje são as lições de amanhã. +15 XP!",
      "Não desistas — a repetição é a mãe da aprendizagem.",
      "Volta a esta aula e tenta o quiz. Vais conseguir!",
    ],
    streak: [
      `🔥 ${streakMsg()}`,
    ],
    "streak-broken": [
      "A streak foi quebrada, mas cada novo dia é uma nova oportunidade.",
      "Não te preocupes — o importante é não parar. Recomeça hoje!",
    ],
  };

  const pool = messages[context] ?? messages.login;
  return pool[Math.floor(Math.random() * pool.length)];
}

function streakMsg(): string {
  const stats = loadStats();
  if (stats.streak >= 30) return `${stats.streak} dias consecutivos! És uma máquina!`;
  if (stats.streak >= 14) return `${stats.streak} dias! Incrível dedicação!`;
  if (stats.streak >= 7) return `${stats.streak} dias de streak! O teu compromisso é admirável.`;
  if (stats.streak >= 3) return `${stats.streak} dias seguidos! Cada dia conta.`;
  return `${stats.streak} dia(s) de streak. Continua!`;
}

/** Obter todas as estatísticas actuais */
export function getGameStats(): GameStats {
  return loadStats();
}

/** Reset (para testing) */
export function resetGameStats() {
  localStorage.removeItem(STATS_KEY);
}
