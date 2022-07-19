# awesome-range



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                    | Type                    | Default |
| -------- | --------- | ---------------------------------------------- | ----------------------- | ------- |
| `max`    | `max`     | Maximum number of the range. Default to `100`. | `number`                | `100`   |
| `min`    | `min`     | Minimum number of the range. Default to `0`.   | `number`                | `0`     |
| `step`   | `step`    | Step of the range. Default to `""`.            | `"" \| "any" \| number` | `''`    |
| `value`  | `value`   | Value of the range. Default to `0`.            | `number`                | `0`     |


## Events

| Event           | Description                   | Type                           |
| --------------- | ----------------------------- | ------------------------------ |
| `awesomeChange` | Event of value being changed. | `CustomEvent<[number, Event]>` |
| `awesomeInput`  | Event of value being input.   | `CustomEvent<InputEvent>`      |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"native"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
