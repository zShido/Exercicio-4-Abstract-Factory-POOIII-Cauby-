import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startRoute() {
        this.getIngredients();
        this.startPreparation();
        console.log("Soft Drink enviada para entrega!")
    }
    startPreparation() {
        console.log("Preparando seu drink...")
    }
    getIngredients() {
        console.log("Separando os ingredientes...")
    }

}