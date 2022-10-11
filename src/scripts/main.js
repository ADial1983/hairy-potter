// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 1, 3)
//console.log(mug)

let vase = makePottery('vase', 7, 7)
//console.log(vase)

let platter = makePottery('platter', 3, 1)
//console.log(platter)

let bowl = makePottery('bowl', 2, 2)
//console.log(bowl)

let pitcher = makePottery('pitcher', 6, 5)
//console.log(pitcher)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200)
//console.log(firedMug)

let firedVase = firePottery(vase, 2240)
//console.log(firedVase)

let firedPlatter = firePottery(platter, 2200)
//console.log(firedPlatter)

let firedBowl = firePottery(bowl, 2200)
//console.log(firedBowl)

let firedPitcher = firePottery(pitcher, 2200)
//console.log(firedPitcher)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedPitcher)
let potteryCatalog = usePottery()
console.log(potteryCatalog)

// Invoke the component function that renders the HTML list



