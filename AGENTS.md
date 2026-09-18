# Terracotta UI

This repo is the source for the Terracotta CSS kit. Edit files here.

Apps copy this folder into their static assets. Do not edit those copies; change the kit here and replace the folder.

## Design

- **Color:** Palette in `css/colors.css`, light/dark roles in `css/theme.css`. Components use theme roles (`--bg`, `--tx`, `--ui`, `--bl`, `--re`, …), not raw `--blue-600`, except when a hover/active step needs a named scale stop.
- **Components:** Square corners, 1px borders, no shadow, compact 14px type, 48px controls, even padding. One size and a few classes until an app needs more.

## Layout

```
terracotta.css          # barrel; apps link this one file
css/                    # tokens and layout utilities
components/             # one file per control
```

Add a new control as `components/<name>.css` and `@import` it from `terracotta.css`.

## Consuming apps

Drop this folder into static assets and link `terracotta.css`. App-specific styles stay in the app (`app.css`, etc.). Updates are a folder replace from a tagged revision.
