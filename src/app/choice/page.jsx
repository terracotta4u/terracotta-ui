import { Page } from "../page-ui";

export default function ChoicePage() {
  return (
    <Page title="Choice" file="components/choice.css">
      <label className="choice">
        <input type="checkbox" defaultChecked />
        Remember me
      </label>
      <label className="choice">
        <input type="checkbox" disabled />
        Disabled
      </label>
      <div className="cluster">
        <label className="choice">
          <input type="radio" name="speed" defaultChecked />
          Fast
        </label>
        <label className="choice">
          <input type="radio" name="speed" />
          Default
        </label>
      </div>
    </Page>
  );
}
