import { Page } from "../page-ui";

export default function ButtonPage() {
  return (
    <Page title="Button" file="components/button.css">
      <div className="cluster">
        <button className="btn" type="button">
          Save
        </button>
        <button className="btn btn-secondary" type="button">
          Cancel
        </button>
        <button className="btn btn-ghost" type="button">
          View
        </button>
        <button className="btn btn-danger" type="button">
          Delete
        </button>
        <button className="btn" type="button" disabled>
          Disabled
        </button>
      </div>
    </Page>
  );
}
