import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <div class="welcome-card card">
        <h2>Welcome to Financial Analyst Assessment</h2>
        <p class="description">
          This assessment evaluates your skills in financial analysis, including financial modeling,
          ratio analysis, valuation techniques, and data interpretation.
        </p>
        <div class="features">
          <div class="feature">
            <h3>📊 Financial Analysis</h3>
            <p>Test your understanding of financial statements and ratios</p>
          </div>
          <div class="feature">
            <h3>💰 Valuation Methods</h3>
            <p>Demonstrate knowledge of DCF, comparables, and other valuation techniques</p>
          </div>
          <div class="feature">
            <h3>📈 Data Interpretation</h3>
            <p>Show your ability to analyze and interpret financial data</p>
          </div>
        </div>
        <div class="actions">
          <button class="btn btn-primary" (click)="startAssessment()">
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .welcome-card {
      text-align: center;
    }

    .welcome-card h2 {
      font-size: 28px;
      margin-bottom: 16px;
      color: var(--text-primary);
    }

    .description {
      font-size: 16px;
      color: var(--text-secondary);
      margin-bottom: 32px;
      line-height: 1.8;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .feature {
      padding: 24px;
      background: var(--bg-secondary);
      border-radius: 8px;
      text-align: left;
    }

    .feature h3 {
      font-size: 18px;
      margin-bottom: 8px;
      color: var(--text-primary);
    }

    .feature p {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .actions {
      margin-top: 32px;
    }

    .btn {
      font-size: 16px;
      padding: 14px 32px;
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  startAssessment(): void {
    this.router.navigate(['/assessment']);
  }
}

