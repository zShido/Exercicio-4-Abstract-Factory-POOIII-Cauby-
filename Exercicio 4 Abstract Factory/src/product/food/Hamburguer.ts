import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startRoute() {
        this.startPreparation();
        console.log("Pedido de Hamburguer enviado para entrega!")
    }
    startPreparation() {
        console.log("Preparando o hamburguer...")
    }

}