import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarUsuariComponent } from './iniciar-usuari.component';

describe('IniciarUsuariComponent', () => {
  let component: IniciarUsuariComponent;
  let fixture: ComponentFixture<IniciarUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarUsuariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
