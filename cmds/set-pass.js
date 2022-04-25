/**
 * $File: set-pass.js $
 * $Date: 2021-03-09 12:49:38 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

"use strict";

const keytar = require("keytar");

exports.command = ['set-pass [service] [account] [password]'];
exports.desc = 'save the `password` for the `service` and `account` to the keychain';
exports.builder = {
  service: {
    description: 'service title',
    alias: 's',
    requiresArg: true,
    type: 'string',
  },
  account: {
    description: 'account name',
    alias: 'a',
    requiresArg: true,
    type: 'string',
  },
  password: {
    description: 'password or credentials',
    alias: 'p',
    requiresArg: true,
    type: 'string',
  }
};

exports.handler = async ({ service, account, password }) => {
  if (!service || !account || !password) {
    throw new Error("provide required params (service, account, password)");
  }
  await keytar.setPassword(service, account, password);
  console.log(`Successfully set the password for ${account}@${service}!`);
};
