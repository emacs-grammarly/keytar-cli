/**
 * $File: get-pass.js $
 * $Date: 2021-03-09 12:43:45 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

"use strict";

const keytar = require("keytar");

exports.command = ['get-pass [service] [account]'];
exports.desc = 'get the stored password for the `service` and `account`';
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
  }
};

exports.handler = async ({ service, account }) => {
  if (!service || !account) {
    throw new Error("provide required params (service, account)");
  }
  const pass = await keytar.getPassword(service, account);
  console.log(pass);
};
