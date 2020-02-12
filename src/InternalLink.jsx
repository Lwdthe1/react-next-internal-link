/**
 * @fileoverview This component makes working with internal links in NextJs easier
 * when you are dealing with absolute urls.
 * TODO(lincoln) open source this.
 */

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { getUrlWithoutProtocolHost } from "./utils/urls";

const noWindow = typeof window === "undefined" || !!window.isSsrFake;

/**
 * 
 * "href" is the path of the nextjs page
 * in your pages directory.
 * 
 * "as" is how you want the url to display in the browser.
 * This is the pretty url.
 * 
 * @param {{
  href: String,
  as: String
 * }} props 
 */
const InternalLink = props => {
  const newProps = { ...props };

  if (!props.href) {
    console.warn("Provided empty href", props);
  }

  if (!props.as) {
    console.warn("Provided empty as", props);
  }

  newProps.href = props.href || "";
  newProps.as = props.as ? getUrlWithoutProtocolHost(props.as) : undefined;

  if (
    !newProps.skipLinkInIframeMod &&
    newProps.target !== "_blank" &&
    !noWindow &&
    window.self !== window.top
  ) {
    return React.cloneElement(props.children, {
      ...props,
      href: newProps.as,
      as: undefined,
      target: "_parent",
      "data--internal-link-in-iframe": true,
      children: React.Children.toArray(props.children)[0].props.children
    });
  }

  return <Link {...newProps} />;
};

InternalLink.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string
};

InternalLink.defaultProps = {
  as: undefined
};

export default InternalLink;
