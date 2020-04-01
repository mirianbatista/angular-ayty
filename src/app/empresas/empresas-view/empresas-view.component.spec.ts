import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasViewComponent } from './empresas-view.component';

describe('EmpresasViewComponent', () => {
  let component: EmpresasViewComponent;
  let fixture: ComponentFixture<EmpresasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
