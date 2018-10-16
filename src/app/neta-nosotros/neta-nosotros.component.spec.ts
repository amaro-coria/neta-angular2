import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaNosotrosComponent } from './neta-nosotros.component';

describe('NetaNosotrosComponent', () => {
  let component: NetaNosotrosComponent;
  let fixture: ComponentFixture<NetaNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetaNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
