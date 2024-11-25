import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  countVal: number = 0;
  countObj = new BehaviorSubject<number>(this.countVal);

  increment() {
    this.countVal++;
    this.countObj.next(this.countVal);
  }
}
