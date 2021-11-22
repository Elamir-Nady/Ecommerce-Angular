import { IProduct } from "../Interfaces/iproduct";

export class Storeinfo {

    establishDate=Date.now();
    totalinvestment=10000000;

    constructor(public name:string,public logo="",public services:IProduct[] ){

    }
}
