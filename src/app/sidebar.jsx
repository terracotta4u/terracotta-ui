"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { foundations, primitives } from "./nav";

function NavGroup({ title, items, pathname }) {
  return (
    <div className="stack gap-2">
      <p className="type-label">{title}</p>
      <ul className="preview-nav-list stack gap-1">
        {items.map((item) => (
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
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="preview-sidebar stack gap-6">
      <p className="type-heading">Terracotta UI</p>
      <nav className="stack gap-6" aria-label="Preview">
        <NavGroup title="Foundations" items={foundations} pathname={pathname} />
        <NavGroup title="Primitives" items={primitives} pathname={pathname} />
      </nav>
    </aside>
  );
}
