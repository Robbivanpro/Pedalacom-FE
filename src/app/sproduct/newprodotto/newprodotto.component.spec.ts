import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprodottoComponent } from './newprodotto.component';

describe('NewprodottoComponent', () => {
  let component: NewprodottoComponent;
  let fixture: ComponentFixture<NewprodottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprodottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
