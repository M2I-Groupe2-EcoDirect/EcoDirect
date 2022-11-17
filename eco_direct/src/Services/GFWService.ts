
const API_KEY = "c425b648-c56f-4950-9b29-dcf2bf47c2de";
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
     * Récupère la totalité de la perte forestière entre deux dates dans une zone géographique précis
     * @param dataSetName string
     * @param dateDebut string
     * @param dateFin string
     * @returns JSON
     */
    getTreeCoverLoss = (dataSetName: string, dateDebut: number, dateFin: number) => {
        return fetch(`${URI}/${dataSetName}/latest/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY
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
                            ],
                        ],
                    },
                    "sql": `SELECT SUM(area__ha), umd_tree_cover_loss__year FROM results WHERE umd_tree_cover_loss__year >= ${dateDebut} AND umd_tree_cover_loss__year <= ${dateFin} GROUP BY umd_tree_cover_loss__year`
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
                "x-api-key": API_KEY
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