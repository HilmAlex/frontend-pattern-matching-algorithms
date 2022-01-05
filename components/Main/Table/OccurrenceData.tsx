import React from 'react'

const OccurrenceData = (props: { line: number, positions: number[] }) => {
    
    return (
        <div style={{marginLeft: '10px'}}>
            <p>Linea: {props.line}</p>
            <ul>
                {props.positions.map((position) => (
                    // eslint-disable-next-line react/jsx-key
                    <li>Ocurrencia en la posicion {position}</li>))}
            </ul>
        </div>
    )
}

export default OccurrenceData
