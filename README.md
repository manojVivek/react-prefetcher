# React-Prefetcher

![GitHub](https://img.shields.io/github/license/manojVivek/react-prefetcher.svg)
![npm](https://img.shields.io/npm/v/react-prefetcher.svg?color=green)

A react library providing components that help with interaction-based asset pre-fetching.

## Installation

Using npm:

```bash
npm install react-prefetcher
```

Using yarn:

```bash
yarn add react-prefetcher
```

## Usage

### OnRenderPrefetcher

```javascript
import React, {Fragment} from 'react';
import {OnRenderPrefetcher} from 'react-prefetcher';

export default () => (
  <Fragement>
    <OnRenderPrefetcher link="https://example.com/some-asset-url">
      <p>Asset prefetching happens when this `<p />` tag is rendered</p>
    </OnRenderPrefetcher>
  </Fragment>
);
```

### OnHoverPrefetcher

```javascript
import React, {Fragment} from 'react';
import {OnHoverPrefetcher} from 'react-prefetcher';

export default () => (
  <Fragement>
    <OnHoverPrefetcher link="https://example.com/some-asset-url">
      <p>Asset prefetching happens when the user hovers this `<p />` tag </p>
    </OnHoverPrefetcher>
  </Fragment>
);
```

### OnClickPrefetcher

```javascript
import React, {Fragment} from 'react';
import {OnClickPrefetcher} from 'react-prefetcher';

export default () => (
  <Fragement>
    <OnClickPrefetcher link="https://example.com/some-asset-url">
      <p>Asset prefetching happens when the user clicks this `<p />` tag </p>
    </OnClickPrefetcher>
  </Fragment>
);
```

### Prefetcher

Customize prefetching by combining multiple interations.

```javascript
import React, {Fragment} from 'react';
import Prefetcher from 'react-prefetcher';

export default () => (
  <Fragement>
    <Prefetcher
      renderLink="https://example.com/on-render-asset-url"
      hoverLink="https://example.com/on-hover-asset-url"
      clickLink="https://example.com/on-click-asset-url"
    >
      <p>
        1. Prefetches https://example.com/on-render-asset-url on render of this `<p />` tag.
        2. Prefetches https://example.com/on-hover-asset-url when the user hovers this `<p />` tag.
        3. Prefetches https://example.com/on-click-asset-url when the user clicks this `<p />` tag.
      </p>
    </Prefetcher>
  </Fragment>
);
```

## Contributing

Pull requests are welcome.

## License

[MIT](https://github.com/manojVivek/react-prefetcher/blob/master/LICENSE)
