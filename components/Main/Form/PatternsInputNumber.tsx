import { IMainContext } from 'config'
import { MainContext } from 'providers/Main.provider';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import TextInput from './TextInput';

const style = {
    maxWidth: '120px',
    // ...
}

const PatternsInputNumber = (props: { patternsNumber: number, setPatternsNumber: (number: number) => void }) => {
    const { patternsNumber, setPatternsNumber } = props
    

    // Cuando se realiza un cambio en el numero de patrones, se cambia el estado de 
    // patternsNumber al nuevo numero
    const changeValue = (event: ChangeEvent) => {
        event.preventDefault()
        const target = event.target as HTMLInputElement;
        const newNumber = parseInt(target.value)
        setPatternsNumber(newNumber);
    }

    return (
        <div className="form-group d-flex flex-column justify-content-center align-center  rounded p-3 shadow-lg">
            <label htmlFor="number-patterns">Patrones a buscar</label>
            <input type="number"
                style={style}
                min={1}
                className="form-control text-center fw-bold"
                id="number-patterns"
                onChange={changeValue}
                value={patternsNumber} />
        </div>
    )
}

export default PatternsInputNumber
