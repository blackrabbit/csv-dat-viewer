# csv-dat-viewer

CSV viewer that takes a data config like below and allows you to browse the datasets listed in it.

```
[
  {
    "name": "dummy",
    "url": "https://example/content.csv",
    "row_count": 3
  },
]
```

# Features

- Efficient table viewing for large datasets by keeping DOM small and avoiding garage collection by reusing cells.
- Support for parsing large datasets off-thread in a web worker to keep browser responsive.
- Minimal memory usage for sorting datasets.

# Dependencies

- Used `papaparse` for CSV parsing (https://www.papaparse.com/)
- `data-ui` for graph rendering (https://github.com/williaster/data-ui)
- `Webpack 4` for bundling JS, CSS and HTML.
- `Babel` for cross browser support
- `React` for rendering UI