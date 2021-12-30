import { config } from "config"
import { json } from "stream/consumers"

const api = `${config.env.API_URL}/calculator`
    
const test = {
    "name": "Fuerza Bruta",
    "text": "hola",
    "pattern": "hola",
    "occurrencesByLine": {
        "1": [
            0
        ]
    },
    "executionTimeMS": 0.0,
    "executionTimeNS": 10600.0
}

const funTest = () => {
    return test
}

export const getOneByBruteForce = async (text: string, pattern: string) => {
    const data = await funTest()
    
    return data
    const fetchURL = `${api}/brute-force?text=${text}&pattern=${pattern}`

    try {
        const response = await fetch(fetchURL)
        const data = await response.json()
        return data
    } catch (e: any) {
        console.log(e.message)
    }
}

export const getAllByBruteForce = async (text: string, pattern: Array<string>) => {
    const data = await fetch(`${api}/brute-force?text=${text}&pattern=${pattern}`)
}