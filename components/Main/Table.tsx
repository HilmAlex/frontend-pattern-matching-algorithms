import { IMainContext, ITableData } from 'config';
import { MainContext } from 'providers/Main.provider';
import React, { useContext } from 'react'

export const Table = (props: any) => {

    return (
        <table className='table col mb-0' style={{ minHeight: '100%' }}>
            <thead>
                <tr>
                    <th scope='col'>Algoritmo</th>
                    <th scope='col'>Coincidencias</th>
                    <th scope='col'>Total Coincidencias</th>
                    <th scope='col'>Tiempo de Búsqueda</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((currentData: ITableData) => {
                    console.log("table data",currentData);
                    
                    const { name, occurrencesByLine } = currentData
                    return (
                        <tr>
                            <th scope='col'>{name}</th>
                            <th scope='col'>{occurrencesByLine}</th>
                        </tr>
                    )
                })}

            </tbody>
            <tfoot>
                ...
            </tfoot>
        </table>
    )
}

