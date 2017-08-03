import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    count= 0;
    constructor() { }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }

    decrement() {
      if (this.count <= 0) {
        this.count = 0;
      } else {
        this.count--;
        console.log(`Count is now ${this.count}`);
    }
  }
}
