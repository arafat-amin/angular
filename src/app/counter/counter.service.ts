import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class CounterService {
  private counter: number = 0;

  getCount(){
    return this.counter
  }

  increment() {
   return this.counter++
  }

  decrement() {
    return this.counter--
  }

  reset() {
    return this.counter = 0
  }
}
