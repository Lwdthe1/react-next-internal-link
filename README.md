# react-next-internal-link

![carbon (38)](https://user-images.githubusercontent.com/5778798/74358582-b0cb5880-4d8f-11ea-9aba-589fbce4fc5e.png)

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
          >
            <a className="u-textColorGreen">Visit collection abc123</a>
          </InternalLink>

          <div>
            <h3>The result of this example is:</h3>

            <a href="/collection/abc" className="u-textColorGreen">
              Visit collection abc123
            </a>
          </div>
        </div>

        <div>
          <h2>Example 2:</h2>
          <p>
            It still works with urls that have a port, query string, and/or hash
            fragment
          </p>

          <InternalLink
            href="collection?id=abc123"
            as="http://example.com:3100/collection/abc123?user=userA&show=true#div=pricing"
            className="u-textColorGreen"
          >
            <a className="u-textColorGreen">Visit collection abc123</a>
          </InternalLink>

          <div>
            <h3>The result of this example is:</h3>

            <a
              href="/collection/abc?user=userA&show=true#div=pricing"
              className="u-textColorGreen"
            >
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
