import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/icategory';
import { IshoppingCartItems } from 'src/app/ViewModles/ishopping-cart-items';
import { CartChildComponent } from './cart-child/cart-child.component';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.scss']
})
export class CartParentComponent implements AfterViewInit {

  Cateogry:ICategory[];
  shoppingCartItems:IshoppingCartItems[]=[];
  selectedCategoryID:Number=0;
  totalPric:number|null=null;
  @ViewChild('Selectitem') Selectitem!:ElementRef;
  @ViewChild(CartChildComponent)CartChildobj!:CartChildComponent;
  constructor() { 
    this.Cateogry=[{ID:1,Name:"Headphones"},{ID:2,Name:"Printers"}]
    
  }
  ngAfterViewInit(): void {
    console.log(this.Selectitem.nativeElement.selectedIndex); 
    console.log(    this.CartChildobj.selectedcatid);
  }




  shoppingCartItemsChanged(selectedItem:IshoppingCartItems){
    let product=this.shoppingCartItems.find(pro=>pro.ID==selectedItem.ID);

    if(product){
      product.SelectedQuantity=selectedItem.SelectedQuantity;
      product.Price=selectedItem.Price;
      product.TotalPrice=selectedItem.TotalPrice;

    }

    else if(selectedItem.SelectedQuantity!>0)
    this.shoppingCartItems.push(selectedItem);
  }
}
