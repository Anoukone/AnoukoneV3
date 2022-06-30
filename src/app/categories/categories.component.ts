import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  productTypes: any = []
  getType: any

  constructor(private service: ProductsService,private activeroute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.service.getproductTypes().subscribe(res =>{
      this.productTypes = res

    })
  }

}
