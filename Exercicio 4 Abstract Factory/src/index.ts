import Client from "./clients/Client";
import AiqFomeDelivery from "./delivery/AiqFomeDelivery";
import IFoodDelivery from "./delivery/IFoodDelivery";
import Company from "./delivery/const/Company";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentCompany = Company.IFOOD
let factory! : IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME :
        factory = new AiqFomeDelivery();
        break;
    
    case Company.IFOOD :
        factory = new IFoodDelivery();
        break;

    default :
        console.log("Empresa de delivery inválida!");

}

const cliente = new Client(factory);
cliente.startRoute();