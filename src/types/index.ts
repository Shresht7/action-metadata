//  ================
//  TYPE DEFINITIONS
//  ================

interface ActionInput {
    description: string,
    required: boolean,
    default?: string
}

interface ActionOutput {
    description: string
}

export interface Action {
    name: string,
    author: string,
    description: string,
    runs: {
        using: string,
        main: string,
    },
    branding?: {
        icon?: string,
        color?: string
    },
    inputs?: Record<string, ActionInput>
    outputs?: Record<string, ActionOutput>
}