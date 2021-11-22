import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductsApiServiceService } from 'src/app/Services/products-api-service.service';
import { ICategoryApi } from 'src/app/ViewModles/icategory-api';
import { IproductApi } from 'src/app/ViewModles/iproduct-api';

@Component({
  selector: 'app-inser-product',
  templateUrl: './inser-product.component.html',
  styleUrls: ['./inser-product.component.scss']
})
export class InserProductComponent implements OnInit {
  category:ICategoryApi[]=[];
  product:IproductApi;
  constructor(private apicategory:CategoryApiService,
    private apiproduct:ProductsApiServiceService,
    private router:Router) { 
      this.product={id:0,CateogryID:0,Name:"",Quantity:0,Price:0,Img:""

      }
    }

  ngOnInit(): void {
    this.apicategory.getAllCategory().subscribe(
      (response)=>{
        this.category=response;
      }
    )
  }


  insertproduct(){
    this.apiproduct.inserProudect(this.product).subscribe(
      (rout)=>{
        this.router.navigate(["/apiProducts"]);
      }
    );
  }

}
