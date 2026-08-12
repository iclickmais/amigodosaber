import { createFileRoute } from "@tanstack/react-router";
import { useStudent } from "@/hooks/use-student";
import { getCertificate, type CertificateRecord } from "@/lib/gamification.functions";
import { Award, CheckCircle2, Printer, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/certificado/$id")({
  head: () => ({
    meta: [
      { title: "Certificado de conclusão | Amigo do Saber" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CertificatePage,
});

function CertificatePage() {
  const { student, hydrated } = useStudent();
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = Route.useParams();

  useEffect(() => {
    if (!hydrated || !student) return;
    getCertificate({ data: { certificateId: id, studentId: student.id } })
      .then(setCertificate)
      .catch((e) => setError(e instanceof Error ? e.message : "Certificado indisponível."));
  }, [hydrated, student, id]);

  if (!hydrated || !student) {
    return <main className="flex min-h-screen items-center justify-center bg-[#0a0806] px-4 text-sm text-muted-foreground">A carregar…</main>;
  }

  if (error || !certificate) {
    return <main className="flex min-h-screen items-center justify-center bg-[#0a0806] px-4 text-center text-sm text-burgundy">{error ?? "A carregar certificado…"}</main>;
  }

  return (
    <main className="min-h-screen bg-[#0a0806] px-4 py-8 text-foreground sm:py-14 print:bg-white print:text-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center justify-between print:hidden">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Amigo do Saber</p>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90">
            <Printer className="h-4 w-4" /> Imprimir / Guardar PDF
          </button>
        </div>
        <article className="relative overflow-hidden rounded-[2rem] border border-gold/50 bg-gradient-to-br from-[#251b10] via-[#130e0b] to-[#0d0b09] p-8 text-center shadow-[0_0_80px_rgba(212,163,62,0.12)] sm:p-16 print:rounded-none print:border-4 print:border-[#aa7b27] print:bg-white print:p-20 print:shadow-none">
          <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-gold/20 sm:inset-8 print:border-[#d0a84a]" />
          <div className="relative">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/60 bg-gold/10 text-gold print:bg-transparent">
              <Award className="h-10 w-10" />
            </div>
            <p className="mt-7 text-xs uppercase tracking-[0.35em] text-gold">Certificado de conclusão</p>
            <h1 className="mt-4 font-serif text-4xl text-gold sm:text-5xl print:text-[#6c4b12]">Parabéns!</h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-foreground print:text-gray-700">Certificamos que</p>
            <p className="mt-2 font-serif text-3xl sm:text-4xl print:text-black">{certificate.studentName}</p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground print:text-gray-700">concluiu com aproveitamento o percurso de aprendizagem</p>
            <h2 className="mt-3 font-serif text-2xl text-gold sm:text-3xl print:text-[#6c4b12]">{certificate.sectorName}</h2>
            <p className="mt-2 text-sm text-muted-foreground print:text-gray-700">{certificate.trackName} · {certificate.kind === "concurso" ? "Concurso Público" : "Preparatório"}</p>
            <div className="mx-auto mt-10 grid max-w-xl gap-4 border-y border-gold/20 py-5 text-xs sm:grid-cols-2 print:border-[#d0a84a]">
              <div><p className="uppercase tracking-widest text-muted-foreground">Código de verificação</p><p className="mt-1 font-mono text-gold print:text-[#6c4b12]">{certificate.certificate_code}</p></div>
              <div><p className="uppercase tracking-widest text-muted-foreground">Emitido em</p><p className="mt-1 print:text-gray-800">{new Date(certificate.issued_at).toLocaleDateString("pt-PT")}</p></div>
            </div>
            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-emerald-400 print:text-green-700"><ShieldCheck className="h-4 w-4" /> Certificado registado digitalmente</div>
          </div>
        </article>
        <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground print:hidden"><CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Guarda este documento para apresentar a sua conclusão.</p>
      </div>
    </main>
  );
}
