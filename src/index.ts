//  Library
import * as core from '@actions/core'
import action from './action'

//  ====
//  MAIN
//  ====

async function run() {

    try {
        await action()
    } catch (err) {
        const error = err as Error
        core.error(error)
    }

}

run()