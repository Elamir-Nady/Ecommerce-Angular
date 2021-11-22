import { Location, LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.scss']
})
export class ProductDetialsComponent implements OnInit {
  productID:number=0;
  product:IProduct|undefined;
  islastproduct:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductsService ,private location:Location,
    private router :Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param)=>{
      this.productID= Number(param.get('pID'));
      this.product=this.productService.getProductByID(this.productID);
     

    })
  }
  goback(){
    this.location.back();
  }

  prev(){
   this. productID--;
   this.router.navigate(['/Products',this.productID]);
  }
  next(){

    if(this.product?.ID==undefined){
      this.islastproduct=true;
     }
     else{
     this.islastproduct=false;
    this. productID++;
    this.router.navigate(['/Products',this.productID]);
     }
    

 
  }
}
