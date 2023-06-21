import IDrink from "../../product/drink/interfaces/IDrink";
import IFood from "../../product/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}