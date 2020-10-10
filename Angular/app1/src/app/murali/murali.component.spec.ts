import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuraliComponent } from './murali.component';

describe('MuraliComponent', () => {
  let component: MuraliComponent;
  let fixture: ComponentFixture<MuraliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuraliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuraliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
