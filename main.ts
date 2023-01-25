#!/usr/bin/env node
import { exec } from "child_process"

exec("git config core.hooksPath ./node_modules/security_gate/.demo-husky")