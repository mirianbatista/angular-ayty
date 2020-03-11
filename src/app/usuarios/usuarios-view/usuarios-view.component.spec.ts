import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosViewComponent } from './usuarios-view.component';

describe('UsuariosViewComponent', () => {
  let component: UsuariosViewComponent;
  let fixture: ComponentFixture<UsuariosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
