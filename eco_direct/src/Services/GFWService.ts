import { CountryLocation, Geometry } from './../Models/CountryLocation';

// const API_KEY = "c425b648-c56f-4950-9b29-dcf2bf47c2de";
const API_KEY = process.env.REACT_APP_API_GFW;
const URI = "https://data-api.globalforestwatch.org/dataset"

class GFWService {
    /**
     * Méthode qui récupère la totalité des jeux de données
     * @returns JSON
     */
    getAllData = () => {
        return fetch(`${URI}s`).then((response) => response.json()).catch(err => console.error(err));
    }

    /**
     * Méthode qui récupère un jeux de données précis
     * @param dataSetName string
     * @returns 
     */
    getLatestDataByDatasetName = (dataSetName: string) => {
        return fetch(`${URI}/${dataSetName}`).then((response) => response.json()).catch(err => console.error(err));
    }

    /**
     * Récupère la totalité de la perte forestière, sur une plage d'anné, pour chaque année, dans une zone géographique précis
     * @param dataSetName string
     * @param dateDebut string
     * @param dateFin string
     * @returns JSON
     */
    getTreeCoverLoss = (dataSetName: string, dateDebut: number, dateFin: number, geometry: Geometry) => {    
        return fetch(`${URI}/${dataSetName}/latest/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY as string
            },
            body: JSON.stringify(
                {
                    "geometry": geometry,
                    "sql": `SELECT SUM(area__ha), umd_tree_cover_loss__year FROM results WHERE umd_tree_cover_loss__year >= ${dateDebut} AND umd_tree_cover_loss__year <= ${dateFin} GROUP BY umd_tree_cover_loss__year`
                }
            )
        }).then((response) => response.json()).catch(err => console.error(err));
    }

    // {
    //     "type": "Polygon",
    //     "coordinates": [
    //         [
    //             [
    //                 103.19732666015625,
    //                 0.5537709801264608
    //             ],
    //             [
    //                 103.24882507324219,
    //                 0.5647567848663363
    //             ],
    //             [
    //                 103.21277618408203,
    //                 0.5932511181408705
    //             ],
    //             [
    //                 103.19732666015625,
    //                 0.5537709801264608
    //             ]
    //         ],
    //     ],
    // },
    /**
     * Récupère la totalité de la perte forestière entre deux dates dans une zone géographique précis
     * @param dataSetName string
     * @param dateDebut string
     * @param dateFin string
     * @returns JSON
     */

    getAllTreeCoverLoss = (dataSetName: string, dateDebut: number, dateFin: number) => {
        return fetch(`${URI}/${dataSetName}/latest/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY as string
            },
            body: JSON.stringify(
                {
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    103.19732666015625,
                                    0.5537709801264608
                                ],
                                [
                                    103.24882507324219,
                                    0.5647567848663363
                                ],
                                [
                                    103.21277618408203,
                                    0.5932511181408705
                                ],
                                [
                                    103.19732666015625,
                                    0.5537709801264608
                                ]
                            ],
                        ],
                    },
                    "sql": `SELECT SUM(area__ha) FROM results WHERE umd_tree_cover_loss__year>=${dateDebut} AND umd_tree_cover_loss__year<=${dateFin}`
                }
            )
        }).then((response) => response.json()).catch(err => console.error(err));
    }



    /**
     * Récupère la totalité de la perte forestière entre deux dates dans une zone géographique précis
     * @param dataSetName string
     * @param dateDebut string
     * @param dateFin string
     * @returns JSON
     */
    getYears = (dataSetName: string) => {
        return fetch(`${URI}/${dataSetName}/latest/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY as string
            },
            body: JSON.stringify(
                {
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -2.204776265875296,
                                    48.269718198680465
                                ],
                                [
                                    -2.204776265875296,
                                    42.64003967180233
                                ],
                                [
                                    6.702838746263268,
                                    42.64003967180233
                                ],
                                [
                                    6.702838746263268,
                                    48.269718198680465
                                ],
                                [
                                    -2.204776265875296,
                                    48.269718198680465
                                ]
                            ]
                        ]
                    },
                    "sql": "SELECT umd_tree_cover_loss__year FROM results GROUP BY umd_tree_cover_loss__year"
                }
            )
        }).then((response) => response.json()).catch(err => console.error(err));
    }
}

export const GFWservice = Object.freeze(new GFWService());