//  Library
import * as core from '@actions/core'
import action from './action'

//  ====
//  MAIN
//  ====

/** Main entrypoint for the GitHub Action */
async function run() {
    try {
        await action()
    } catch (err) {
        const error = err as Error
        core.setFailed(error)
        console.error(error)
    }
}

run()