import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/icategory';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { Storeinfo } from 'src/app/models/storeinfo';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  storeData:Storeinfo
  ProductList:IProduct[];
  Cateogry:ICategory[];
  catid:Number=0;
  today=Date.now();
  birthday=Date.now();
  natid!:number;
  criditcard!:number;
  constructor() { this.Cateogry=[{ID:1,Name:"Headphones"},{ID:2,Name:"Printers"}];

  this.ProductList=[
  {ID:1,Name : "product1",Quantity: 77, Price : 255,Img: "../../assets/images/headphone1.jpg",CateogryID :1},
  {ID:2,Name : "product2",Quantity: 3, Price : 3000,Img: "../../assets/images/headphone2.jpg",CateogryID :1},
  {ID:3,Name : "product3",Quantity: 1, Price : 5800,Img: "../../assets/images/headphone3.jpg",CateogryID :1},
  {ID:4,Name : "product4",Quantity: 88, Price : 300,Img: "../../assets/images/printer1.jpg",CateogryID :2},
  {ID:5,Name : "product5",Quantity: 500, Price : 100,Img: "../../assets/images/printer2.jpg",CateogryID :2},
  {ID:6,Name : "product6",Quantity: 0, Price : 1000,Img: "../../assets/images/printer3.jpg",CateogryID :2},
];

this.storeData=new Storeinfo("Sohag Store ","https://fakeimg.pl/250x100/",this.ProductList)


}



QuanDecrease(idprod:number){
  for (const pro of this.ProductList) {
      if(pro.ID==idprod){
        pro.Quantity--;
      }
  }
 
}

}
