import { IMainContext } from 'config';
import { MainContext } from 'providers/Main.provider';
import React, { ChangeEvent, MouseEvent, useContext } from 'react'

const FileInput = () => {

    const { setText } = useContext(MainContext) as IMainContext

    const rechargeFile = (event: MouseEvent) => {
        if (localStorage.getItem('file')) {
            setText(localStorage.getItem('file') as string)
        }
    }

    // Al cargar un archivo, se lee dicho arhivo y se manda su contenido al estado "text"
    const loadFile = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;
        console.log(files);

        // Comprobar que existe un archivo
        if (!files) {
            return
        }

        const file = files[0];
        // Leer el archivo
        const reader = new FileReader();
        reader.readAsText(file);

        // Al terminar de leer el archivo cambiar el estado "text" con el contenido del reader
        reader.onload = () => {
            const fileContent = reader.result as string
            localStorage.setItem('file', fileContent)
            setText(fileContent)
        };

    };

    return (
        <div className="form-group d-flex flex-column justify-content-center rounded p-3 shadow-lg">
            <div className='d-flex justify-content-center mt-1'>
                <label className='font-weight-bold' htmlFor="input-file" style={{ marginRight: '10px' }}>Cargar un archivo</label>
                <input type="file" className="form-control-file" id="input-file" onChange={loadFile} />
            </div>
            <div className='d-flex justify-content-center mt-3  '>
                <button type="button" className="btn btn-primary" onClick={rechargeFile}>Cargar archivo reciente</button>
            </div>

        </div>
    )
}

export default FileInput
