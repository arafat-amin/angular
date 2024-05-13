import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{

  count: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    // this.incrementBtn = this.counterService.increment();
    this.count = this.counterService.getCount();
  }

  increment() {
    this.counterService.increment();
    this.count = this.counterService.getCount();
  }

  decrement() {
    this.counterService.decrement();
    this.count = this.counterService.getCount();
  }

  reset() {
    this.counterService.reset();
    this.count = this.counterService.getCount();
  }
}
