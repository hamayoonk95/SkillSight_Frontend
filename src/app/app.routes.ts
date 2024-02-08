import { ExtraOptions, type Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth-service/auth.guard';
import { SkillGapComponent } from './pages/skill-gap/skill-gap.component';
import { SkillGapVisualisationComponent } from './components/skill-gap-visualisation/skill-gap-visualisation.component';
import { RoleProfilingComponent } from './pages/role-profiling/role-profiling.component';
import { RoleRoadmapComponent } from './components/role-roadmap/role-roadmap.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'skill-gap', component: SkillGapComponent },
  {
    path: 'skill-gap-visualisation',
    component: SkillGapVisualisationComponent,
  },
  { path: 'role-profiler', component: RoleProfilingComponent },
  { path: 'role-roadmap', component: RoleRoadmapComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
};
