const keytar = require("keytar");

exports.command = "set [service] [account] [password]";
exports.desc = "set credentials for a service";
exports.builder = {
  service: {
    alias: "s",
    requiresArg: true
  },
  account: {
    alias: "a",
    requiresArg: true
  },
  password: {
    alias: "p",
    requiresArg: true
  }
};

exports.handler = async ({ service, account, password }) => {
  if (!service || !account || !password) {
    throw new Error("provide required params (service, account, password)");
  }
  await keytar.setPassword(service, account, password);
  console.log(`Successfully set the creds for ${account}@${service}!`);
};
