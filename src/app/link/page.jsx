import { Page } from "../page-ui";

export default function LinkPage() {
  return (
    <Page title="Link" file="primitives/link.css">
      <p className="type-body">
        Inline <a className="link" href="#link">settings</a> and{" "}
        <a className="link" href="#link" aria-disabled="true">
          unavailable
        </a>
        .
      </p>
    </Page>
  );
}
