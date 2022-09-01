# @lmc-eu/jobs-icons

> Icons of Jobs Design System.

## Install


```shell
yarn add @lmc-eu/jobs-icons
```

or

```shell
npm install --save @lmc-eu/jobs-icons
```

## Usage

### SVG files

You can use SVG files directly from `@lmc-eu/jobs-icons/svg` directory by importing them or copying them to your app structure.

### React

You can import SVG files directly from `@lmc-eu/jobs-icons/svg` directory in React components using a library like [React SVGR](https://react-svgr.com/).

Example configuration for Webpack:

```js
rules.unshift({
  test: /\.svg$/,
  enforce: 'pre',
  use: ['@svgr/webpack'],
});
```

```jsx
import Warning from '@lmc-eu/jobs-icons/svg/warning.svg';

<Warning />;
```

Or you can import React components directly from `@lmc-eu/jobs-icons/react`.

⚠️ Beware of naming, as all React component does, they are named using **PascalCase** and `Icon` suffix.

```jsx
import { WarningIcon } from '@lmc-eu/jobs-icons/react';
// or
import WarningIcon from '@lmc-eu/jobs-icons/react/WarningIcon';

<WarningIcon />;
```

### Icons paths

Alternatively you can use an `icons` object which consists of an icon name and SVG content. Thus you can fabricate your icon yourself.

```jsx
import icons from '@lmc-eu/jobs-icons/icons';

export const Icon = ({ name, , size }) => {
  return (
    <svg
      fill="currentColor"
      width={size}
      height={size}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
};
```
