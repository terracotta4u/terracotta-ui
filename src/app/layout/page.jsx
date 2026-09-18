import { Page } from "../page-ui";

export default function LayoutPage() {
  return (
    <Page title="Layout" file="css/layout.css">
      <p className="type-label">stack</p>
      <div className="stack gap-2">
        <p className="type-body">One</p>
        <p className="type-body">Two</p>
        <p className="type-body">Three</p>
      </div>
      <p className="type-label">cluster</p>
      <div className="cluster gap-2">
        <span className="type-body">One</span>
        <span className="type-body">Two</span>
        <span className="type-body">Three</span>
      </div>
      <p className="type-label">container</p>
      <p className="type-body">
        Default, <span className="type-data">container-md</span>,{" "}
        <span className="type-data">container-lg</span>,{" "}
        <span className="type-data">container-fluid</span>.
      </p>
    </Page>
  );
}
