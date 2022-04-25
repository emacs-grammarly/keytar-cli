[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Release](https://img.shields.io/github/release/emacs-grammarly/keytar-cli.svg?logo=github)](https://github.com/emacs-grammarly/keytar-cli/releases/latest)
[![npm](https://img.shields.io/npm/v/@emacs-grammarly/keytar-cli?logo=npm&color=green)](https://www.npmjs.com/package/@emacs-grammarly/keytar-cli)
[![npm-dm](https://img.shields.io/npm/dm/@emacs-grammarly/keytar-cli.svg)](https://npmcharts.com/compare/@emacs-grammarly/keytar-cli?minimal=true)

# Keytar CLI

[![CI](https://github.com/emacs-grammarly/keytar-cli/actions/workflows/test.yml/badge.svg)](https://github.com/emacs-grammarly/keytar-cli/actions/workflows/test.yml)
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
keytar is the main command, used to manage your passwords and credentials

Keytar is a native Node module to get, add, replace, and delete passwords in system's keychain.

Usage: keytar <command> [options..]

Commands:
  delete-pass [service] [account]          Delete the stored password for the `service` and `account`
  find-creds [service]                     Find all accounts and password for the `service` in the keychain
  find-pass [service]                      Find a password for the `service` in the keychain
  get-pass [service] [account]             Get the stored password for the `service` and `account`
  set-pass [service] [account] [password]  Save the `password` for the `service` and `account` to the keychain

Options:
  --version  Show version number  [boolean]
  --help     Show help            [boolean]

$ keytar set -s service1 -a testuser -p xxxxxx
Successfully set the creds for testuser@service1!

$ keytar find -s service1
Here are the creds for service1 [ { account: 'testuser', password: 'password' } ]
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
