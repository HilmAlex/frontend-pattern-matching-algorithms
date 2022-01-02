import { IMainContext } from 'config'
import { MainContext } from 'providers/Main.provider';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import TextInput from './TextInput';

const PatternsInput = (props: { patternsNumber: number }) => {
    const { patternsNumber } = props
    const { patterns, setPatterns } = useContext(MainContext) as IMainContext

    // Agrega nuevos elementos segun el parametro "inputsToAdd" a un arreglo de Strings
    const addInputs = (inputsToAdd: number, currentInputs: Array<string>) => {
        const newInputs = []
        for (let i = 0; i < inputsToAdd; i++) {
            newInputs.push('')
        }

        return currentInputs.concat(newInputs)
    }

    // Cambia el estado del arreglo de patrones actualizando un elemento
    const changePattern = (newPattern: string, index: number) => {
        const newPatterns = [...patterns]
        newPatterns[index] = newPattern
        setPatterns(newPatterns)
    }

    // Cada vez que cambia el numero de inputs se cambia el estado del arreglo de patrones con
    // el numero de inputs deseados
    useEffect(() => {

        // Se realiza el calculo de la diferencia con respecto al numero actual de inputs
        // y el nuevo numero de inputs para realizar los cambios respectivos
        const newInputsNumber = patternsNumber
        const diff: number = newInputsNumber - patterns.length

        // Si la diferencia es positiva, se añade un numero de "diff" elementos
        if (diff > 0) {
            setPatterns(addInputs(diff, patterns))
        }

        // Si la diferencia es negativa, se elimna un numero de "diff" elementos
        if (diff < 0) {
            setPatterns([...patterns.slice(0, newInputsNumber)])
        }

    }, [patternsNumber])

    return (
        <>
            {patterns.map((pattern, index) => (
                <TextInput
                    htmlFor="pattern-input"
                    id="pattern-input"
                    rows={2}
                    title='Patrón'
                    value={pattern}
                    setValue={(newPattern) => changePattern(newPattern, index)} />)
            )}
        </>
    )
}

export default PatternsInput
