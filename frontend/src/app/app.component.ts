import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { User } from './models/auth.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="container">
          <div class="header-content">
            <div class="header-left">
              <h1>Financial Analyst Assessment</h1>
              <p class="subtitle">Evaluate your financial analysis skills</p>
            </div>
            <div class="header-right">
              <div *ngIf="currentUser" class="user-menu">
                <span class="user-name">Welcome, {{ currentUser.firstName }}!</span>
                <button class="btn btn-secondary btn-small" (click)="logout()">Sign Out</button>
              </div>
              <div *ngIf="!currentUser" class="auth-buttons">
                <a routerLink="/sign-in" class="btn btn-secondary btn-small">Sign In</a>
                <a routerLink="/sign-up" class="btn btn-primary btn-small">Sign Up</a>
              </div>
            </div>
          </div>
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

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .header-left {
      flex: 1;
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

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .auth-buttons {
      display: flex;
      gap: 12px;
    }

    .user-menu {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .user-name {
      font-size: 14px;
      opacity: 0.9;
    }

    .btn-small {
      padding: 8px 16px;
      font-size: 14px;
    }

    .btn-secondary {
      background-color: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.3);
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

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        align-items: flex-start;
      }

      .header-right {
        width: 100%;
        justify-content: flex-end;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Financial Analyst Assessment';
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

