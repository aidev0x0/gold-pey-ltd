import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="container">
          <h1>Financial Analyst Assessment</h1>
          <p class="subtitle">Evaluate your financial analysis skills</p>
        </div>
      </header>
      <main class="app-main">
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </main>
      <footer class="app-footer">
        <div class="container">
          <p>&copy; 2024 Financial Analyst Assessment Platform</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .app-header {
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
      color: white;
      padding: 32px 0;
      box-shadow: var(--shadow-lg);
    }

    .app-header h1 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .app-header .subtitle {
      font-size: 16px;
      opacity: 0.9;
    }

    .app-main {
      flex: 1;
      padding: 40px 0;
    }

    .app-footer {
      background-color: var(--bg-primary);
      border-top: 1px solid var(--border-color);
      padding: 24px 0;
      text-align: center;
      color: var(--text-secondary);
      font-size: 14px;
    }
  `]
})
export class AppComponent {
  title = 'Financial Analyst Assessment';
}

