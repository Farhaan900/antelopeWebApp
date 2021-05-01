import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerTokenComponent } from './ruler-token.component';

describe('RulerTokenComponent', () => {
  let component: RulerTokenComponent;
  let fixture: ComponentFixture<RulerTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulerTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulerTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
