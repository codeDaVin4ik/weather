#!/usr/bin/env node
import { getArgs } from "./helper/args.js"
import { printHelp } from "./services/logService.js"

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
}

initCLI()
