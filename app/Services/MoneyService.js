import { appState } from "../AppState.js";


class MoneyService {

    insertMoney() {
        // console.log('inserting money')
        appState.moneyIn+=0.25
        console.log('money in the appState', appState.moneyIn);
    }
}

export const moneyService = new MoneyService()