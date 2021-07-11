import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAssetComponent } from './token-asset.component';

describe('TokenAssetComponent', () => {
  let component: TokenAssetComponent;
  let fixture: ComponentFixture<TokenAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});