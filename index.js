import Jimp from 'jimp'

const multiple = ( a, b ) => {
    return a * b;
}

const add = ( a, b ) => {
    return a + b;
}

const getNaturalHeight = async (url) => {
    try {
        const newFileJimp = await Jimp.read(url)
        const { bitmap: { width, height } } = newFileJimp;
        return { height, width };
    } catch (e) {
        console.log('ERROR getNaturalHeight: ', e)
        throw Error(e)
    }
}

export {
    add,
    multiple,
    getNaturalHeight
}