import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypefComponent } from './typef.component';

describe('TypefComponent', () => {
  let component: TypefComponent;
  let fixture: ComponentFixture<TypefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
