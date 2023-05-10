import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"
import { setText } from "../Utils/Writer.js"




function _drawMoney() {
    console.log('drawing moneyIn')
    let money = appState.moneyIn
    setText("moneyIn", appState.moneyIn)
}

export class MoneyController {
    constructor() {
    console.log('$controller online')
    appState.on('moneyIn', _drawMoney)
    }


    insertMoney() {
        moneyService.insertMoney()
        console.log('clicking money button')
    }
}
