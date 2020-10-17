import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'projects/crud/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:HttpClient,private ps:ProductService) { }
  allProducts:Product[]
  //NgOn Init method will trigger automatically when this component renders
  ngOnInit(): void {
    this.ps.getProductsFromServer().subscribe((res:Product[])=>{
      console.log(res)
      this.allProducts =res;
    })
    // this.getProductsFromServer()
  }
  sample
  // getProductsFromServer(){
  //   this._http.get("http://localhost:3000/products").subscribe((response:Product[])=>{
  //     this.allProducts = response
  //   })
  // }

}

export interface Product{
  productName:string,
  features:Array<{}>,
  priceDetails:Array<{}>
}
