const keytar = require("keytar");
const prompt = require("prompt");
const { promisify } = require("util");

exports.command = "set [service] [account]";
exports.desc = "set credentials for a service";
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
  prompt.start();
  const { password } = await promisify(prompt.get)({
    properties: {
      password: {
        description: `Enter the password for ${account}@${service}`,
        hidden: true
      }
    }
  });

  await keytar.setPassword(service, account, password);
  console.log(`Successfully set the creds for ${account}@${service}!`);
};
