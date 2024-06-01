import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{

  counterForm!: FormGroup;

  count: number = 0;

  countArbitraryValue: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    // this.incrementBtn = this.counterService.increment();
    this.count = this.counterService.getCount();
    this.countArbitraryValue = this.counterService.getCountBy();

    this.counterForm = new FormGroup ({
      'arbitraryValue': new FormControl(),
    });

  }

  onSubmit() {
    console.log(this.counterForm);
  }

  increaseArbitraryValue() {
    const value = this.counterForm.get('arbitraryValue')?.value;
    if(value) {
      this.counterService.increaseBy(+value);
      this.countArbitraryValue = this.counterService.getCountBy();
    }
  }

  decrementArbitraryValue() {
    const value = this.counterForm.get('arbitraryValue')?.value;
    if (value) {
      this.counterService.decreaseBy(+value); // Convert value to number
      this.countArbitraryValue = this.counterService.getCountBy();
    }
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
    this.counterService.resetByValue();
    this.countArbitraryValue = this.counterService.getCountBy();
    const ResetValue = this.counterForm.get('arbitraryValue')!.reset();
    return ResetValue;
  }
}
