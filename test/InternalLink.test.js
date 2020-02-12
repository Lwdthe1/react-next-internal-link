import React from "react";
import pjson from "../package.json";
import path from "path";
import renderer from "react-test-renderer";

// Test the root of the lib
const InternalLink = require(path.join(__dirname, "../", pjson.main)).default;

describe.only("InternalLink.test", () => {
  test("Creates internal (relative) link when provided 'as' is an absolute url with protocol and host", () => {
    const component = renderer.create(
      <InternalLink as="http://example.com/collections">
        <a className="link u-paddingLeft2 u-textColorGreenNormal u-border0">
          View collections
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link when provided 'as' is an absolute url with protocol and host and 'href' is provided", () => {
    const component = renderer.create(
      <InternalLink
        href="/collections?id=abc1"
        as="http://example.com/collection/abc1"
      >
        <a className="link u-paddingLeft2 u-textColorGreenNormal u-border0">
          View collection abc1
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link with 'href' used as the final anchor href when only 'href' is provided", () => {
    const component = renderer.create(
      <InternalLink href="/collections">
        <a className="link u-paddingLeft2 u-textColorGreenNormal u-border0">
          View all
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link with 'as' used as the final anchor href when 'href' and 'as' are provided.", () => {
    const component = renderer.create(
      <InternalLink href="/collection?id=abc1" as="collection/abc1">
        <a className="link u-paddingLeft2 u-textColorGreenNormal u-border0">
          View collection abc1
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link with 'href' used as the final anchor href when 'href' is provided with query params.", () => {
    const component = renderer.create(
      <InternalLink href="/collection?id=abc1">
        <a className="link u-paddingLeft2 u-textColorGreenNormal u-border0">
          View collection abc1
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link and respects url fragment", () => {
    const component = renderer.create(
      <InternalLink
        href="/collection?id=abc1"
        as="https://example.com/collection/abc1#div=pricing"
      >
        <a
          className="link u-paddingLeft2 u-textColorGreenNormal u-border0"
          style={{ color: "red" }}
          data-field1="field 1"
        >
          View collection abc1
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link and respects url query string and fragment", () => {
    const component = renderer.create(
      <InternalLink
        href="/collection?id=abc1"
        as="https://example.com/collection/abc1?do=something1&for=me#div=pricing"
      >
        <a
          className="link u-paddingLeft2 u-textColorGreenNormal u-border0"
          style={{ color: "red" }}
          data-field1="field 1"
        >
          View collection abc1
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link and respects url query string and fragment with port", () => {
    const component = renderer.create(
      <InternalLink
        href="/collection?id=abc1"
        as="http://example.com:3100/collection/abc1?do=something1&for=me#div=pricing"
      >
        <a
          className="link u-paddingLeft2 u-textColorGreenNormal u-border0"
          style={{ color: "red" }}
          data-field1="field 1"
        >
          View collection abc1
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creates internal (relative) link and passes along all props", () => {
    const component = renderer.create(
      <InternalLink
        href="/collection?id=abc1"
        as="https://example.com/collection/abc1"
      >
        <a
          className="link u-paddingLeft2 u-textColorGreenNormal u-border0"
          style={{ color: "red" }}
          data-field1="field 1"
        >
          View collection abc1
        </a>
      </InternalLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
