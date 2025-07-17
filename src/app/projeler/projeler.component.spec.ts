import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjelerComponent } from './projeler.component';

describe('ProjelerComponent', () => {
  let component: ProjelerComponent;
  let fixture: ComponentFixture<ProjelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjelerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
