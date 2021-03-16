# Keytar CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Release](https://img.shields.io/github/release/emacs-grammarly/keytar-cli.svg?logo=github)](https://github.com/emacs-grammarly/keytar-cli/releases/latest)
[![Build Status](https://travis-ci.com/emacs-grammarly/keytar-cli.svg?branch=master)](https://travis-ci.com/emacs-grammarly/keytar-cli)
[![dependencies Status](https://status.david-dm.org/gh/emacs-grammarly/keytar-cli.svg)](https://david-dm.org/emacs-grammarly/keytar-cli)

keytar cli is a simple command line interface into GitHub's [node-keytar](https://github.com/atom/node-keytar) - a password/secrets management utility written for node.

## Getting Started

```bash
$ npx @emacs-grammarly/keytar-cli set -s service1 -a testuser -p xxxxxx
Successfully set the creds for testuser@service1!

$ npx keytar-cli find -s service1
Here are the creds for service1 [ { account: 'testuser', password: 'password' } ]
```
or

```bash
$ npm install -g @emacs-grammarly/keytar-cli
$ keytar --help
keytar <cmd> [args]

Commands:
  keytar delete-pass [service] [account]          Delete the stored password for the `service` and `account`
  keytar find-creds [service]                     Find all accounts and password for the `service` in the keychain
  keytar find-pass [service]                      Find a password for the `service` in the keychain
  keytar get-pass [service] [account]             Get the stored password for the `service` and `account`
  keytar set-pass [service] [account] [password]  Save the `password` for the `service` and `account` to the keychain

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

$ keytar set -s service1 -a testuser -p xxxxxx
Successfully set the creds for testuser@service1!

$ keytar find -s service1
Here are the creds for service1 [ { account: 'testuser', password: 'password' } ]
```
