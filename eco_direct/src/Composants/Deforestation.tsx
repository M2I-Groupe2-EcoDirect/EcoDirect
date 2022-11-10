import React, { ChangeEvent, useEffect, useState } from 'react'
import { DataModel } from '../Models/DataModel';
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

export const Deforestation = () => {

    const [data, setData] = useState<DataModel>();
    const [treeCoverLoss, setTreeCoverLoss] = useState<TreeCoverLoss[]>();
    const [years, setYears] = useState<number[]>([
        2001,
        2021
    ]);

    useEffect(() => {
        getDataByDatasetName();
        getTreeCoverLoss(years[0], years[1]);
    }, [])

    /** 
     * Fonction qui permet de recuperer la liste compete des jeux de données
    */
    const getAllData = () => {
        GFWservice.getAllData().then((item) => setData(item)).catch(err => console.error(err));
    }

    /**
     * Fonction qui permet de récupérer un jeux de donnée précis
     */
    const getDataByDatasetName = () => {
        GFWservice.getDataByDatasetName("umd_tree_cover_loss").then((item: DataModel) => setData(item));
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
    const changeYearStart = (e:ChangeEvent<HTMLInputElement>) => {
        setYears([parseInt(e.target.value), years[1]])
    }
    /**
     * Méthode qui change l'année d'arrivée
     * @param e ChangeEvent<HTMLInputElement>
     */
    const changeYearEnd = (e:ChangeEvent<HTMLInputElement>) => {
        setYears([years[0],parseInt(e.target.value)])
    }

    const getTreeCoverLossRefresh = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setTreeCoverLoss([]);
        getTreeCoverLoss(years[0],years[1])
    }



    return (
        <>
            <p>titre du set de donnée: {data?.data.dataset}</p>
            <ul>
                <p>La liste des versions:</p>
                {
                    data?.data.versions.map(((version, key) => {
                        return <li key={key}><p>{version}</p></li>
                    }))
                }
            </ul>
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
                <label htmlFor="">Anne de départ</label>
                <input type="number" name="" id="" onChange={changeYearStart}/>
                <label htmlFor="">Anne d'arrivé</label>
                <input type="number" onChange={changeYearEnd}/>
                <button onClick={getTreeCoverLossRefresh}>Actualiser</button>
                {treeCoverLoss?.length == 0? <p>Chargement en cour...</p> : <p></p>}
            </div>
        </>
    )
}
