

export interface DataModel {
    data : DataType,
    status: string
}

export interface DataType{
    created_on: string,
    dataset: string,
    is_downloadable: boolean,
    metadata : Metadata,
    updated_on:string,
    versions: string[],
}

export interface Metadata {
    added_date: string,
    cautions: string,
    citation: string,
    data_language: string,
    function: string,
    geographic_coverage: string,
    key_restrictions: string,
    learn_more: string,
    license: string,
    other: string,
    overview: string,
    resolution: string,
    scale: number,
    source: string,
    subtitle: string,
    tags: string[],
    title: string,
    update_frequency: string,
    why_added: string,
}