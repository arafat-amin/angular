import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const productId = +(this.route.snapshot.paramMap.get('id')!);

    this.dataService.getProduct(productId).subscribe(response => {
      this.product = response;
      console.log(this.product)
    })
  }
}
