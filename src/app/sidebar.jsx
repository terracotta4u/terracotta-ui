"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primitives } from "./nav";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="preview-sidebar stack gap-6">
      <p className="type-heading">Terracotta UI</p>
      <nav className="stack gap-6" aria-label="Preview">
        <div className="stack gap-2">
          <p className="type-label">Primitives</p>
          <ul className="preview-nav-list stack gap-1">
            {primitives.map((item) => (
              <li key={item.href}>
                <Link
                  className={
                    pathname === item.href
                      ? "preview-nav-link type-body active"
                      : "preview-nav-link type-body"
                  }
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="stack gap-2">
          <p className="type-label">Components</p>
          <p className="type-body">
            None yet. Promote a structure from an app when it repeats.
          </p>
        </div>
      </nav>
    </aside>
  );
}
