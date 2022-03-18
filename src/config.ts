//  Library
import * as core from '@actions/core'
import * as nodePath from 'node:path'
import { inputs } from './metadata'

// ======
// CONFIG
// ======

/** GITHUB_WORKSPACE */
const workspace = process.env.GITHUB_WORKSPACE || ''

if (!workspace) { throw new Error('Invalid GITHUB_WORKSPACE. You need to checkout this repository using the actions/checkout@v3 github-action for the GITHUB_WORKSPACE environment variable.') }

/** Path the source action metadata file. (default: `action.yaml`) */
export const src = core.getInput(inputs.src, { required: true })

/** Workspace path to the action metadata file */
export const path = nodePath.join(workspace, src)