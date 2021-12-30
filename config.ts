import TextInput from "@components/Main/Form/TextInput";

export const config = {
    env: {
        API_URL: 'http://localhost:8081'
    }
}

// Interfaces

export interface FormProps {
    setData: (data: Array<Object>) => void
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

export interface IAlgorithmToSearch {
    slug: string;
    name: string,
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
