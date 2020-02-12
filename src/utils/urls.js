const _parseUrl = require("url-parse");

function extractUrlHostnameAsIs(url) {
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("://") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }

  //find & remove port number
  hostname = hostname.split(":")[0];
  //find & remove "?"
  hostname = hostname.split("?")[0];

  return hostname.includes(".") ? hostname : "";
}

function getUrlPathname(url) {
  const parts = url.replace("//", "").split(`/`);
  if (parts[0].includes(".")) {
    parts.shift();
  }

  if (parts.length === 1 && parts[0] === "") {
    return "/";
  }

  const pathname = `${
    parts
      .join("/")
      .split("?")[0]
      .split("#")[0]
  }`;
  return (pathname ? `/${pathname}` : "").replace("//", "/");
}

function customParseUrl(url) {
  if (!url) return url;

  let meta = _parseUrl(url);
  if (meta.protocol) meta.protocol = meta.protocol.replace(":", "");
  const extractedHostname = extractUrlHostnameAsIs(url);

  const pathname = getUrlPathname(url);
  meta.hostname = extractedHostname.toLowerCase();

  const protocol = meta.protocol.toLowerCase();
  const hostname = meta.hostname;
  const port = meta.port;

  const protocolHost = `${protocol ? `${protocol}://` : ""}${hostname}${
    port ? `:${port}` : ""
  }`;

  const afterHost = `${pathname}${meta.query}${meta.hash}`;

  return {
    url: url,
    protocol,
    hasProtocol: !!meta.slashes,
    hostname,
    pathname,
    query: meta.query,
    protocolHost,
    afterHost: afterHost.startsWith("/") ? afterHost : `/${afterHost}`
  };
}

/**
 *
 * @param {String} url
 * @returns the url without its protocol or host.
 */
function getUrlWithoutProtocolHost(url) {
  if (!url) return "/";

  const urlPathQuery = customParseUrl(url).afterHost;
  return urlPathQuery.startsWith("/") ? urlPathQuery : `/${urlPathQuery}`;
}

module.exports = {
  getUrlWithoutProtocolHost,
  parseUrl: customParseUrl
};
