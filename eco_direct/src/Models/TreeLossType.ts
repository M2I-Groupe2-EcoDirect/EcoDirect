export interface TreeLossType{
    data: TreeCoverLoss[],
    status: string
}

export interface TreeCoverLoss{
    umd_tree_cover_loss__year: number,
    area__ha: number
}

export interface PerteForestier{
    data: TreeCoverLossTotal[],
    status: string
}

export interface TreeCoverLossTotal{
    area__ha: number
}

