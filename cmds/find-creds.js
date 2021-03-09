/**
 * $File: find-creds.js $
 * $Date: 2021-03-09 12:50:42 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

"use strict";

const keytar = require("keytar");

exports.command = "find-creds [service]";
exports.desc = "Find all accounts and password for the `service` in the keychain";
exports.builder = {
  service: {
    alias: "s"
  }
};

exports.handler = async ({ service }) => {
  if (!service) {
    throw new Error("provide required params (service)");
  }
  const creds = await keytar.findCredentials(service);
  console.log(creds);
};
