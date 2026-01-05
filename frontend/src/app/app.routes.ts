import { Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'results/:id', component: ResultsComponent },
  { path: '**', redirectTo: '' }
];

