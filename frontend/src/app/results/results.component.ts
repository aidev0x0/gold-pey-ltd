import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentService } from '../services/assessment.service';
import { AssessmentResult } from '../models/assessment.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="results-container">
      <div class="card" *ngIf="result">
        <div class="results-header">
          <h2>Assessment Results</h2>
          <div class="score-display">
            <div class="score-circle">
              <div class="score-value">{{ result.percentage }}%</div>
              <div class="score-label">Score</div>
            </div>
            <div class="score-details">
              <p><strong>Candidate:</strong> {{ result.candidateName }}</p>
              <p><strong>Email:</strong> {{ result.candidateEmail }}</p>
              <p><strong>Total Score:</strong> {{ result.totalScore }} / {{ result.maxScore }} points</p>
              <p><strong>Submitted:</strong> {{ result.submittedAt | date:'medium' }}</p>
            </div>
          </div>
        </div>

        <div class="results-summary">
          <h3>Question Results</h3>
          <div class="question-results">
            <div
              *ngFor="let questionResult of result.questionResults; let i = index"
              class="question-result-item"
              [class.correct]="questionResult.isCorrect"
              [class.incorrect]="!questionResult.isCorrect"
            >
              <div class="question-result-header">
                <span class="question-number">Q{{ i + 1 }}</span>
                <span class="question-points">
                  {{ questionResult.points }} / {{ questionResult.maxPoints }} points
                </span>
                <span class="question-status" [class.correct]="questionResult.isCorrect">
                  {{ questionResult.isCorrect ? '✓ Correct' : '✗ Incorrect' }}
                </span>
              </div>
              <p class="question-text">{{ questionResult.questionText }}</p>
              <div class="answer-comparison">
                <div class="answer-item">
                  <strong>Your Answer:</strong>
                  <span>{{ questionResult.userAnswer }}</span>
                </div>
                <div class="answer-item" *ngIf="questionResult.correctAnswer !== undefined">
                  <strong>Correct Answer:</strong>
                  <span>{{ questionResult.correctAnswer }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary" (click)="startNewAssessment()">
            Take Another Assessment
          </button>
        </div>
      </div>

      <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <p>Loading results...</p>
      </div>

      <div class="error-message" *ngIf="error">
        {{ error }}
      </div>
    </div>
  `,
  styles: [`
    .results-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .results-header {
      text-align: center;
      margin-bottom: 32px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--border-color);
    }

    .results-header h2 {
      font-size: 28px;
      margin-bottom: 24px;
    }

    .score-display {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
      flex-wrap: wrap;
    }

    .score-circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: var(--shadow-lg);
    }

    .score-value {
      font-size: 36px;
      font-weight: 700;
    }

    .score-label {
      font-size: 14px;
      opacity: 0.9;
    }

    .score-details {
      text-align: left;
    }

    .score-details p {
      margin-bottom: 8px;
      color: var(--text-secondary);
    }

    .score-details strong {
      color: var(--text-primary);
    }

    .results-summary {
      margin-bottom: 32px;
    }

    .results-summary h3 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .question-results {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .question-result-item {
      padding: 20px;
      border-radius: 8px;
      border: 2px solid var(--border-color);
      background: var(--bg-secondary);
    }

    .question-result-item.correct {
      border-color: var(--secondary-color);
      background: rgba(16, 185, 129, 0.05);
    }

    .question-result-item.incorrect {
      border-color: var(--danger-color);
      background: rgba(239, 68, 68, 0.05);
    }

    .question-result-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    .question-number {
      background: var(--primary-color);
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 14px;
    }

    .question-points {
      background: var(--bg-tertiary);
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      color: var(--text-secondary);
    }

    .question-status {
      margin-left: auto;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }

    .question-status.correct {
      background: var(--secondary-color);
      color: white;
    }

    .question-status:not(.correct) {
      background: var(--danger-color);
      color: white;
    }

    .question-text {
      font-size: 16px;
      margin-bottom: 16px;
      color: var(--text-primary);
      line-height: 1.6;
    }

    .answer-comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 12px;
    }

    .answer-item {
      padding: 12px;
      background: var(--bg-primary);
      border-radius: 6px;
      font-size: 14px;
    }

    .answer-item strong {
      display: block;
      margin-bottom: 4px;
      color: var(--text-secondary);
      font-size: 12px;
      text-transform: uppercase;
    }

    .answer-item span {
      color: var(--text-primary);
      font-weight: 500;
    }

    .results-actions {
      text-align: center;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 2px solid var(--border-color);
    }
  `]
})
export class ResultsComponent implements OnInit {
  result: AssessmentResult | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assessmentService: AssessmentService
  ) {}

  ngOnInit(): void {
    const resultId = this.route.snapshot.paramMap.get('id');
    if (resultId) {
      this.loadResult(resultId);
    } else {
      this.error = 'No result ID provided';
      this.loading = false;
    }
  }

  loadResult(id: string): void {
    this.loading = true;
    this.assessmentService.getResult(id).subscribe({
      next: (result) => {
        this.result = result;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load results. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  startNewAssessment(): void {
    this.router.navigate(['/']);
  }
}

