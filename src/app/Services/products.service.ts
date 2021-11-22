import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ProductList:IProduct[];
  constructor() {

    this.ProductList=[
      {ID:1,Name : "product1",Quantity: 77, Price : 255,Img: "../../assets/images/headphone1.jpg",CateogryID :1},
      {ID:2,Name : "product2",Quantity: 3, Price : 3000,Img: "../../assets/images/headphone2.jpg",CateogryID :1},
      {ID:3,Name : "product3",Quantity: 1, Price : 5800,Img: "../../assets/images/headphone3.jpg",CateogryID :1},
      {ID:4,Name : "product4",Quantity: 88, Price : 300,Img: "../../assets/images/printer1.jpg",CateogryID :2},
      {ID:5,Name : "product5",Quantity: 500, Price : 100,Img: "../../assets/images/printer2.jpg",CateogryID :2},
      {ID:6,Name : "product6",Quantity: 0, Price : 1000,Img: "../../assets/images/printer3.jpg",CateogryID :2},
    ];
   }

   getAllProducts():IProduct[]{
    return this.ProductList;
   }
   
   getProductsByCatID(catID:Number):IProduct []{

    return this.ProductList.filter(pro=>pro.CateogryID==catID);
   }

   getProductByID(proID:number):IProduct|undefined{
    return this.ProductList.find(pro=>pro.ID==proID);
   }
}
