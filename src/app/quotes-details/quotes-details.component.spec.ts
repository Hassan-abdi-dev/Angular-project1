import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuotesDetailsComponent } from './quotes-details.component';

describe('QuotesDetailsComponent', () => {
  let component: QuotesDetailsComponent;
  let fixture: ComponentFixture<QuotesDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
