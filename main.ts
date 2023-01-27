#!/usr/bin/env node
import { exec } from "child_process"
import os from "os"
import fs from "fs"
exec("git config core.hooksPath ./node_modules/security_gate/.security-gate")

var type = os.type();
if(type !== "Windows_NT"){
    exec("chmod ug+x ./node_modules/security_gate/.security-gate/*")
}

const template =`#!/usr/bin/env sh

export NVM_DIR="$HOME/.nvm/nvm.sh"
. "$(dirname $NVM_DIR)/nvm.sh"

export NVM_DIR="$HOME/.nvm"
a=$(nvm ls | grep 'node')
b=$\{a#*(-> }
v=$\{b%%[)| ]*}

export PATH="$NVM_DIR/versions/node/$v/bin:$PATH"

node ./node_modules/security_gate/dist/index.js`


if(type === "Linux"){
    fs.writeFileSync(`./node_modules/security_gate/.security-gate/pre-commit`, template)
    fs.writeFileSync(`./node_modules/security_gate/.security-gate/pre-push`, template)
}