import React, { ChangeEvent, useEffect, useState } from 'react'
import { GFWservice } from '../Services/GFWService';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
import { PerteForestier, TreeCoverLoss, TreeCoverLossTotal, TreeLossType } from '../Models/TreeLossType';
import { CountryLocation, Geometry } from '../Models/CountryLocation';
import { geoJson } from '../Services/GeoJson';

export const Deforestation = () => {

    const [perteCouvertureForestiere, setPerteCouvertureForestiere] = useState<TreeCoverLoss[]>(); // Quantité perte forestière par année
    const [perteCouvertureForestiereTotale, setPerteCouvertureForestiereTotale] = useState<TreeCoverLossTotal[]>(); // Quantité perte forestière totale
    // Tableau avec les deux année qui seront utilisé par l'API
    const [annees, setAnnees] = useState<number[]>([
        2001,
        2021
    ]);

    const [countrys, setCountrys] = useState<CountryLocation>() // Liste complète des données liée aux différends pays
    const [geometry, setGeometri] = useState<Geometry>() // Donnée GeoJson d'une ville
    const [country, setCountry] = useState<string>() // Donnée complète d'une ville avec nom
    const [listYear, setListYear] = useState<number[]>(); // Liste des années présentes dans l'Api



    useEffect(() => {
        getAllDataLocalisation();
    }, [])


    /**
     * Fonction qui appelle l'API Country Polygons pour récupérer l'ensemble des informations
     */
    const getAllDataLocalisation = () => {
        geoJson.getAllData()
            .then((response) => (geoLoca(response)))
            .then((geometry) => (getTreeCoverLoss(annees[0], annees[1], geometry), getAllTreeCoverLoss(annees[0], annees[1], geometry)))
            .catch(err => console.error(err));
    }

    /**
     * Fonction qui permet de retourner la liste des coordoné GeoJson d'un pays
     * @param response CountryLocation
     */
    const geoLoca = (response: CountryLocation): Geometry => {
        setCountrys(response);
        const data = response.features[0];
        const { geometry, ...other } = data;
        return geometry;
    }

    /**
     * Fonction qui permt de récupérer la liste cummulé par ans de la perte forestière entre 2 dates
     * @param anneDebut number
     * @param anneFin number
     */
    const getTreeCoverLoss = (anneDebut: number, anneFin: number, geometry: Geometry): void => {
        if (perteCouvertureForestiere === undefined) {
            GFWservice.getTreeCoverLoss("umd_tree_cover_loss", anneDebut, anneFin, geometry)
                .then((item: TreeLossType) => (setPerteCouvertureForestiere(item.data), getListAnnees(item.data)))
                .catch(err => console.error(err));
        } else {
            GFWservice.getTreeCoverLoss("umd_tree_cover_loss", anneDebut, anneFin, geometry)
                .then((item: TreeLossType) => (setPerteCouvertureForestiere(item.data)))
                .catch(err => console.error(err));
        }

    }

    /**
     * Fonction qui récupère uniquement les années présentes dans le jeux de donnée
     * @param data TreeCoverLoss[]
     */
    const getListAnnees = (data: TreeCoverLoss[]): void => {
        let listYears: number[] = [];
        for (const [key, value] of Object.entries(data)) {
            listYears.push(value.umd_tree_cover_loss__year)
        }
        setListYear(listYears)
    }

    /**
     * Fonction qui permet de calculer la perte forestière cumulé entre 2 dates 
     * @param anneDebut number
     * @param anneFin number
     */
    const getAllTreeCoverLoss = (anneDebut: number, anneFin: number, geometry: Geometry): void => {
        GFWservice.getAllTreeCoverLoss("umd_tree_cover_loss", anneDebut, anneFin, geometry)
            .then((item: PerteForestier) => setPerteCouvertureForestiereTotale(item.data))
            .catch(err => console.error(err));
    }

    /**
     * Récuperer les nouvelle coordonné en fonction du nom du pays
     */
    const setNewGeometry = () =>{
        let listCountry = countrys as CountryLocation;
        for (let index = 0; index < listCountry.features.length; index++) {
            if (country === listCountry.features[index].properties.ADMIN) {
                const data = listCountry.features[index];
                const { geometry, ...other } = data;
                setGeometri(geometry);
                setCountry(listCountry.features[index].properties.ADMIN)
                break
            }
        }
    }

    /**
     * Fonction qui permet de mettre a jour les informations afficher sur la page
     * en fonction des paramètre entrer par l'utilisateur
     * @param e React.MouseEvent<HTMLButtonElement>
     */
    const getTreeCoverLossRefresh = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setPerteCouvertureForestiere([]);
        // setNewGeometry();
        getTreeCoverLoss(annees[0], annees[1], geometry as Geometry);
        setPerteCouvertureForestiere([]);
        getAllTreeCoverLoss(annees[0], annees[1], geometry as Geometry);
    }

    /**
     * Méthode qui change l'année de départ
     * @param e ChangeEvent<HTMLInputElement>
     */
    const changeYearStart = (e: ChangeEvent<HTMLSelectElement>): void => {
        setAnnees([parseInt(e.target.value), annees[1]])

    }
    /**
     * Méthode qui change l'année de fin
     * @param e ChangeEvent<HTMLInputElement>
     */
    const changeYearEnd = (e: ChangeEvent<HTMLSelectElement>): void => {
        setAnnees([annees[0], parseInt(e.target.value)])
    }

    /**
     * Fonction qui permet de changer le pays de recherche
     * @param e ChangeEvent<HTMLSelectElement>
     */
    const changeCountry = (e: ChangeEvent<HTMLSelectElement>): void => {
        let listCountry = countrys as CountryLocation;
        for (let index = 0; index < listCountry.features.length; index++) {
            if (e.target.value === listCountry.features[index].properties.ADMIN) {
                const data = listCountry.features[index];
                const { geometry, ...other } = data;
                setGeometri(geometry);
                setCountry(listCountry.features[index].properties.ADMIN)
                break
            }
        }
    }



    return (
        <>
            <h1>Perte de la couverture forestière en hectare</h1>
            <LineChart
                width={500}
                height={300}
                data={perteCouvertureForestiere}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="umd_tree_cover_loss__year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="area__ha"
                    stroke="#8884d8"
                />
            </LineChart>

            {perteCouvertureForestiere?.length === 0 ? <p>Chargement en cours...</p> : <p></p>}

            <div>
                {
                    perteCouvertureForestiereTotale && perteCouvertureForestiereTotale.map((data, key) => {
                        return <p key={key}>Perte totale sur la période: {data.area__ha} ha</p>
                    })
                }
            </div>
            <div>
                <label htmlFor="">Annee de début</label>
                {
                    listYear === undefined ? <p>Chargement des année en cours...</p>
                        :
                        <select onChange={changeYearStart}>
                            {listYear && listYear.map((year, key) => {
                                return <option value={year} key={key}>{year}</option>
                            })}
                        </select>
                }

                <label htmlFor="">Annee de fin</label>

                {
                    listYear === undefined ? <p>Chargement des années en cours...</p>
                        :
                        <div>
                            <select onChange={changeYearEnd}>
                                {listYear && listYear.map((year, key) => {
                                    return <option value={year} key={key}>{year}</option>
                                })}
                            </select>
                            <button onClick={getTreeCoverLossRefresh}>Rafraichir</button>
                        </div>

                }

                <label htmlFor="">Pays</label>
                {
                    countrys === undefined ? <p>Chargement des années en cours...</p>
                        :
                        <div>
                            <select onChange={changeCountry}>
                                {
                                    countrys.features.map((location, key) => {
                                        return <option value={location.properties.ADMIN} key={key}>{location.properties.ADMIN}</option>
                                    })
                                }
                            </select>
                        </div>
                }
            </div>
        </>
    )
}
