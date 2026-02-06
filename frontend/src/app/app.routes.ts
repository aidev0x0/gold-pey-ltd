import { Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SignInComponent } from './auth/sign-in.component';
import { SignUpComponent } from './auth/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'results/:id', component: ResultsComponent },
  { path: '**', redirectTo: '' }
];

