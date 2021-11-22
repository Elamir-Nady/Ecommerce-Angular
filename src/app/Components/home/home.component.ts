import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { ICategory } from 'src/app/Interfaces/icategory';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { Storeinfo } from 'src/app/models/storeinfo';
import { ScheduledAdsService } from 'src/app/Services/scheduled-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy {
  storeData:Storeinfo
  showlogo:boolean=true;
  IsPurshased:boolean=false;  
  Discountvalue:Number=30;
  catid:Number=0;
  clientName:string="";

  ProductList:IProduct[];
  Cateogry:ICategory[];
  private subscribtion!:Subscription;
  private subscribtions!:Subscription[];

  constructor( private schudalsAdsservice:ScheduledAdsService) { 
    this.Cateogry=[{ID:1,Name:"Cateogry 1"},{ID:2,Name:"Cateogry 2"}];

    this.ProductList=[
    {ID:1,Name : "product1",Quantity: 77, Price : 255,Img: "https://fakeimg.pl/30x30/",CateogryID :1},
    {ID:2,Name : "product2",Quantity: 3, Price : 3000,Img: "https://fakeimg.pl/30x30/",CateogryID :1},
    {ID:3,Name : "product3",Quantity: 1, Price : 5800,Img: "https://fakeimg.pl/30x30/",CateogryID :1},
    {ID:4,Name : "product4",Quantity: 88, Price : 300,Img: "https://fakeimg.pl/30x30/",CateogryID :2},
    {ID:5,Name : "product5",Quantity: 500, Price : 100,Img: "https://fakeimg.pl/30x30/",CateogryID :2},
    {ID:6,Name : "product6",Quantity: 0, Price : 1000,Img: "https://fakeimg.pl/30x30/",CateogryID :2},
  ];

  this.storeData=new Storeinfo("Sohag Store ","https://fakeimg.pl/250x100/",this.ProductList)


  }
 
  ngOnInit(): void {
    const subscriber={
      next:(msg:string)=>{alert(msg);},
      error:(msg:string)=>{alert("Error "+msg)},
      complate:(msg:string)=>{alert("Thank You")},
    }
  
  // this.subscribtion=  this.schudalsAdsservice.ScheduledAds().subscribe(subscriber);
  let filterd= this.schudalsAdsservice.ScheduledAds().pipe(
    filter((ad:string)=>ad.includes("a"))
    ,map((ad:string)=>"Offer: "+ad)
  )
  // this.subscribtion=  filterd.subscribe(subscriber);

  // this.subscribtions.push(this.subscribtion);
  }

  ngOnDestroy(): void {

    for(let sub of this.subscribtions)
      sub.unsubscribe();
    }


  toggelimg(){
    this.showlogo=!this.showlogo;
  }

  toggelBuy(){
    this.IsPurshased=!this.IsPurshased;
  }

  // Quantitydecrease(Quantity:number){
   
  // }
  
}

