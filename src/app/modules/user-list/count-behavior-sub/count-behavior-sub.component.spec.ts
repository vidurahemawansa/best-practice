import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBehaviorSubComponent } from './count-behavior-sub.component';

describe('CountBehaviorSubComponent', () => {
  let component: CountBehaviorSubComponent;
  let fixture: ComponentFixture<CountBehaviorSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountBehaviorSubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountBehaviorSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
