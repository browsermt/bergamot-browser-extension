/* eslint-disable */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

// AUTOGENERATED BY glean_parser.  DO NOT EDIT.

// Global variable to use when in Qt/QML environments,
// where do not have access to the global object (i.e. window);
var pings;

// Universal Module Definition (UMD) template based on:
// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["@mozilla/glean/dist/webext"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require("@mozilla/glean/dist/webext"));
  } else if (typeof root === "undefined") {
    // In Qt/QML environments we can't change the global object from Javascript.
    // We will simply assing to a global variable in this case.
    pings = factory(webext.Glean);
  } else {
    // Browser globals (root is window)
    if (!root["gleanAssets"]) {
      root["gleanAssets"] = {};
    }
    root["gleanAssets"]["pings"] = factory(root.webext);
  }
})(typeof self !== "undefined" ? self : this, function(Glean) {
  return {
    /**
     * A custom ping, sending time is fully controlled by the application.
     *
     * Generated from `custom`.
     */
    custom: new Glean._private.PingType({
      includeClientId: true,
      sendIfEmpty: false,
      name: "custom",
      reasonCodes: [],
    }),
  };
});
