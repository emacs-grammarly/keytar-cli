SHELL := /usr/bin/env bash

.PHONY: test-commands

#
## Development
test-commands:
	@echo "Test Commands..."
	chmod -R 777 ./
	npm install
	./test/commands.sh
