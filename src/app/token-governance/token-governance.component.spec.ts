import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGovernanceComponent } from './token-governance.component';

describe('TokenGovernanceComponent', () => {
  let component: TokenGovernanceComponent;
  let fixture: ComponentFixture<TokenGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenGovernanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
