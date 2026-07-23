import { useState } from "react";

interface Props {
  source: string;
}

export function LessonMarkdown({ source }: Props) {
  const blocks = parseBlocks(source);
  return (
    <article className="lesson-prose">
      {blocks.map((b, i) => renderBlock(b, i))}
    </article>
  );
}

// ── Types ───────────────────────────────────────────────────────────────────

type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; header: string[]; rows: string[][] }
  | { type: "code"; lang: string; text: string }
  | { type: "blockquote"; text: string }
  | { type: "hr" };

// ── Parsing ─────────────────────────────────────────────────────────────────

function parseBlocks(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const out: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) { i++; continue; }

    // Headings
    if (line.startsWith("### ")) { out.push({ type: "h3", text: line.slice(4).trim() }); i++; continue; }
    if (line.startsWith("## ")) { out.push({ type: "h2", text: line.slice(3).trim() }); i++; continue; }
    if (line.startsWith("# ")) { out.push({ type: "h1", text: line.slice(2).trim() }); i++; continue; }

    // Horizontal rule
    if (/^[-*_]{3,}\s*$/.test(line)) { out.push({ type: "hr" }); i++; continue; }

    // Blockquote
    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && (lines[i].startsWith("> ") || (lines[i].trim() && !/^[-*_]{3,}\s*$/.test(lines[i])))) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      out.push({ type: "blockquote", text: buf.join(" ") });
      continue;
    }

    // Fenced code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      out.push({ type: "code", lang, text: buf.join("\n") });
      continue;
    }

    // Table (GitHub Flavored Markdown)
    if (isTableLine(line) && i + 1 < lines.length && isSeparatorLine(lines[i + 1])) {
      const header = parseTableRow(line);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && isTableLine(lines[i])) {
        rows.push(parseTableRow(lines[i]));
        i++;
      }
      out.push({ type: "table", header, rows });
      continue;
    }

    // Unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, "").trim());
        i++;
      }
      out.push({ type: "ul", items });
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, "").trim());
        i++;
      }
      out.push({ type: "ol", items });
      continue;
    }

    // Paragraph: gather until blank or structural element
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,3} |[-*] |\d+\. |>\s|```|[-*_]{3,})/.test(lines[i]) &&
      !isTableLine(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    out.push({ type: "p", text: buf.join(" ") });
  }
  return out;
}

function isTableLine(line: string): boolean {
  return /^\s*\|.+?\|\s*$/.test(line);
}

function isSeparatorLine(line: string): boolean {
  return /^\s*\|[\s\-:|]+\|\s*$/.test(line);
}

function parseTableRow(line: string): string[] {
  return line
    .replace(/^\s*\|/, "")
    .replace(/\|\s*$/, "")
    .split("|")
    .map((c) => c.trim());
}

// ── Inline rendering ────────────────────────────────────────────────────────

function renderInline(text: string) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const withBold = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const withItalic = withBold.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  const withCode = withItalic.replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-xs">$1</code>');
  return <span dangerouslySetInnerHTML={{ __html: withCode }} />;
}

function renderInlineHTML(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const withBold = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const withItalic = withBold.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  const withCode = withItalic.replace(/`([^`]+)`/g, "<code>$1</code>");
  return withCode;
}

// ── Block rendering ─────────────────────────────────────────────────────────

function renderBlock(b: Block, key: number) {
  switch (b.type) {
    case "h1":
      return <h1 key={key} className="mt-10 font-serif text-4xl text-gold">{b.text}</h1>;
    case "h2":
      return <h2 key={key} className="mt-10 font-serif text-3xl text-gold">{b.text}</h2>;
    case "h3":
      return <h3 key={key} className="mt-6 font-serif text-2xl text-foreground">{b.text}</h3>;
    case "p":
      return <p key={key} className="mt-4 leading-relaxed text-foreground/90">{renderInline(b.text)}</p>;
    case "ul":
      return (
        <ul key={key} className="mt-4 space-y-2 pl-5">
          {b.items.map((it, i) => (
            <li key={i} className="list-disc leading-relaxed text-foreground/90 marker:text-gold">
              {renderInline(it)}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="mt-4 space-y-2 pl-5">
          {b.items.map((it, i) => (
            <li key={i} className="list-decimal leading-relaxed text-foreground/90 marker:text-gold">
              {renderInline(it)}
            </li>
          ))}
        </ol>
      );
    case "blockquote":
      return (
        <blockquote key={key} className="mt-4 border-l-4 border-gold/40 pl-4 py-2 text-foreground/80 italic">
          {renderInline(b.text)}
        </blockquote>
      );
    case "hr":
      return <hr key={key} className="my-8 border-border/40" />;
    case "code":
      return (
        <div key={key} className="mt-4 overflow-x-auto rounded-xl border border-border/40 bg-card/80 p-4">
          <pre className="text-sm leading-relaxed text-foreground/90">
            <code>{b.text}</code>
          </pre>
        </div>
      );
    case "table":
      return <MarkdownTable key={key} header={b.header} rows={b.rows} />;
  }
}

// ── Responsive Table Component ──────────────────────────────────────────────

function MarkdownTable({ header, rows }: { header: string[]; rows: string[][] }) {
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  // Auto-detect: use cards on small screens by default
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="mt-5">
      {/* Toggle on mobile */}
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {rows.length} registos
        </p>
        {isMobile && (
          <div className="flex rounded-lg border border-border/40 bg-muted/30 p-0.5">
            <button
              onClick={() => setViewMode("table")}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                viewMode === "table" ? "bg-gold/20 text-gold" : "text-muted-foreground"
              }`}
            >
              Tabela
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                viewMode === "cards" ? "bg-gold/20 text-gold" : "text-muted-foreground"
              }`}
            >
              Cards
            </button>
          </div>
        )}
      </div>

      {/* Table view: scrollable container */}
      {viewMode === "table" && (
        <div className="overflow-x-auto rounded-xl border border-border/40">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-gold/20 bg-gold/5">
                {header.map((col, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-semibold text-gold"
                    dangerouslySetInnerHTML={{ __html: renderInlineHTML(col) }}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border/20 transition-colors hover:bg-gold/[0.02]">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 leading-relaxed text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: renderInlineHTML(cell) }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Card view: each row as a card (mobile-friendly) */}
      {viewMode === "cards" && (
        <div className="space-y-3">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="rounded-xl border border-border/40 bg-card/40 p-4"
            >
              <div className="space-y-2">
                {row.map((cell, ci) => (
                  <div key={ci} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold sm:w-32 sm:shrink-0">
                      {header[ci] || `Campo ${ci + 1}`}
                    </span>
                    <span
                      className="leading-relaxed text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: renderInlineHTML(cell) }}
                    />
                  </div>
                ))}
              </div>
              {ri < rows.length - 1 && <div className="mt-3 border-t border-border/20" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
