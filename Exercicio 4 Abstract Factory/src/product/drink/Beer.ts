import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startRoute() {
        this.getIngredients();
        this.startPreparation();
        console.log("Cervejinha enviada para entrega!")
    }
    startPreparation() {
        console.log("Preparando sua cerveja...")
    }
    getIngredients() {
        console.log("Separando os ingredientes...")
    }

}