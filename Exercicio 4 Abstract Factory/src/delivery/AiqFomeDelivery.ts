import Beer from "../product/drink/Beer";
import IDrink from "../product/drink/interfaces/IDrink";
import Hamburguer from "../product/food/Hamburguer";
import IFood from "../product/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}