import { Page } from "../page-ui";

const spaces = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32, 40];

export default function SpacingPage() {
  return (
    <Page title="Spacing" file="foundations/spacing.css">
      <p className="type-body">Scale plus padding and margin utilities (p, m, px, py, …).</p>
      <div className="stack gap-3">
        {spaces.map((step) => (
          <div className="cluster gap-3 items-center" key={step}>
            <p className="type-data preview-space-name">--space-{step}</p>
            <div className="preview-space-bar" style={{ width: `var(--space-${step})` }} />
          </div>
        ))}
      </div>
    </Page>
  );
}
