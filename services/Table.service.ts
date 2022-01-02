import { config } from "config"
import { json } from "stream/consumers"

const api = `${config.env.API_URL}/api`

const test = {
    "name": "Fuerza Bruta",
    "text": "hola",
    "pattern": "hola",
    "occurrencesByLine": {
        "1": [
            0
        ]
    },
    "executionTimeMS": 1.0,
    "executionTimeNS": 10600.0
}


const funTest = (text: string, pattern: string, algorithmSlug: String) => {
    return {...test, text, pattern, name: algorithmSlug}
}

export const getOne = async (text: string, pattern: string, algorithm: String) => {
    return await funTest(text, pattern, algorithm)
    const fetchURL = `${api}/${algorithm}?text=${text}&pattern=${pattern}`

    try {
        const response = await fetch(fetchURL)
        const data = await response.json()
        
        return data
    } catch (e: any) {
        console.log(e.message)
    }
}

export const getAll = async (text: string, pattern: Array<string>) => {
    const data = await fetch(`${api}/brute-force?text=${text}&pattern=${pattern}`)
}