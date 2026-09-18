import { Page } from "../page-ui";

export default function InputPage() {
  return (
    <Page title="Input" file="primitives/input.css">
      <div className="stack gap-2">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input className="input" id="name" placeholder="Ada Lovelace" />
        <p className="hint">Shown on your profile.</p>
      </div>
      <div className="stack gap-2">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" id="email" defaultValue="ada" aria-invalid="true" />
        <p className="error">Enter a valid email.</p>
      </div>
      <div className="stack gap-2">
        <label className="label" htmlFor="model">
          Model
        </label>
        <select className="input" id="model">
          <option>Fast</option>
          <option>Default</option>
        </select>
      </div>
      <div className="stack gap-2">
        <label className="label" htmlFor="notes">
          Notes
        </label>
        <textarea className="input" id="notes" placeholder="Optional" />
      </div>
      <div className="stack gap-2">
        <label className="label" htmlFor="off">
          Disabled
        </label>
        <input className="input" id="off" defaultValue="Read only" disabled />
      </div>
    </Page>
  );
}
