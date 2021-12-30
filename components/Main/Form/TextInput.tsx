import { TextInputProps } from 'config'
import React, { ChangeEvent, MouseEvent } from 'react'

const TextInput = (props: TextInputProps) => {
    // Cuando se cambia el texto se actualiza el estado de "value" con el metodo setValue
    // el cual, se recibe en las props
    const onTextChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        props.setValue(target.value);
    }

    return (
        <div className="form-group mt-2">
            <label htmlFor={props.htmlFor}>{props.title}</label>
            <textarea
                className="form-control"
                id={props.id}
                rows={props.rows}
                value={props.value}
                onChange={onTextChange}></textarea>
        </div>
    )
}

export default TextInput
