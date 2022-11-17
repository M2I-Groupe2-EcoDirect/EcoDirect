import React, { ChangeEvent, OptionHTMLAttributes, SelectHTMLAttributes, useEffect, useState } from 'react'
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
import { TreeCoverLoss, TreeLossType } from '../Models/TreeLossType';
import { ListYearType } from '../Models/ListeYearType';

export const Deforestation = () => {

    // Quantité perte forestière
    const [treeCoverLoss, setTreeCoverLoss] = useState<TreeCoverLoss[]>();
    // plage d'année
    const [years, setYears] = useState<number[]>([
        2001,
        2021
    ]);

    // Liste des année présentes dans l'Api
    const [listYear, setListYear] = useState<ListYearType>();

    useEffect(() => {
        getTreeCoverLoss(years[0], years[1]);
        getYears("umd_tree_cover_loss")
    }, [years])


    const getYears = (dataSetName: string) => {
        GFWservice.getYears(dataSetName).then(response => setListYear(response)).catch(error => console.error(error));
    }

    /**
     * Fonction qui permet de récupérer l'ensemble de la perte forestière d'indonésie entre 2 dates 
     */
    const getTreeCoverLoss = (anneDebut: number, anneFin: number) => {
        GFWservice.getTreeCoverLoss("umd_tree_cover_loss", anneDebut, anneFin).then((item: TreeLossType) => setTreeCoverLoss(item.data));
    }

    /**
     * Méthode qui change l'année de départ
     * @param e ChangeEvent<HTMLInputElement>
     */
    const changeYearStart = (e: ChangeEvent<HTMLSelectElement>) => {
        setYears([parseInt(e.target.value), years[1]])
        
    }
    /**
     * Méthode qui change l'année d'arrivée
     * @param e ChangeEvent<HTMLInputElement>
     */
    const changeYearEnd = (e:  ChangeEvent<HTMLSelectElement>) => {
        setYears([years[0], parseInt(e.target.value)])
    }

    /**
     * Fonction qui permet d'envoyer une requête a L'API pour récupérer la perte forestière entre 2 dates
     * @param e React.MouseEvent<HTMLButtonElement>
     */
    const getTreeCoverLossRefresh = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setTreeCoverLoss([]);
        getTreeCoverLoss(years[0], years[1])
    }



    return (
        <>
            <h1>Perte de la couverture forestière en hectare</h1>
            <LineChart
                width={500}
                height={300}
                data={treeCoverLoss}
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
                <p>Perte total durant cette période: </p>
            </div>
            <div>
                <label htmlFor="">Anne de départ</label>
                {
                    listYear === undefined ? <p>Chargement des année en cours...</p>
                        :
                        <select onChange={changeYearStart}>
                            {listYear && listYear.data.map((year, key) => {
                                return <option value={year.umd_tree_cover_loss__year}  key={key}>{year.umd_tree_cover_loss__year}</option>
                            })}
                        </select>
                }

                <label htmlFor="">Anne d'arrivé</label>

                {
                    listYear === undefined ? <p>Chargement des année en cours...</p>
                        :
                        <select onChange={changeYearEnd}>
                            {listYear && listYear.data.map((year, key) => {
                                return <option value={year.umd_tree_cover_loss__year} key={key}>{year.umd_tree_cover_loss__year}</option>
                            })}
                        </select>
                }

                <button onClick={getTreeCoverLossRefresh}>Actualiser</button>
                {treeCoverLoss?.length === 0 ? <p>Chargement en cours...</p> : <p></p>}
            </div>
        </>
    )
}
