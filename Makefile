SHELL := /usr/bin/env bash

.PHONY: test-commands

#
## Development
test-commands:
	@echo "Test Commands..."
	./test/commands.sh
