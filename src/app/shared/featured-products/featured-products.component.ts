import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
declare var $: any;

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit, AfterViewInit {
  data: any[] = [];
  displayCount = 6;
  carouselInitialized = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      this.cdr.detectChanges(); // Trigger change detection
      this.initializeCarousel();
    })
  }

  ngAfterViewInit() {
    if (this.data.length > 0 && !this.carouselInitialized) {
      this.initializeCarousel();
    }
  }

  initializeCarousel() {
    if ($('.three-column-carousel').length) {
      $('.three-column-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 3000,
        autoplay: false,
        navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 2 },
          800: { items: 2 },
          1024: { items: 4 }
        }
      });
      this.carouselInitialized = true;
    }
  }

  productDetails(productId: number) {
    this.router.navigate(['/product', productId])
  }
}
