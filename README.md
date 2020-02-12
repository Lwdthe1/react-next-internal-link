# react-next-internal-link

![carbon (34)](https://user-images.githubusercontent.com/5778798/73144670-158b7100-4076-11ea-84e0-6b01bf1a42e1.png)

[![NPM](https://img.shields.io/npm/v/react-next-internal-link.svg)](https://www.npmjs.com/package/react-next-internal-link) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-next-internal-link
```

## Usage

Import as "InternalLink" and use as illustrated in the examples below. See the tests for examples of more advanced usages.

```jsx
import React, { Component } from "react";

import InternalLink from "react-next-internal-link";

class Example extends Component {
  render() {
    return (
      <div>
        <h1>Example uses:</h1>

        <div>
          <h2>Example 1:</h2>
          <p>Convert absolute url to internal, relative url</p>
          <InternalLink
            href="collection?id=abc123"
            as="http://example.com/collection/abc123"
            className="u-textColorGreen"
          >
            Visit collection abc123
          </InternalLink>

          <div>
            <a href="/collection/abc" className="u-textColorGreen">
              Visit collection abc123
            </a>
          </div>
        </div>
      </div>
    );
  }
}
```

## Test

`npm run test`

## License

By [Lincoln W Daniel](https://lincolnwdaniel.com)

MIT © [Lwdthe1](https://github.com/Lwdthe1)
