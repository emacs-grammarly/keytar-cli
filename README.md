# Keytar CLI

## About

keytar cli is a simple command line interface into GitHub's [node-keytar](https://github.com/atom/node-keytar) - a password/secrets management utility written for node.

## Getting Started

```bash
$ npx keytar-cli set -s service1 -a testuser
prompt: Enter the password for testuser@service1:  
Successfully set the creds for testuser@service1!
$ npx keytar-cli find -s service1
Here are the creds for service1 [ { account: 'testuser', password: 'password' } ]
```
or

```bash
$ npm install -g keytar-cli
$ keytar --help
keytar <cmd> [args]

Commands:
  keytar find --service <name>              find credentials for a service
  keytar set --service <name> --account     set credentials for a service
  <account>

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

$ keytar set -s service1 -a testuser
prompt: Enter the password for testuser@service1:  
Successfully set the creds for testuser@service1!
$ keytar find -s service1
Here are the creds for service1 [ { account: 'testuser', password: 'password' } ]
```