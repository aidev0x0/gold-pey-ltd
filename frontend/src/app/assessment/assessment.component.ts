import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AssessmentService } from '../services/assessment.service';
import { Assessment, Question, AssessmentSubmission, Answer, QuestionType } from '../models/assessment.model';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="assessment-container">
      <div class="card" *ngIf="assessment">
        <div class="assessment-header">
          <h2>{{ assessment.title }}</h2>
          <p class="description">{{ assessment.description }}</p>
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="progressPercentage"></div>
          </div>
          <p class="progress-text">Question {{ currentQuestionIndex + 1 }} of {{ assessment.questions.length }}</p>
        </div>

        <form (ngSubmit)="onSubmit()" #assessmentForm="ngForm">
          <div class="candidate-info" *ngIf="currentQuestionIndex === 0">
            <h3>Candidate Information</h3>
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input
                type="text"
                class="form-control"
                [(ngModel)]="candidateName"
                name="candidateName"
                required
                placeholder="Enter your full name"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Email Address *</label>
              <input
                type="email"
                class="form-control"
                [(ngModel)]="candidateEmail"
                name="candidateEmail"
                required
                email
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div class="question-section" *ngIf="currentQuestion">
            <div class="question-header">
              <span class="question-number">Q{{ currentQuestionIndex + 1 }}</span>
              <span class="question-category">{{ currentQuestion.category }}</span>
              <span class="question-points">{{ currentQuestion.points }} points</span>
            </div>
            <h3 class="question-text">{{ currentQuestion.text }}</h3>

            <div class="answer-section">
              <div *ngIf="currentQuestion.type === 'MultipleChoice'" class="options">
                <label *ngFor="let option of currentQuestion.options; let i = index" class="option-label">
                  <input
                    type="radio"
                    [name]="'question-' + currentQuestion.id"
                    [value]="option"
                    [(ngModel)]="answers[currentQuestionIndex]"
                    required
                  />
                  <span>{{ option }}</span>
                </label>
              </div>

              <div *ngIf="currentQuestion.type === 'Numeric'" class="numeric-input">
                <input
                  type="number"
                  class="form-control"
                  [(ngModel)]="answers[currentQuestionIndex]"
                  [name]="'question-' + currentQuestion.id"
                  step="0.01"
                  required
                  placeholder="Enter a number"
                />
              </div>

              <div *ngIf="currentQuestion.type === 'Text' || currentQuestion.type === 'Calculation'" class="text-input">
                <textarea
                  class="form-control"
                  [(ngModel)]="answers[currentQuestionIndex]"
                  [name]="'question-' + currentQuestion.id"
                  required
                  placeholder="Enter your answer"
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="navigation-buttons">
            <button
              type="button"
              class="btn btn-secondary"
              (click)="previousQuestion()"
              [disabled]="currentQuestionIndex === 0"
            >
              Previous
            </button>
            <button
              type="button"
              class="btn btn-primary"
              (click)="nextQuestion()"
              *ngIf="currentQuestionIndex < assessment.questions.length - 1"
              [disabled]="!isCurrentQuestionAnswered()"
            >
              Next
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              *ngIf="currentQuestionIndex === assessment.questions.length - 1"
              [disabled]="!assessmentForm.valid || !isCurrentQuestionAnswered() || submitting"
            >
              {{ submitting ? 'Submitting...' : 'Submit Assessment' }}
            </button>
          </div>
        </form>

        <div *ngIf="error" class="error-message">
          {{ error }}
        </div>
      </div>

      <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <p>Loading assessment...</p>
      </div>
    </div>
  `,
  styles: [`
    .assessment-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .assessment-header {
      margin-bottom: 32px;
    }

    .assessment-header h2 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .description {
      color: var(--text-secondary);
      margin-bottom: 24px;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background-color: var(--bg-tertiary);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
    }

    .progress-text {
      font-size: 14px;
      color: var(--text-secondary);
      text-align: right;
    }

    .candidate-info {
      margin-bottom: 32px;
      padding: 24px;
      background: var(--bg-secondary);
      border-radius: 8px;
    }

    .candidate-info h3 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .question-section {
      margin-bottom: 32px;
    }

    .question-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
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

    .question-category {
      background: var(--bg-tertiary);
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      color: var(--text-secondary);
      text-transform: uppercase;
    }

    .question-points {
      background: var(--secondary-color);
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }

    .question-text {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 24px;
      color: var(--text-primary);
    }

    .answer-section {
      margin-bottom: 24px;
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .option-label {
      display: flex;
      align-items: center;
      padding: 16px;
      background: var(--bg-secondary);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .option-label:hover {
      background: var(--bg-tertiary);
    }

    .option-label input[type="radio"] {
      margin-right: 12px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .option-label input[type="radio"]:checked + span {
      font-weight: 600;
      color: var(--primary-color);
    }

    .numeric-input,
    .text-input {
      margin-top: 16px;
    }

    .navigation-buttons {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-top: 32px;
    }

    .navigation-buttons .btn {
      flex: 1;
      max-width: 200px;
    }
  `]
})
export class AssessmentComponent implements OnInit {
  assessment: Assessment | null = null;
  currentQuestionIndex = 0;
  answers: (string | number)[] = [];
  candidateName = '';
  candidateEmail = '';
  loading = true;
  submitting = false;
  error: string | null = null;

  constructor(
    private assessmentService: AssessmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAssessment();
  }

  loadAssessment(): void {
    this.loading = true;
    this.assessmentService.getDefaultAssessment().subscribe({
      next: (assessment) => {
        this.assessment = assessment;
        this.answers = new Array(assessment.questions.length).fill('');
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load assessment. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  get currentQuestion(): Question | null {
    return this.assessment?.questions[this.currentQuestionIndex] || null;
  }

  get progressPercentage(): number {
    if (!this.assessment) return 0;
    return ((this.currentQuestionIndex + 1) / this.assessment.questions.length) * 100;
  }

  isCurrentQuestionAnswered(): boolean {
    if (this.currentQuestionIndex === 0) {
      return this.candidateName.trim() !== '' && this.candidateEmail.trim() !== '';
    }
    const answer = this.answers[this.currentQuestionIndex];
    return answer !== '' && answer !== null && answer !== undefined;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < (this.assessment?.questions.length || 0) - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  onSubmit(): void {
    if (!this.assessment || !this.isFormValid()) {
      return;
    }

    this.submitting = true;
    this.error = null;

    const submission: AssessmentSubmission = {
      assessmentId: this.assessment.id,
      candidateName: this.candidateName,
      candidateEmail: this.candidateEmail,
      answers: this.answers.map((value, index) => ({
        questionId: this.assessment!.questions[index].id,
        value
      })),
      submittedAt: new Date()
    };

    this.assessmentService.submitAssessment(submission).subscribe({
      next: (result) => {
        this.router.navigate(['/results', result.id]);
      },
      error: (err) => {
        this.error = 'Failed to submit assessment. Please try again.';
        this.submitting = false;
        console.error(err);
      }
    });
  }

  private isFormValid(): boolean {
    return this.candidateName.trim() !== '' &&
           this.candidateEmail.trim() !== '' &&
           this.answers.every(answer => answer !== '' && answer !== null && answer !== undefined);
  }
}

