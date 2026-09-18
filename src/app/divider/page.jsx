import { Page } from "../page-ui";

export default function DividerPage() {
  return (
    <Page title="Divider" file="components/divider.css">
      <p className="type-body">Above.</p>
      <hr />
      <p className="type-body">Native hr.</p>
      <div className="divider" />
      <p className="type-body">Class divider.</p>
    </Page>
  );
}
