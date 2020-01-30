import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioProfileComponent } from './bio-profile.component';

describe('BioProfileComponent', () => {
  let component: BioProfileComponent;
  let fixture: ComponentFixture<BioProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
