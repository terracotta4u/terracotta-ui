import "../../terracotta-ui/terracotta.css";
import "./preview.css";
import { Sidebar } from "./sidebar";
import { ThemeToggle } from "./theme-toggle";

export const metadata = {
  title: "Terracotta UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="preview-shell">
          <Sidebar />
          <main className="preview-main grow">
            <div className="preview-toolbar">
              <ThemeToggle />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
