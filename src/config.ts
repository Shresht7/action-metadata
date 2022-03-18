//  Library
import * as core from '@actions/core'
import * as nodePath from 'node:path'
import { inputs } from './metadata'
import type { alignment } from './types'

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

/** Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] */
export const inputAlignment = core.getInput(inputs.inputAlignment).split(',').map(x => x.trim()) as alignment[]
/** Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] */
export const outputAlignment = core.getInput(inputs.outputAlignment).split(',').map(x => x.trim()) as alignment[]