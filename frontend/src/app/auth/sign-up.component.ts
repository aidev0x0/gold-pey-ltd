import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card card">
        <h2>Sign Up</h2>
        <p class="subtitle">Create your account to get started</p>
        
        <form (ngSubmit)="onSubmit()" #signUpForm="ngForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="form-control"
                [(ngModel)]="firstName"
                required
                #firstNameInput="ngModel"
                [class.error]="firstNameInput.invalid && firstNameInput.touched"
              />
              <div class="error-message" *ngIf="firstNameInput.invalid && firstNameInput.touched">
                First name is required
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="form-control"
                [(ngModel)]="lastName"
                required
                #lastNameInput="ngModel"
                [class.error]="lastNameInput.invalid && lastNameInput.touched"
              />
              <div class="error-message" *ngIf="lastNameInput.invalid && lastNameInput.touched">
                Last name is required
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              [(ngModel)]="email"
              required
              email
              #emailInput="ngModel"
              [class.error]="emailInput.invalid && emailInput.touched"
            />
            <div class="error-message" *ngIf="emailInput.invalid && emailInput.touched">
              <span *ngIf="emailInput.errors?.['required']">Email is required</span>
              <span *ngIf="emailInput.errors?.['email']">Please enter a valid email</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              [(ngModel)]="password"
              required
              minlength="6"
              #passwordInput="ngModel"
              [class.error]="passwordInput.invalid && passwordInput.touched"
            />
            <div class="error-message" *ngIf="passwordInput.invalid && passwordInput.touched">
              <span *ngIf="passwordInput.errors?.['required']">Password is required</span>
              <span *ngIf="passwordInput.errors?.['minlength']">Password must be at least 6 characters</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              class="form-control"
              [(ngModel)]="confirmPassword"
              required
              #confirmPasswordInput="ngModel"
              [class.error]="(confirmPasswordInput.invalid || passwordMismatch) && confirmPasswordInput.touched"
            />
            <div class="error-message" *ngIf="passwordMismatch && confirmPasswordInput.touched">
              Passwords do not match
            </div>
          </div>

          <div class="error-message" *ngIf="errorMessage">
            {{ errorMessage }}
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            [disabled]="signUpForm.invalid || passwordMismatch || loading"
          >
            <span *ngIf="!loading">Sign Up</span>
            <span *ngIf="loading">Creating account...</span>
          </button>
        </form>

        <div class="auth-footer">
          <p>Already have an account? <a routerLink="/sign-in">Sign in</a></p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      max-width: 450px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .auth-card {
      text-align: center;
    }

    .auth-card h2 {
      font-size: 28px;
      margin-bottom: 8px;
      color: var(--text-primary);
    }

    .subtitle {
      color: var(--text-secondary);
      margin-bottom: 32px;
      font-size: 14px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .form-group {
      text-align: left;
    }

    .form-control.error {
      border-color: var(--danger-color);
    }

    .auth-footer {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid var(--border-color);
    }

    .auth-footer p {
      color: var(--text-secondary);
      font-size: 14px;
    }

    .auth-footer a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
    }

    .auth-footer a:hover {
      text-decoration: underline;
    }

    .btn {
      width: 100%;
      margin-top: 8px;
    }

    @media (max-width: 600px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SignUpComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  loading = false;

  get passwordMismatch(): boolean {
    return this.password !== this.confirmPassword && this.confirmPassword.length > 0;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.loading || this.passwordMismatch) return;

    this.errorMessage = '';
    this.loading = true;

    this.authService.register({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error.error?.message || 'An error occurred. Please try again.';
      }
    });
  }
}
