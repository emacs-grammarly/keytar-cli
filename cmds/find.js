const keytar = require("keytar");

exports.command = "find [service]";
exports.desc = "find credentials for a service";
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
  console.log(`Here are the creds for ${service}`, creds);
};
