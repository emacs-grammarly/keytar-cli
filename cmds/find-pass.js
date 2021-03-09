/**
 * $File: find-pass.js $
 * $Date: 2021-03-09 12:51:34 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

"use strict";

const keytar = require("keytar");

exports.command = "find-pass [service]";
exports.desc = "Find a password for the `service` in the keychain";
exports.builder = {
  service: {
    alias: "s"
  }
};

exports.handler = async ({ service }) => {
  if (!service) {
    throw new Error("provide required params (service)");
  }
  const pass = await keytar.findPassword(service);
  console.log(pass);
};
