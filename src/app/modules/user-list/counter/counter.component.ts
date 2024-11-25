import { Component, OnInit } from '@angular/core';
import { increment, decrement } from 'src/app/state/counter/counter.actions';
import { selectCount } from 'src/app/state/counter/counter.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;
  countVar: any;
  constructor(private store: Store) {}

  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(decrement());
  }

  ngOnInit(): void {
    this.count$ = this.store.select(selectCount);
    this.count$.subscribe((result) => {
      this.countVar = result;
      console.log(result);
    });
  }
}
