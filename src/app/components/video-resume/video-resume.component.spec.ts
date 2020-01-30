import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoResumeComponent } from './video-resume.component';

describe('VideoResumeComponent', () => {
  let component: VideoResumeComponent;
  let fixture: ComponentFixture<VideoResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
