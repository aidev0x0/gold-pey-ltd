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
              <div class="logo">
                <span class="logo-large">GP</span>
                <span class="logo-text">GOLD PEY</span>
              </div>
            </div>
            <nav class="header-right">
              <a routerLink="/testimonials" class="nav-link">Testimonials</a>
              <a routerLink="/bilingual" class="nav-link">Are you bilingual?</a>
              <a routerLink="/code" class="nav-link">Know how to code?</a>
              <a routerLink="/about" class="nav-link">About</a>
              <a routerLink="/blog" class="nav-link">Blog</a>
              <a routerLink="/faq" class="nav-link">FAQ</a>
              <a routerLink="/safety" class="nav-link">Safety</a>
              <div *ngIf="currentUser" class="user-menu">
                <span class="user-name">Welcome, {{ currentUser.firstName }}!</span>
                <a routerLink="/sign-in" class="nav-link">Sign In</a>
                <button class="btn btn-outline" (click)="logout()">Sign Out</button>
              </div>
              <div *ngIf="!currentUser" class="auth-buttons">
                <a routerLink="/sign-in" class="nav-link">Sign In</a>
                <a routerLink="/sign-up" class="btn btn-primary">Get Started</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main class="app-main">
        <router-outlet></router-outlet>
      </main>
      <footer class="app-footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Gold Pey</h3>
              <div class="footer-links">
                <a routerLink="/">Home</a>
                <a routerLink="/about">About</a>
                <a routerLink="/faq">FAQ</a>
              </div>
            </div>
            <div class="footer-section">
              <h4>Getting Started</h4>
              <div class="footer-links">
                <a routerLink="/sign-up">Create Account</a>
                <a routerLink="/about">What is Data Annotation?</a>
                <a routerLink="/safety">Trust & Safety</a>
              </div>
            </div>
            <div class="footer-section">
              <h4>Specializations</h4>
              <div class="footer-links">
                <a routerLink="/code">Programmers</a>
                <a routerLink="/bilingual">Bilingual</a>
                <a routerLink="/expert">Expert Team</a>
              </div>
            </div>
            <div class="footer-section">
              <h4>Resources</h4>
              <div class="footer-links">
                <a routerLink="/blog">Blog</a>
                <a routerLink="/testimonials">Testimonials</a>
                <a routerLink="/faq">FAQ</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Gold Pey. All rights reserved.</p>
            <div class="footer-legal">
              <a routerLink="/privacy">Privacy Policy</a>
              <a routerLink="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .app-header {
      background-color: rgba(10, 10, 10, 0.8);
      backdrop-filter: blur(10px);
      color: white;
      padding: 24px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      z-index: 10;
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

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .logo-large {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .logo-text {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      opacity: 0.9;
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 14px;
      font-weight: 400;
      transition: opacity 0.2s ease;
    }

    .nav-link:hover {
      opacity: 0.7;
    }

    .auth-buttons {
      display: flex;
      align-items: center;
      gap: 16px;
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

    .btn-outline {
      background-color: transparent;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 8px 16px;
      font-size: 14px;
    }

    .btn-outline:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .app-main {
      flex: 1;
      position: relative;
      z-index: 1;
    }

    .app-footer {
      background: rgba(10, 10, 10, 0.9);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 60px 0 30px;
      position: relative;
      z-index: 10;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-section h3 {
      font-size: 20px;
      font-weight: 700;
      color: white;
      margin-bottom: 20px;
    }

    .footer-section h4 {
      font-size: 16px;
      font-weight: 600;
      color: white;
      margin-bottom: 16px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      flex-wrap: wrap;
      gap: 20px;
    }

    .footer-bottom p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }

    .footer-legal {
      display: flex;
      gap: 24px;
    }

    .footer-legal a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s ease;
    }

    .footer-legal a:hover {
      color: white;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        align-items: flex-start;
      }

      .header-right {
        width: 100%;
        flex-wrap: wrap;
        gap: 12px;
      }

      .nav-link {
        font-size: 13px;
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

