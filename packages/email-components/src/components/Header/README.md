# HEADER

The `mjc-header` is component for e-mail header with company logo.

```mjml
<mjc-header
  externalLink="https://jobs.cz"
  imageAlt="jobs.cz logo"
  imageUrl="https://ijobs.cz/static/images/email/logo-jobs.png?1"
/>
```

## Available props

| Prop name      | Type                      | Default  | Required | Description                        |
| -------------- | ------------------------- | -------- | -------- | ---------------------------------- |
| `align`        | `left \| center \| right` | `center` | no       | Image aligment                     |
| `externalLink` | `string`                  | -        | no       | External link to some web page     |
| `height`       | `unit(px,%)`              | `24px`   | no       | Image height                       |
| `imageAlt`     | `string`                  | -        | no       | Image alternative descriptive text |
| `imageUrl`     | `string`                  | -        | yes      | Url to image                       |
| `width`        | `unit(px,%)`              | `60px`   | no       | Image width                        |
