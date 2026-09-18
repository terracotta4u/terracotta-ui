import { Page } from "../page-ui";

export default function GridPage() {
  return (
    <Page title="Grid" file="foundations/grid.css">
      <p className="type-body">12 columns. Resize for sm (40rem) and md (64rem).</p>
      <div className="row gap-3">
        <div className="col-12 col-sm-6 col-md-4 preview-cell type-label">
          col-12 / sm-6 / md-4
        </div>
        <div className="col-12 col-sm-6 col-md-4 preview-cell type-label">
          col-12 / sm-6 / md-4
        </div>
        <div className="col-12 col-sm-6 col-md-4 preview-cell type-label">
          col-12 / sm-6 / md-4
        </div>
      </div>
      <div className="row gap-3">
        <div className="col-4 preview-cell type-label">col-4</div>
        <div className="col-8 preview-cell type-label">col-8</div>
      </div>
    </Page>
  );
}
