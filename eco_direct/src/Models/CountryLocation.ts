export interface CountryLocation {
    features: Localisation[],
    sql: string

}

export interface Localisation {
    type: string,
    geometry: Geometry
}

export interface Geometry {
    coordinates: Coordinates[]
}

export interface Coordinates {
    entry: number[]
}