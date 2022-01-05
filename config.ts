import TextInput from "@components/Main/Form/TextInput";

export const config = {
    env: {
        API_URL: 'https://backend-pattern-matching.herokuapp.com',
        DEV_API_URL: 'http://localhost:8080'
    }
}

// Interfaces

export interface FormProps {
    setData: (data: ITableData[][]) => void
}

export interface TextInputProps {
    title: string,
    htmlFor: string,
    id: string,
    rows: number,
    value: string,
    setValue: (value: string) => void,
}

export interface PatternsInputProps {
    patterns: Array<string>,
    setPatterns: (patterns: Array<string>) => void,
}

export interface FileInputProps {
    setText: (value: string) => void,
}

export interface IAlgorithmInput {
    name: string,
    value: boolean;
    setValue: (value: boolean) => void,
}

export interface IAlgorithmToSearch {
    name: string;
    slug: string,
    isChecked: boolean,
}

export interface ITableData {
    name: string,
    text: string,
    pattern: string,
    occurrencesByLine: object,
    executionTimeMS: number,
    executionTimeNS: number,
}


// Provider
export interface MainProviderProps {
    children: JSX.Element,
}

// Context
export interface IMainContext {
    text: string,
    setText: (text: string) => void,
    patterns: Array<string>,
    setPatterns: (pattern: Array<string>) => void,
    data: object,
    setData: (data: object) => void,
}
