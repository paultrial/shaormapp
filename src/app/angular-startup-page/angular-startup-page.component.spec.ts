import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStartupPageComponent } from './angular-startup-page.component';

describe('AngularStartupPageComponent', () => {
  let component: AngularStartupPageComponent;
  let fixture: ComponentFixture<AngularStartupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularStartupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularStartupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
