import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assessment, AssessmentSubmission, AssessmentResult } from '../models/assessment.model';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getAssessment(id: string): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/assessments/${id}`);
  }

  getDefaultAssessment(): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/assessments/default`);
  }

  submitAssessment(submission: AssessmentSubmission): Observable<AssessmentResult> {
    return this.http.post<AssessmentResult>(`${this.apiUrl}/assessments/submit`, submission);
  }

  getResult(id: string): Observable<AssessmentResult> {
    return this.http.get<AssessmentResult>(`${this.apiUrl}/assessments/results/${id}`);
  }
}

