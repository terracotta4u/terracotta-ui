import { Page } from "../page-ui";

export default function TypographyPage() {
  return (
    <Page title="Typography" file="foundations/typography.css">
      <p className="type-display">Display</p>
      <p className="type-heading">Heading</p>
      <p className="type-body">
        Body copy for reading. The quick brown fox jumps over the lazy dog.
      </p>
      <p className="type-label">Label</p>
      <p className="type-data">gpt-5.6</p>
      <p className="type-code">golem serve</p>
    </Page>
  );
}
