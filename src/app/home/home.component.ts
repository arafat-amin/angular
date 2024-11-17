import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  categoriesCount = 12;
  displayCount = 6;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    })
  }

  onLoadAbout() {
    this.router.navigate(['/about'])
  }

  productDetails(productId: number) {
    this.router.navigate(['/product', productId])
  }

  getProductsByCategory(Category: string) {
    this.router.navigate(['/products', Category])
  }

  loadMore() {
    this.displayCount += 6; // Increase by 6 each time
  }
}
