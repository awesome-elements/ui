# awesome-tabs



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                   | Type             | Default     |
| ------------- | ------------- | --------------------------------------------- | ---------------- | ----------- |
| `orientation` | `orientation` | * Orientation of the tabs. Default to `down`. | `"down" \| "up"` | `'down'`    |
| `value`       | `value`       | Value of the tabs.                            | `string`         | `undefined` |


## Events

| Event           | Description                   | Type                              |
| --------------- | ----------------------------- | --------------------------------- |
| `awesomeChange` | Event of value being changed. | `CustomEvent<{ value: string; }>` |


## Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"container"` |             |
| `"edge"`      |             |
| `"highlight"` |             |


## Dependencies

### Depends on

- awesome-grid
- awesome-grid-item

### Graph
```mermaid
graph TD;
  awesome-tabs --> awesome-grid
  awesome-tabs --> awesome-grid-item
  style awesome-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
