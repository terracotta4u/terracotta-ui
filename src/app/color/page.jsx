import { Page, Swatch } from "../page-ui";

const steps = [50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950];
const hues = ["base", "red", "orange", "yellow", "green", "cyan", "blue", "purple", "magenta"];

export default function ColorPage() {
  return (
    <Page title="Color" file="css/colors.css">
      <div className="row gap-3">
        <div className="col-6 col-sm-3">
          <Swatch token="--paper" />
        </div>
        <div className="col-6 col-sm-3">
          <Swatch token="--black" fg="var(--paper)" />
        </div>
      </div>
      {hues.map((hue) => (
        <div key={hue} className="stack gap-2">
          <p className="type-label">{hue}</p>
          <div className="row gap-2">
            {steps.map((step) => (
              <div className="col-4 col-sm-2 col-md-1" key={step}>
                <Swatch
                  token={`--${hue}-${step}`}
                  fg={step >= 600 ? "var(--paper)" : "var(--black)"}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Page>
  );
}
