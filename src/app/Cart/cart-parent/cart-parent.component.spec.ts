import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartParentComponent } from './cart-parent.component';

describe('CartParentComponent', () => {
  let component: CartParentComponent;
  let fixture: ComponentFixture<CartParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
