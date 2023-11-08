# IMAGELINK

The `mjc-image-link` is extend of the `mj-image` component and add some custom attributes.

```mjml
<mjc-image-link
  src="https://ijobs.cz/static/images/email/logo-jobs.png?1"
  alt="jobs.cz logo"
  href="https://jobs.cz"
  data-msys-linkname="header"
/>
```

## Available props

| Prop name            | Type     | Default | Required | Description              |
| -------------------- | -------- | ------- | -------- | ------------------------ |
| `data-msys-linkname` | `string` | -       | no       | Data analytics attribute |

You can add all attributes as to `mj-image` component look at the [mj-image][image-doc] documentation in MJML README.

[image-doc]: https://documentation.mjml.io/#mj-image
