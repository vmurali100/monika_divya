import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'projects/crud/product.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  constructor(private route:ActivatedRoute,private ps:ProductService) { }
  currentProduct
  ngOnInit(): void {
    this.getCurrentProduct()
  }

  getCurrentProduct(){
    this.route.params.subscribe(res=>{
      console.log(res)
      this.ps.getProductsFromServer().subscribe((data:[])=>{
        console.log(data)
        this.currentProduct = data.find((item)=>item['productName'] == res.product)
        console.log(this.currentProduct)
      })
    })
  }

}
