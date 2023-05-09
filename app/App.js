import { MoneyController } from "./Controllers/MoneyController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  moneyController = new MoneyController();
}

window["app"] = new App();
