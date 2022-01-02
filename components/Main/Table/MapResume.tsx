import { ITableData } from 'config'
import React from 'react'

const MapResume = (props: {rowsData: ITableData[]}) => {
    return (
        <>
            {props.rowsData.map(rowData => {
                const { name, pattern, occurrencesByLine, executionTimeMS, executionTimeNS, } = rowData

                return `Para el algoritmo ${name} encontraron ${} coincidencias y la búsqueda tomó XX milisegundos.`
            })}
        </>
    )
}

export default MapResume
