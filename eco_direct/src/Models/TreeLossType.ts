export interface TreeLossType{
    data: TreeCoverLoss[],
    status: string
}

export interface TreeCoverLoss{
    umd_tree_cover_loss__year: number,
    area__ha: number
}