import { generateRandomNum } from "./utils"

export const generateRandomHashColor = () => {
    const hashCollection = '0123456789ABCDEF'
    const collectionLenght = hashCollection.length
    const count = 6
    
    let randomhash = '#'

    for (let i = 0; i < count; i += 1) {
        randomhash += hashCollection[generateRandomNum(collectionLenght)]
    }

    return randomhash
}