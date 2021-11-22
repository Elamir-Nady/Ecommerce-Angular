import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { IshoppingCartItems } from 'src/app/ViewModles/ishopping-cart-items';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss']
})
export class CartChildComponent  implements OnChanges,OnInit{

 
  ProductListselectedCategory:IProduct[]=[];
  @Input() selectedcatid:Number=0;
  @Output() shoppingCartItemsSelected:EventEmitter<IshoppingCartItems>;
  Quantity:number=1;

    constructor(private productservice:ProductsService,private router:Router) { 
      this.shoppingCartItemsSelected=new EventEmitter<IshoppingCartItems>();
    
    

    
    }
  ngOnInit(): void {
    this.ProductListselectedCategory=this.productservice.getAllProducts();
  }
  ngOnChanges(changes: SimpleChanges): void {
   
    this.ProductListselectedCategory=this.productservice.getProductsByCatID(this.selectedcatid)
  }


    
  increaseQuantity(prodId:number,price:number,count:any){
      let product=this.productservice.getProductByID(prodId);
      if( product!.Quantity>0)
        {
      product!.Quantity-=1;
      count.value++; 

      count=count as ElementRef  ;
         
      let shoppingCartItem:IshoppingCartItems={
        ID: product?.ID,
        Name:product?.Name,
        Price:price* +count.value,
        SelectedQuantity:+count.value,
        Img:product?.Img,
        TotalPrice:(price* +count.value)+(price* +count.value)*.14
      } 
      this.shoppingCartItemsSelected.emit(shoppingCartItem);
    }
     
    }
    decreaseQuantity(prodId:number,price:number,count:any){
      let product=this.productservice.getProductByID(prodId);

     
          count=count as ElementRef  ;
          if( count.value>0){
            count.value--;      
            product!.Quantity+=1;
       
          }
        
            let shoppingCartItem:IshoppingCartItems={
              ID: product?.ID,
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

  displayProduct(PID:Number|undefined){

    this.router.navigate(['/Products',PID]);

  }

  displayProductWithQuntaty(PID:Number|undefined,Quantity:number|undefined){

    this.router.navigate(['/Products',PID,Quantity]);

  }
    

}
