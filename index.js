import Jimp from 'jimp'

const multiple = ( a, b ) => {
    return a * b;
}

const add = ( a, b ) => {
    return a + b;
}

const getNaturalHeight = async (url) => {
    const newFileJimp = await Jimp.read(url)
    const { bitmap: { width, height } } = newFileJimp;
    return { height, width };
}

export {
    add,
    multiple,
    getNaturalHeight
}