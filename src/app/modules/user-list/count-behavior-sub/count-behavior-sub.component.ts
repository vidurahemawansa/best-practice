import { Component } from '@angular/core';
import { CountService } from '../services/count.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-count-behavior-sub',
  templateUrl: './count-behavior-sub.component.html',
  styleUrl: './count-behavior-sub.component.scss',
})
export class CountBehaviorSubComponent {
  count!: number;

  constructor(private countService: CountService) {
    this.countService.countObj
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe((result: any) => {
        console.log(result);
        this.count = result;
      });

    this.countService.countObj.subscribe({
      next: (result) => {
        console.log('2nd method ', result);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  handleIncrement() {
    this.countService.increment();
  }
}
