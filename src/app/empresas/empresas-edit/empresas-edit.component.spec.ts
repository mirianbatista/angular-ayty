import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasEditComponent } from './empresas-edit.component';

describe('EmpresasEditComponent', () => {
  let component: EmpresasEditComponent;
  let fixture: ComponentFixture<EmpresasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
