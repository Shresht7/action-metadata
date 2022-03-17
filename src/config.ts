//  Library
import * as core from '@actions/core'
import * as nodePath from 'node:path'

// ======
// CONFIG
// ======

const workspace = process.env.GITHUB_WORKSPACE || ''

export const target = core.getInput('path')

export const path = nodePath.join(workspace, target)

export const prettyPrint = core.getBooleanInput('prettyPrint')