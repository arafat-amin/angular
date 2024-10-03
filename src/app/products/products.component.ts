import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any[] = [];
  displayCount = 16;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data)
    })
  }

  productDetails(productId: number) {
    this.router.navigate(['/product', productId]);
    console.log(productId)
  }

  loadMore() {
    this.displayCount += 8; // Increase by 6 each time
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
