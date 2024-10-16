import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

constructor (private route: Router, private dataService: DataService, private router: Router) {}

ngOnInit(): void {
  this.dataService.getData().subscribe(response => {
    this.data = response;
  })
}

  onLoadAbout() {
    this.route.navigate(['/about'])
  }

  productDetails(productId: number) {
    this.router.navigate(['/product', productId])
  }

  loadMore(){
    this.displayCount += 6; // Increase by 6 each time
  }
}
