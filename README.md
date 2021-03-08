# Keytar CLI

keytar cli is a simple command line interface into GitHub's [node-keytar](https://github.com/atom/node-keytar) - a password/secrets management utility written for node.

## Getting Started

```bash
$ npx keytar-cli-2 set -s service1 -a testuser
prompt: Enter the password for testuser@service1:
Successfully set the creds for testuser@service1!
$ npx keytar-cli find -s service1
Here are the creds for service1 [ { account: 'testuser', password: 'password' } ]
```
or

```bash
$ npm install -g keytar-cli-2
$ keytar --help
keytar <cmd> [args]

Commands:
  keytar delete [service] [account]          Delete the stored password for the `service` and `account`.
  keytar find [service]                      find credentials for a service
  keytar set [service] [account] [password]  set credentials for a service

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

$ keytar set -s service1 -a testuser
prompt: Enter the password for testuser@service1:
Successfully set the creds for testuser@service1!
$ keytar find -s service1
Here are the creds for service1 [ { account: 'testuser', password: 'password' } ]
```
