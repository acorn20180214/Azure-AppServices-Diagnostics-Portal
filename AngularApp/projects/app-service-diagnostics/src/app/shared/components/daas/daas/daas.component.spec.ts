import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaasComponent } from './daas.component';

describe('DaasComponent', () => {
  let component: DaasComponent;
  let fixture: ComponentFixture<DaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
