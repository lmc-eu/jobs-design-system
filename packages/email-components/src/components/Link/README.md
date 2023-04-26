# Link

The `mjc-link` component to create link.

```mjml
<mjc-link href="www.sezam.cz" color="seconrady" size="small">Link</mjc-link>
```

## Available props

| Name             | Type                               | Default   | Required | Description                                                      |
| ---------------- | ---------------------------------- | --------- | -------- | ---------------------------------------------------------------- |
| `align`          | `left \| center \| right`          | `left`    | no       | Text aligment                                                    |
| `color`          | `primary \| secondary \| inverted` | `primary` | no       | Link color                                                       |
| `href`           | `string`                           | -         | yes      | Link to                                                          |
| `padding-bottom` | `unit(px,%)`                       | -         | no       | Bottom spacing                                                   |
| `padding-top`    | `unit(px,%)`                       | -         | no       | Top spacing                                                      |
| `padding`        | `unit(px){1,4}`                    | -         | no       | Spacing                                                          |
| `rel`            | `string`                           | -         | no       | Relationship between a linked resource and the current document. |
| `size`           | `small \| medium`                  | `medium`  | no       | Size of the text                                                 |