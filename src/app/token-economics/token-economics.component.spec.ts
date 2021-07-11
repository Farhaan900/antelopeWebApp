import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenEconomicsComponent } from './token-economics.component';

describe('TokenEconomicsComponent', () => {
  let component: TokenEconomicsComponent;
  let fixture: ComponentFixture<TokenEconomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenEconomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenEconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
