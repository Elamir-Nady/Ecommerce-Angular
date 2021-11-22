import { outputAst } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { Storeinfo } from 'src/app/models/storeinfo';
import { ProductsApiServiceService } from 'src/app/Services/products-api-service.service';
import { ProductsService } from 'src/app/Services/products.service';
import { IproductApi } from 'src/app/ViewModles/iproduct-api';
import { IshoppingCartItems } from 'src/app/ViewModles/ishopping-cart-items';

@Component({
  selector: 'app-order-detiles',
  templateUrl: './order-detiles.component.html',
  styleUrls: ['./order-detiles.component.scss']
})


export class OrderDetilesComponent implements OnChanges,OnInit{

 
  ProductListselectedCategory:IproductApi[]=[];
  @Input() selectedcatid:number=0;
  @Output() shoppingCartItemsSelected:EventEmitter<IshoppingCartItems>;
  Quantity:number=1;

    constructor(private apiproductservice:ProductsApiServiceService,


      private router:Router) { 
      this.shoppingCartItemsSelected=new EventEmitter<IshoppingCartItems>();
    
    

    
    }
  ngOnInit(): void {
    this.apiproductservice.getAllProducts().subscribe(
      (response)=>{
        this.ProductListselectedCategory=response;
      },
      (error)=>{console.log(error)}
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
   
   this.apiproductservice.getProductsByCategoryID(this.selectedcatid).subscribe(
      (response)=>{
        this.ProductListselectedCategory=response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }


    
  increaseQuantity(prodId:number,price:number,count:any){
    let product:IproductApi;
    this.apiproductservice.getProductsByID(prodId).subscribe(
      (response)=>{
        product=response;
        if( product!.Quantity>0)
        {
      product!.Quantity-=1;
      count.value++; 

      count=count as ElementRef  ;
         
      let shoppingCartItem:IshoppingCartItems={
        ID: product?.id,
        Name:product?.Name,
        Price:price* +count.value,
        SelectedQuantity:+count.value,
        Img:product?.Img,
        TotalPrice:(price* +count.value)+(price* +count.value)*.14
      } 
      this.shoppingCartItemsSelected.emit(shoppingCartItem);
    }
      }
    );
  
     
  }
    
    
  displayProduct(PID:Number|undefined){

    this.router.navigate(['/Products',PID]);

  }
  decreaseQuantity(prodId:number,price:number,count:any){
    let product:IproductApi;
    this.apiproductservice.getProductsByID(prodId).subscribe(
      (response)=>{
        product=response;

        count=count as ElementRef  ;
        if( count.value>0){
          count.value--;      
          product!.Quantity+=1;
     
        }
      
          let shoppingCartItem:IshoppingCartItems={
            ID: product?.id,
            Name:product?.Name,
            Price:price* +count.value,
            SelectedQuantity:+count.value,
            Img:product?.Img,
            TotalPrice:(price* +count.value)+(price* +count.value)*.14
            
          } 
          if( count.value==1)
          {
            shoppingCartItem.SelectedQuantity=0;
          }          
      this.shoppingCartItemsSelected.emit(shoppingCartItem);
      }
    );

   
        

}

  displayProductWithQuntaty(PID:Number|undefined,Quantity:number|undefined){

    this.router.navigate(['/Products',PID,Quantity]);

  }
    

}
