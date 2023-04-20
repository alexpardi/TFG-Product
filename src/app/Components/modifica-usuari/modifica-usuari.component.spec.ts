import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaUsuariComponent } from './modifica-usuari.component';

describe('ModificaUsuariComponent', () => {
  let component: ModificaUsuariComponent;
  let fixture: ComponentFixture<ModificaUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaUsuariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
