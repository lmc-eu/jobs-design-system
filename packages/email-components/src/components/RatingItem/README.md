# Rating

The `mjc-rating-item` is a component with the text below the icon and with the link. It uses for example setting the status of jobs offered in the e-mail template.

```mjml
<mjc-rating-item
  alt="Smiley in love"
  href="https://www.jobs.cz"
  src="https://ijobs.cz/static/images/email/icons/smiley-in-love.png?1"
  title="I'm hired"
/>
```

## Available props for mjc-rating-item

| Prop name            | Type      | Default | Required | Description                                                                                             |
| -------------------- | --------- | ------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `alt`                | `string`  | -       | no       | Image alternative descriptive text                                                                      |
| `data-msys-linkname` | `string`  |         | no       | Data analytics attribute                                                                                |
| `href`               | `string`  | -       | yes      | Link to url                                                                                             |
| `isTableCell`        | `boolean` | `false` | no       | Render RatingItem as table cell when being used in combination with Rating component as parent directly |
| `rel`                | `string`  | -       | no       | Relationship between a linked resource and the current document                                         |
| `src`                | `string`  | -       | yes      | Image source                                                                                            |
| `title`              | `string`  | `div`   | no       | Text located below icon                                                                                 |
