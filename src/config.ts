//  Library
import * as core from '@actions/core'

//  Helpers
import { getMetadataFilePath } from './helpers'
import { inputs } from './metadata'

//  Type Definitions
import type { alignment } from './types'

// ======
// CONFIG
// ======

/** GITHUB_WORKSPACE */
const workspace = process.env.GITHUB_WORKSPACE || ''

if (!workspace) {
    throw new Error('Invalid GITHUB_WORKSPACE. You need to checkout this repository using the actions/checkout@v3 github-action for the GITHUB_WORKSPACE environment variable.')
}

/** Path to the metadata file */
const metadataPath = getMetadataFilePath(workspace)

if (!metadataPath) {
    throw new Error('Failed to locate action metadata file. Make sure `action.yaml` or `action.yml` exists!')
}

/** Workspace path to the action metadata file */
export const path = metadataPath

/** Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] */
export const inputAlignment = core.getInput(inputs.inputAlignment).split(',').map(x => x.trim()) as alignment[]
/** Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] */
export const outputAlignment = core.getInput(inputs.outputAlignment).split(',').map(x => x.trim()) as alignment[]