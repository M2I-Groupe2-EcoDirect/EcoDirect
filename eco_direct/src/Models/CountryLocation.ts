export interface CountryLocation {
    type: string,
    features: Localisation[],
}

export interface Localisation {
    type: string,
    properties: Country,
    geometry: Geometry
}

export interface Country{
    ADMIN: string,
    ISO_A3: string
}

export interface Geometry {
    coordinates: [[number[]]],
    type: string
}