import IFood from "./interfaces/IFood";

export default class Hotdog implements IFood{
    startRoute() {
        this.startPreparation();
        console.log("Pedido de Hotdog enviado para entrega!")
    }
    startPreparation() {
        console.log("Preparando o HotDog...")
    }

}