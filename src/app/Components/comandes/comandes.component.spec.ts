import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandesComponent } from './comandes.component';

describe('ComandesComponent', () => {
  let component: ComandesComponent;
  let fixture: ComponentFixture<ComandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
