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
import { ListYearType } from '../Models/ListeYearType';
import { CountryLocation } from '../Models/CountryLocation';
import { geoJson } from '../Services/GeoJson';

export const Deforestation = () => {

    const [perteCouvertureForestiere, setPerteCouvertureForestiere] = useState<TreeCoverLoss[]>(); // Quantité perte forestière par année
    const [perteCouvertureForestiereTotale, setPerteCouvertureForestiereTotale] = useState<TreeCoverLossTotal[]>(); // Quantité perte forestière totale
    // Tableau avec les deux année qui seront utilisé par l'API
    const [annees, setAnnees] = useState<number[]>([
        2001,
        2021
    ]);

    const [geometri, setGeometri] = useState<CountryLocation>() // Donnée GeoJson d'une ville

    const [listYear, setListYear] = useState<number[]>(); // Liste des années présentes dans l'Api



    useEffect(() => {
        getGeo();
        getTreeCoverLoss(annees[0], annees[1]);
        getAllTreeCoverLoss(annees[0], annees[1])
    }, [])


    const getGeo = () => {
        geoJson.getAllData()
            .then((response) => fonction(response))
            .catch(err => console.error(err))
    }

    const fonction = (response: any) => {
        const data = response.features[0];
        const { geometry, ...datas } = data;
        console.log(geometry);

    }

    /**
     * Fonction qui permt de récupérer la liste cummulé par ans de la perte forestière entre 2 dates
     * @param anneDebut number
     * @param anneFin number
     */
    const getTreeCoverLoss = async (anneDebut: number, anneFin: number) => {
        await GFWservice.getTreeCoverLoss("umd_tree_cover_loss", anneDebut, anneFin)
            .then((item: TreeLossType) => (setPerteCouvertureForestiere(item.data),getListAnnees(item.data)))
            .catch(err => console.error(err));
    }

    /**
     * Fonction qui récupère uniquement les années présentes dans le jeux de donnée
     * @param data TreeCoverLoss[]
     */
    const getListAnnees = (data: TreeCoverLoss[]) =>{
        let listYears: number[] = [];
        for(const [key, value] of Object.entries(data)){
            listYears.push(value.umd_tree_cover_loss__year)
        }
        setListYear(listYears)
    }

    /**
     * Fonction qui permet de calculer la perte forestière cumulé entre 2 dates 
     * @param anneDebut number
     * @param anneFin number
     */
    const getAllTreeCoverLoss = (anneDebut: number, anneFin: number) => {
        GFWservice.getAllTreeCoverLoss("umd_tree_cover_loss", anneDebut, anneFin)
            .then((item: PerteForestier) => setPerteCouvertureForestiereTotale(item.data))
            .catch(err => console.error(err));
    }

    

    /**
     * Fonction qui permet de mettre a jour les informations afficher sur la page
     * en fonction des paramètre entrer par l'utilisateur
     * @param e React.MouseEvent<HTMLButtonElement>
     */
    const getTreeCoverLossRefresh = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPerteCouvertureForestiere([]);
        getTreeCoverLoss(annees[0], annees[1]);
        setPerteCouvertureForestiere([]);
        getAllTreeCoverLoss(annees[0], annees[1]);
    }

    /**
     * Méthode qui change l'année de départ
     * @param e ChangeEvent<HTMLInputElement>
     */
    const changeYearStart = (e: ChangeEvent<HTMLSelectElement>) => {
        setAnnees([parseInt(e.target.value), annees[1]])

    }
    /**
     * Méthode qui change l'année de fin
     * @param e ChangeEvent<HTMLInputElement>
     */
    const changeYearEnd = (e: ChangeEvent<HTMLSelectElement>) => {
        setAnnees([annees[0], parseInt(e.target.value)])
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
                        listYear[0] > listYear[1] ? <p>Attention, la date de fin est antérieur a la date de début</p>
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
                {perteCouvertureForestiere?.length === 0 ? <p>Chargement en cours...</p> : <p></p>}
            </div>


            {geometri && geometri.features.map((feature, key) => {
                return <ul key={key}>
                    {feature.geometry.coordinates.map((coord, i) => {
                        return <li key={i}>
                            {coord.entry.map((value, j) => {
                                return <div key={j}>
                                    {value}
                                </div>
                            })}
                        </li>
                    })}
                </ul>
            })}
        </>
    )
}
