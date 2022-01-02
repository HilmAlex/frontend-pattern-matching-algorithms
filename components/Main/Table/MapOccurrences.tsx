import React from 'react'
import OccurrenceData from './OccurrenceData'

const MapOccurrences = (props: { occurrences: {} }) => {
    const lines = Object.keys(props.occurrences)

    return (
        <th scope='col'>
            {lines.map((line) => (
                <OccurrenceData line={parseInt(line)} positions={props.occurrences[line]} />
            ))}
        </th>
    )
}

export default MapOccurrences
