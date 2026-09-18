import { Page, Swatch } from "../page-ui";

const roles = ["--bg", "--bg-2", "--ui", "--ui-2", "--ui-3", "--tx-3", "--tx-2", "--tx"];
const accents = ["--re", "--or", "--ye", "--gr", "--cy", "--bl", "--pu", "--ma"];
const accents2 = ["--re-2", "--or-2", "--ye-2", "--gr-2", "--cy-2", "--bl-2", "--pu-2", "--ma-2"];

export default function ThemePage() {
  return (
    <Page title="Theme" file="css/theme.css">
      <p className="type-body">
        Roles follow the OS, Light, or Dark. Press{" "}
        <span className="type-data">D</span> to toggle Light and Dark. Set{" "}
        <span className="type-data">data-theme</span> on{" "}
        <span className="type-data">html</span>.
      </p>
      <div className="row gap-3">
        {roles.map((token) => (
          <div className="col-6 col-sm-3" key={token}>
            <Swatch token={token} fg={token === "--tx" ? "var(--bg)" : "var(--tx)"} />
          </div>
        ))}
      </div>
      <div className="row gap-3">
        {accents.map((token) => (
          <div className="col-6 col-sm-3" key={token}>
            <Swatch token={token} fg="var(--paper)" />
          </div>
        ))}
      </div>
      <div className="row gap-3">
        {accents2.map((token) => (
          <div className="col-6 col-sm-3" key={token}>
            <Swatch token={token} fg="var(--paper)" />
          </div>
        ))}
      </div>
    </Page>
  );
}
