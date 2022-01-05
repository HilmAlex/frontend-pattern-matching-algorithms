import { IAlgorithmInput } from 'config'
import React from 'react'

const AlgorithmsInputs = (props: IAlgorithmInput) => {

    const toggleChecked = () => {
        props.setValue(!props.value)
    }

    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={props.value} id="defaultCheck1" onChange={toggleChecked} />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    {props.name}
                </label>
            </div>
        </>
    )
}

export default AlgorithmsInputs
