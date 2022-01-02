import { ITableData } from 'config';
import React, { useEffect, useState } from 'react'
import MapOccurrences from './Table/MapOccurrences';

interface Times {
    'brute-force'?: number,
    kmp?: number,
    'boyer-moore'?: number,
}

export const Table = (props: { data: ITableData[][] }) => {

    const { data } = props

    const [rowsData, setRowsData] = useState<ITableData[]>([]);

    const [totalTimes, setTotalTimes] = useState<Times>({})
    console.log("");
    
    const analizeData = () => {
        const times = {}

        data.forEach((patternData) => { 
            const patternName = patternData[0]?.pattern
            
            const currentTime = {}
            
            patternData.forEach(algorithmData => {
                if(!currentTime[algorithmData.name]){
                    currentTime[algorithmData.name] = 0
                }
                
                currentTime[algorithmData.name] += algorithmData.executionTimeMS
            })

            times[patternName] = currentTime
        })

        setTotalTimes(times)
    }

    useEffect(() => {
        analizeData()
        setRowsData(data.flat(2))
    }, [data])

    return (
        <table className='table table-bordered border-primary table-striped col mb-0' style={{ minHeight: '100%' }}>
            <thead>
                <tr className='text-center h4'>
                    <th scope='col' >Algoritmo</th>
                    <th scope='col' >Patrón</th>
                    <th scope='col' >Coincidencias</th>
                    <th scope='col' >Tiempo de Búsqueda</th>
                </tr>
            </thead>
            <tbody>
                {rowsData.map(rowData => {
                    const { name, pattern, occurrencesByLine, executionTimeMS, executionTimeNS, } = rowData

                    return (
                        <tr className='pt-2'>
                            <th scope='col' className='text-center'>{name}</th>
                            <th scope='col' className='text-center'>{pattern}</th>
                            <MapOccurrences occurrences={occurrencesByLine} />
                            <th scope='col' className='text-center'>{executionTimeMS} ms <br /> {executionTimeNS} ns</th>
                        </tr>
                    )
                })}

            </tbody>
            <tfoot>

            </tfoot>
        </table>
    )
}

