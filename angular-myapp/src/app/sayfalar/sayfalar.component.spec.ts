import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayfalarComponent } from './sayfalar.component';

describe('SayfalarComponent', () => {
  let component: SayfalarComponent;
  let fixture: ComponentFixture<SayfalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SayfalarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SayfalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
