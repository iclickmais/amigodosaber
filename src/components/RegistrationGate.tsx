import { useEffect, useState, type ReactNode } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import { useStudent } from "@/hooks/use-student";

// Rotas públicas que não exigem registo prévio.
const PUBLIC_PATHS = ["/entrar"];

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function RegistrationGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { student, hydrated } = useStudent();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    if (student) {
      setChecked(true);
      return;
    }
    if (isPublicPath(pathname)) {
      setChecked(true);
      return;
    }
    const next = pathname + (typeof window !== "undefined" ? window.location.search : "");
    router.navigate({
      to: "/entrar",
      search: { next },
      replace: true,
    });
  }, [hydrated, student, pathname, router]);

  if (!hydrated || (!student && !isPublicPath(pathname) && !checked)) {
    return null;
  }
  return <>{children}</>;
}
