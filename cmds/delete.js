/**
 * $File: delete.js $
 * $Date: 2021-03-08 21:52:38 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

"use strict";

const keytar = require("keytar");

exports.command = "delete [service] [account]";
exports.desc = "Delete the stored password for the `service` and `account`.";
exports.builder = {
  service: {
    alias: "s",
    requiresArg: true
  },
  account: {
    alias: "a",
    requiresArg: true
  }
};

exports.handler = async ({ service, account }) => {
  if (!service || !account) {
    throw new Error("provide required params (service, account)");
  }
  await keytar.deletePassword(service, account);
  console.log(`Successfully delete the creds for ${account}@${service}!`);
};
