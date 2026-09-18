# Terracotta UI

This repo is the source for the Terracotta CSS kit. Edit files here.

Apps copy this folder into their static assets. Do not edit those copies; change the kit here and replace the folder.

## Design

- **Color:** Palette in `css/colors.css`, light/dark roles in `css/theme.css`. Controls use theme roles (`--bg`, `--tx`, `--ui`, `--bl`, `--re`, …), not raw `--blue-600`, except when a hover/active step needs a named scale stop.
- **Type:** Raw stacks, sizes, and weights in `css/typography.css`. Use the `.type-*` roles (`display`, `heading`, `body`, `label`, `data`, `code`) instead of composing size/weight utilities.
- **Controls:** Square corners, 1px borders, no shadow, compact type, 48px where it’s a control, even padding. Default / hover / focus / disabled (and error on fields). One size until an app needs a smaller pair.
- **Buttons:** `.btn`, `.btn-secondary`, `.btn-ghost`, `.btn-danger`. Do not add sizes or extra variants until an app needs them.
- **Fields:** `input`, `textarea`, and `select` share `.input` until they need to look different.
- **Icons:** 16px, `currentColor`. No icon pack in this repo.

Do not add cards, panels, tabs, nav, tables, or other product chrome here. If an app repeats a structure, promote that structure into `components/`.

## Layout

```
terracotta.css          # barrel; apps link this one file
css/                    # foundations: color, theme, type, space, layout, grid
components/             # primitives: button, input, and other boring controls
```

Add a new primitive as `components/<name>.css` and `@import` it from `terracotta.css`.

App-specific styles stay in the app.
