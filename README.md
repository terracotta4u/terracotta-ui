# Terracotta UI

A minimal collection of reusable CSS styles.

## Use

Apps take `terracotta.css` from a GitHub release. Link that one file. Do not edit it.

```bash
curl -fsSL -o terracotta.css \
  https://github.com/terracotta4u/terracotta-ui/releases/latest/download/terracotta.css
```

Put it with the app’s static CSS and replace it when you move to a new tag.

## Develop

Edit the split files in `terracotta-ui/`. Preview:

```bash
npm install
npm run dev
```

Bundle for apps:

```bash
npm run build
```

That writes `dist/terracotta.css`. Do not edit `dist/`.

## Acknowledgements

Terracotta's design language borrows heavily from a number of sources, some easier to credit than others:

- Steph Ango's [Flexoki](https://stephango.com/flexoki)
