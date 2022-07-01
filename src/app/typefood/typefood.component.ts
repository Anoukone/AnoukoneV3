import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../register/user-service';

@Component({
  selector: 'app-typefood',
  templateUrl: './typefood.component.html',
  styleUrls: ['./typefood.component.css']
})
export class TypefoodComponent implements OnInit {
  getType: any
  getproductTypes: any = []

  constructor(private productService: ProductsService, private activeroute: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.getType = this.activeroute.snapshot.paramMap.get('id')
    this.productService.productItem(this.getType).subscribe((res) => {
      this.getproductTypes = res
    })
  }



}
