<div align="center">

### Jobs Design System

[![Maintained with Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org)
[![Code Quality Checks](https://github.com/lmc-eu/jobs-design-system/actions/workflows/test.yaml/badge.svg?branch=main)](https://github.com/lmc-eu/jobs-design-system/actions)
[![Coverage Status](https://coveralls.io/repos/github/lmc-eu/jobs-design-system/badge.svg?branch=main)](https://coveralls.io/github/lmc-eu/jobs-design-system?branch=main)

Open-source parts of Jobs Design System developed by [LMC][lmc].

</div>

## Getting Started

See individual [packages](#packages) to learn how to get started.

## Packages

| Package name                                             | Description                          | Version                                             |
| -------------------------------------------------------- | ------------------------------------ | --------------------------------------------------- |
| [`@lmc-eu/jobs-design-tokens`](./packages/design-tokens) | Design tokens for Jobs Design System | [![@lmc-eu/jobs-design-tokens][jdt-badge]][jdt-npm] |
| [`@lmc-eu/jobs-icons`](./packages/icons)                 | Icons for Jobs Design System         | [![@lmc-eu/jobs-icons][ji-badge]][ji-npm]           |

## Development

### Prerequisites

- [Node >= 16](https://nodejs.org)
- [Yarn 1.22](https://yarnpkg.com)
- [Lerna 5.x](https://lerna.js.org)

### Start Development

- `git clone ssh://git@github.com:lmc-eu/jobs-design-system.git`
- `cd jobs-design-system`
- `yarn install`
- `yarn start`

See [`package.json`](./package.json) for all available tasks.

## License

See the [LICENSE](LICENSE.md) file for information.

[lmc]: https://github.com/lmc-eu
[jdt-npm]: https://www.npmjs.com/package/@lmc-eu/jobs-design-tokens
[jdt-badge]: https://img.shields.io/npm/v/%40lmc-eu/jobs-design-tokens.svg?style=flat-square
[ji-npm]: https://www.npmjs.com/package/@lmc-eu/jobs-icons
[ji-badge]: https://img.shields.io/npm/v/%40lmc-eu/jobs-icons.svg?style=flat-square
