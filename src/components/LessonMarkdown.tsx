interface Props {
  source: string;
}

// Minimal, safe Markdown renderer for our AI-generated lessons.
// Handles: ## / ### headings, - lists, **bold**, `code`, blank-line paragraphs.
export function LessonMarkdown({ source }: Props) {
  const blocks = parseBlocks(source);
  return (
    <article className="lesson-prose">
      {blocks.map((b, i) => renderBlock(b, i))}
    </article>
  );
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function parseBlocks(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const out: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("## ")) { out.push({ type: "h2", text: line.slice(3).trim() }); i++; continue; }
    if (line.startsWith("### ")) { out.push({ type: "h3", text: line.slice(4).trim() }); i++; continue; }
    if (line.startsWith("# ")) { out.push({ type: "h2", text: line.slice(2).trim() }); i++; continue; }
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, "").trim());
        i++;
      }
      out.push({ type: "ul", items });
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, "").trim());
        i++;
      }
      out.push({ type: "ol", items });
      continue;
    }
    // paragraph: gather until blank
    const buf: string[] = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,3} |[-*] |\d+\. )/.test(lines[i])) {
      buf.push(lines[i]);
      i++;
    }
    out.push({ type: "p", text: buf.join(" ") });
  }
  return out;
}

function renderInline(text: string) {
  // Escape HTML then apply **bold** and `code`
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const withBold = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const withCode = withBold.replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-sm">$1</code>');
  return <span dangerouslySetInnerHTML={{ __html: withCode }} />;
}

function renderBlock(b: Block, key: number) {
  switch (b.type) {
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
  }
}
