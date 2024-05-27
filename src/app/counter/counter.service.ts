import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class CounterService {
  private counter: number = 0;
  private  counterByValue: number = 0;

  getCount(){
    return this.counter
  }

  getCountBy(){
    return this.counterByValue
  }

  increment() {
   return this.counter++
  }

  decrement() {
    return this.counter--
  }

  increaseBy(value: number) {
    this.counterByValue += value;
  }

  decreaseBy(value: number) {
    this.counterByValue -= value;
  }

  reset() {
    return this.counter = 0
  }
}
