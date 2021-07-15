import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionUpdaterComponent } from './transaction-updater.component';

describe('TransactionUpdaterComponent', () => {
  let component: TransactionUpdaterComponent;
  let fixture: ComponentFixture<TransactionUpdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionUpdaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
