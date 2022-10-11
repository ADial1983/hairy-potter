let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    //let n = ????? or something?
    let pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }
    primaryKey++
    return pottery
}

//Function's purpose: make a pot with the provided specs + an unique id number with each id number being higher than that of the previous one.
//My question: How do I tell the function how many times it has been invoked? How do I translate that into an id number? Does it have to do with the (let index = 0; index < ?; index++) thing?