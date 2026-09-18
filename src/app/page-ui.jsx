export function Page({ title, file, children }) {
  return (
    <article className="stack gap-6">
      <header className="stack gap-1">
        <h1 className="type-heading">{title}</h1>
        {file ? <p className="type-data">{file}</p> : null}
      </header>
      {children}
    </article>
  );
}

export function Swatch({ token, fg }) {
  return (
    <div
      className="preview-swatch type-label"
      style={{ background: `var(${token})`, color: fg || "var(--tx)" }}
    >
      {token}
    </div>
  );
}
