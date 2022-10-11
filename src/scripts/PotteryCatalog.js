let catalog = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.weight >= 6 && pottery.cracked === false) {
        pottery.price = 40
        catalog.push(pottery)
    } else if (pottery.weight < 6 && pottery.cracked === false) {
        pottery.price = 20
        catalog.push(pottery)
    }
    return pottery
}

export const usePottery = () => {
    let potteryCatalog = catalog

    return potteryCatalog
}