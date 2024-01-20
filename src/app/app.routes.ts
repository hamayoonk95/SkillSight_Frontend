import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth-service/auth.guard';
import { SkillGapComponent } from './pages/skill-gap/skill-gap.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'skill-gap', component: SkillGapComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];
