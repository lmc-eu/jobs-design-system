# Jobs Design Tokens

[![Code Quality Checks][ccc-badge]][ccc-action]
[![@lmc-eu/spirit-design-tokens][npm-badge]][npm-pkg]

Design tokens for Jobs.cz brand. Based on [Spirit Design Tokens][spirit-dt]. Automatically generated from [Figma][figma] using [Supernova][supernova].

## Contributing

Changes from [Figma][figma] are imported and parsed using [Supernova][supernova], which is generating pull-requests using [Spirit SCSS Exporter][spirit-scss-exporter]. The pull-request with updated design tokens needs to be labeled and checked before merge.

Version bumping is done using semantic versioning. The version type is determined by pull-request labels. Please use `BC` for major changes, `feature` for minor changes, and `bug` for patches.

Package publishing is done automatically using Github Actions by merging the pull-request into the main branch.

[ccc-badge]: https://github.com/lmc-eu/jobs-design-tokens/actions/workflows/test.yaml/badge.svg?branch=main
[ccc-action]: https://github.com/lmc-eu/jobs-design-tokens/actions
[npm-badge]: https://img.shields.io/npm/v/%40lmc-eu/jobs-design-tokens.svg?style=flat-square
[npm-pkg]: https://www.npmjs.com/package/@lmc-eu/jobs-design-tokens
[figma]: https://figma.com
[supernova]: https://www.supernova.io/
[spirit-dt]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens
[spirit-scss-exporter]: https://github.com/lmc-eu/exporter-spirit-scss
