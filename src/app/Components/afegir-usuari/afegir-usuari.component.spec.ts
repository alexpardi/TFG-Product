import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirUsuariComponent } from './afegir-usuari.component';

describe('AfegirUsuariComponent', () => {
  let component: AfegirUsuariComponent;
  let fixture: ComponentFixture<AfegirUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfegirUsuariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfegirUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
