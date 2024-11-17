import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  displayCount = 16;
  currentCategory: string | null = null;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Subscribe to route params to get category
    this.route.params.subscribe(params => {
      this.currentCategory = params['category']
      // Get all categories
      this.dataService.getData().subscribe(response => {
        this.data = response;
        // console.log(this.data)

        // Filter products if category is provided
        if (this.currentCategory) {
          this.filteredData = this.data.filter(product =>
            product.category.toLowerCase() === this.currentCategory?.toLowerCase()
          );
        } else {
          this.filteredData = this.data;
        }
      })
    })

  }

  productDetails(productId: number) {
    this.router.navigate(['/product', productId]);
    // console.log(productId)
  }

  loadMore() {
    this.displayCount += 8; // Increase by 6 each time
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  // clearFilter method to clear category filter
  clearFilter() {
    this.currentCategory = null;
    this.filteredData = this.data;
    this.router.navigate(['/products']);
  }
}
