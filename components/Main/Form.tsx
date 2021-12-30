import { FormProps, IAlgorithmToSearch, IMainContext } from "config";
import React, { MouseEvent, useContext, useState } from "react";
import FileInput from "@components/Main/Form/FileInput";
import TextInput from "@components/Main/Form/TextInput";
import PatternsInput from "./Form/PatternsInput";
import AlgorithmsInput from "./Form/AlgorithmInput";
import { MainContext } from "providers/Main.provider";
import PatternsInputNumber from "./Form/PatternsInputNumber";
import { getOneByBruteForce } from "@services/Table.service";

const defaultAlgorithms = [
    {
        name: 'Fuerza Bruta',
        slug: 'brute-force',
        isChecked: true
    },
    {
        name: 'KMP',
        slug: 'kmp',
        isChecked: false
    },
    {
        name: 'Boyer Moore',
        slug: 'boyer-moore',
        isChecked: false
    },
]

export const Form = (props: FormProps) => {
    const { text, setText, patterns } = useContext(MainContext) as IMainContext
    const [patternsNumber, setPatternsNumber] = useState(1)
    const [algorithmsToSearch, setAlgorithmsToSearch] = useState<Array<IAlgorithmToSearch>>(defaultAlgorithms)

    const changeAlgorithmCheck = (index: number) => {
        const newAlgorithms = [...algorithmsToSearch]
        newAlgorithms[index].isChecked = !newAlgorithms[index].isChecked
        setAlgorithmsToSearch(newAlgorithms)
    }

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault()

        const checkedAlgorithms = algorithmsToSearch.filter(algorithm => algorithm.isChecked)
        console.log(patterns);

        if (!checkedAlgorithms.length) {
            alert("Seleccione un algoritmo")
            return
        }

        const algorithmsSlug = checkedAlgorithms.map(algorithm => algorithm.slug)

        const data = patterns.map((pattern) => {
            let response = {};
            getOneByBruteForce(text, pattern)
                .then(res => {
                    console.log(res);

                    response = res
                })

            return response
        })

        algorithmsSlug.forEach(algorithm => console.log(algorithm))

        props.setData(data)
    }

    return (
        <form className="col">
            <TextInput
                htmlFor="text-input"
                id="text-input"
                rows={6}
                title='Texto'
                value={text}
                setValue={setText} />

            <div className="d-flex justify-content-evenly mt-3">
                <PatternsInputNumber patternsNumber={patternsNumber} setPatternsNumber={setPatternsNumber} />
                <FileInput />
            </div>

            <PatternsInput patternsNumber={patternsNumber} />

            <div className="d-flex justify-content-evenly mt-3">
                <h1>Algoritmos a Utilizar</h1>
            </div>

            <div className="d-flex justify-content-evenly mt-2">
                {algorithmsToSearch.map((algorithm, index) => {
                    return (<AlgorithmsInput
                        name={algorithm.name}
                        value={algorithm.isChecked}
                        setValue={() => changeAlgorithmCheck(index)} algorithm='Fuerza bruta' />)
                })}
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Buscar</button>
            </div>
        </form >
    );
}

