# ResultCard

The `mjc-result-card` is component to render result card in your emails.

```mjml
<mjc-result-card
  badge="Company responds within 2 weeks"
  employer="UniCredit Bank Czech Republic and Slovakia"
  link="https://jobs.cz"
  salary="30 000 - 50 000 Kč"
  subtitle="TIP"
  title="Sales representative of dispensing points - Moravian-Silesian region"
/>
```

## Available props

| Name            | Type            | Default | Required | Description          |
| --------------- | --------------- | ------- | -------- | -------------------- |
| badge           | `string`        |         | no       | Your badge text      |
| bottomSeparator | `true \| false` | `false` | no       | Show bottom seprator |
| employer        | `string`        |         | yes      | Emloyer name         |
| link            | `string`        |         | yes      | Link to url          |
| location        | `string`        |         | no       | Location             |
| salary          | `string`        |         | no       | Salary badge         |
| subtitle        | `string`        |         | no       | Subtitle text        |
| title           | `string`        |         | yes      | Card title           |
