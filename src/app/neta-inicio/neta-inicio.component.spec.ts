import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaInicioComponent } from './neta-inicio.component';

describe('NetaInicioComponent', () => {
  let component: NetaInicioComponent;
  let fixture: ComponentFixture<NetaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
