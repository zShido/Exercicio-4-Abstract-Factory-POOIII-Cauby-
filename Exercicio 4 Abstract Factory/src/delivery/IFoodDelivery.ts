import SoftDrink from "../product/drink/SoftDrink";
import IDrink from "../product/drink/interfaces/IDrink";
import Hotdog from "../product/food/HotDog";
import IFood from "../product/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new Hotdog();
    }

}