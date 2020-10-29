import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibMkComponent } from './my-lib-mk.component';

describe('MyLibMkComponent', () => {
  let component: MyLibMkComponent;
  let fixture: ComponentFixture<MyLibMkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibMkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibMkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
