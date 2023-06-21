import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../product/drink/interfaces/IDrink";
import IFood from "../product/food/interfaces/IFood";

export default class Client{
    private drink : IDrink;
    private food : IFood;

    constructor(factory : IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startRoute() : void{
        this.drink.startRoute();
        this.food.startRoute();
    }
}