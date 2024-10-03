import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

declare var Swiper: any;

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit, AfterViewInit {

  data: any[] = [];
  displayCount = 6;
  swiper: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      this.cdr.detectChanges();
      if (this.swiper) {
        this.swiper.update();
      }
    });
  }

  ngAfterViewInit() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    this.swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        },
      }
    });
  }

  productDetails(productId: number) {
    this.router.navigate(['/product', productId])
  }
}
