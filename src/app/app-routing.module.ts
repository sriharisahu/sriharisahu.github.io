import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioProfileComponent } from './components/bio-profile/bio-profile.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { VideoResumeComponent } from './components/video-resume/video-resume.component';
import { GenerateLeadComponent } from './components/generate-lead/generate-lead.component';


const routes: Routes = [
  {
    path: 'profile',
    component: BioProfileComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'experience',
    component: WorkExperienceComponent
  },
  {
    path: 'video',
    component: VideoResumeComponent
  },
  {
    path: 'lead',
    component: GenerateLeadComponent
  },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
