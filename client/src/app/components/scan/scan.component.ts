import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  constructor(private counter: CounterService) {}

  ngOnInit() {
  }
  incrementCounter() {
    this.counter.increment();
  }

  decrementCounter() {
    this.counter.decrement();
  }
}
