#!/usr/bin/env node
import { exec } from "child_process"
import os from "os"
exec("git config core.hooksPath ./node_modules/security_gate/.security-gate")

var type = os.type();
if(type !== "Windows_NT"){
    exec("chmod ug+x ./node_modules/security_gate/.security-gate/*")
}