import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="careers-page">
      <div class="careers-hero">
        <div class="container">
          <h1 class="page-title">Join Our Team</h1>
          <p class="page-subtitle">Build your career with us and help shape the future of AI</p>
        </div>
      </div>

      <div class="careers-content">
        <div class="container">
          <div class="jobs-section">
            <h2 class="section-heading">Available Positions</h2>
            <p class="section-description">We're always looking for talented individuals to join our growing team.</p>

            <div class="jobs-list">
              <div class="job-card" *ngFor="let job of jobs">
                <div class="job-header">
                  <div class="job-title-section">
                    <h3 class="job-title">{{ job.title }}</h3>
                    <div class="job-meta">
                      <span class="job-location">📍 {{ job.location }}</span>
                      <span class="job-type">{{ job.type }}</span>
                    </div>
                  </div>
                  <div class="job-actions">
                    <button class="btn btn-primary" (click)="applyForJob(job.id)">Apply Now</button>
                  </div>
                </div>
                <div class="job-description">
                  <p>{{ job.description }}</p>
                </div>
                <div class="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li *ngFor="let requirement of job.requirements">{{ requirement }}</li>
                  </ul>
                </div>
                <div class="job-benefits">
                  <h4>What We Offer:</h4>
                  <ul>
                    <li *ngFor="let benefit of job.benefits">{{ benefit }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="no-jobs" *ngIf="jobs.length === 0">
              <p>We don't have any open positions at the moment, but we're always interested in hearing from talented individuals.</p>
              <p>Please check back later or send us your resume at <a href="mailto:careers&#64;goldpey.com">careers&#64;goldpey.com</a></p>
            </div>
          </div>

          <div class="cta-section">
            <h2>Don't see a position that fits?</h2>
            <p>We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <button class="btn btn-primary btn-large" (click)="submitResume()">Submit Your Resume</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .careers-page {
      min-height: calc(100vh - 80px);
      padding-top: 0;
    }

    .careers-hero {
      padding: 100px 0 80px;
      background: rgba(26, 26, 26, 0.7);
      backdrop-filter: blur(20px);
      text-align: center;
      position: relative;
    }

    .careers-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
    }

    .page-title {
      font-size: 56px;
      font-weight: 800;
      color: white;
      margin-bottom: 20px;
      letter-spacing: -2px;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }

    .page-subtitle {
      font-size: 22px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .careers-content {
      padding: 80px 0;
    }

    .jobs-section {
      margin-bottom: 80px;
    }

    .section-heading {
      font-size: 42px;
      font-weight: 800;
      color: white;
      margin-bottom: 16px;
      letter-spacing: -1.5px;
    }

    .section-description {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.75);
      margin-bottom: 50px;
      line-height: 1.7;
    }

    .jobs-list {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .job-card {
      background: rgba(26, 26, 26, 0.75);
      backdrop-filter: blur(15px);
      border-radius: 16px;
      padding: 40px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .job-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
      border-color: rgba(59, 130, 246, 0.3);
      background: rgba(26, 26, 26, 0.85);
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 20px;
    }

    .job-title-section {
      flex: 1;
    }

    .job-title {
      font-size: 28px;
      font-weight: 700;
      color: white;
      margin-bottom: 12px;
      letter-spacing: -0.5px;
    }

    .job-meta {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .job-location,
    .job-type {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }

    .job-type {
      padding: 4px 12px;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 6px;
    }

    .job-actions {
      display: flex;
      align-items: center;
    }

    .job-description {
      margin-bottom: 24px;
    }

    .job-description p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.7;
    }

    .job-requirements,
    .job-benefits {
      margin-top: 24px;
    }

    .job-requirements h4,
    .job-benefits h4 {
      font-size: 18px;
      font-weight: 700;
      color: white;
      margin-bottom: 12px;
    }

    .job-requirements ul,
    .job-benefits ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .job-requirements li,
    .job-benefits li {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.75);
      line-height: 1.7;
      padding-left: 24px;
      position: relative;
      margin-bottom: 8px;
    }

    .job-requirements li::before,
    .job-benefits li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: 700;
    }

    .no-jobs {
      text-align: center;
      padding: 60px 40px;
      background: rgba(26, 26, 26, 0.6);
      backdrop-filter: blur(15px);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .no-jobs p {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .no-jobs a {
      color: #3b82f6;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }

    .no-jobs a:hover {
      color: #60a5fa;
    }

    .cta-section {
      text-align: center;
      padding: 60px 40px;
      background: rgba(26, 26, 26, 0.7);
      backdrop-filter: blur(15px);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .cta-section h2 {
      font-size: 36px;
      font-weight: 800;
      color: white;
      margin-bottom: 16px;
      letter-spacing: -1px;
    }

    .cta-section p {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.75);
      margin-bottom: 32px;
      line-height: 1.7;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn-large {
      padding: 18px 40px;
      font-size: 17px;
      font-weight: 600;
      border-radius: 12px;
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }

    .btn-large:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.6);
      filter: brightness(1.1);
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 36px;
      }

      .page-subtitle {
        font-size: 18px;
      }

      .section-heading {
        font-size: 32px;
      }

      .job-card {
        padding: 24px;
      }

      .job-header {
        flex-direction: column;
      }

      .job-title {
        font-size: 24px;
      }

      .cta-section {
        padding: 40px 24px;
      }

      .cta-section h2 {
        font-size: 28px;
      }
    }
  `]
})
export class CareersComponent {
  jobs = [
    {
      id: 1,
      title: 'Senior AI Data Annotator',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are seeking an experienced AI Data Annotator to join our team. You will work on high-quality data annotation projects that help train cutting-edge AI models.',
      requirements: [
        'Bachelor\'s degree in a related field',
        '3+ years of experience in data annotation',
        'Strong attention to detail',
        'Excellent written communication skills',
        'Ability to work independently and meet deadlines'
      ],
      benefits: [
        'Competitive salary starting at $40/hour',
        'Flexible work schedule',
        'Remote work opportunity',
        'Health insurance',
        'Professional development opportunities'
      ]
    },
    {
      id: 2,
      title: 'Bilingual Data Specialist',
      location: 'Remote',
      type: 'Part-time / Full-time',
      description: 'Join our team as a Bilingual Data Specialist. You will work on multilingual data annotation projects, helping AI systems understand and process content in multiple languages.',
      requirements: [
        'Native or near-native proficiency in English and at least one other language',
        'Strong linguistic skills',
        'Experience with translation or localization preferred',
        'Detail-oriented approach to work',
        'Reliable internet connection'
      ],
      benefits: [
        'Starting at $25/hour',
        'Work from anywhere',
        'Flexible hours',
        'Opportunity to work with cutting-edge AI technology',
        'Supportive team environment'
      ]
    },
    {
      id: 3,
      title: 'Expert Domain Specialist - Finance',
      location: 'Remote',
      type: 'Contract',
      description: 'We are looking for finance professionals with deep domain expertise to help annotate and validate financial data for AI training. This role requires strong knowledge of financial markets, analysis, and reporting.',
      requirements: [
        'Master\'s degree or Ph.D. in Finance, Economics, or related field',
        '5+ years of professional experience in finance',
        'Strong analytical skills',
        'Knowledge of financial regulations',
        'Ability to explain complex financial concepts clearly'
      ],
      benefits: [
        'Premium pay: $50-80/hour based on experience',
        'Work on interesting and challenging projects',
        'Flexible schedule',
        'Remote work',
        'Contribute to the future of AI in finance'
      ]
    },
    {
      id: 4,
      title: 'Software Engineer - AI Tools',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'We are seeking a Software Engineer to help build and maintain our internal AI annotation tools and platforms. You will work with modern technologies to create efficient workflows for our annotation team.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of software development experience',
        'Proficiency in Python, JavaScript, or similar languages',
        'Experience with web development frameworks',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        '401(k) with company match',
        'Flexible work arrangements',
        'Learning and development budget'
      ]
    }
  ];

  applyForJob(jobId: number): void {
    // In a real application, this would navigate to an application form
    // For now, we'll show an alert
    const job = this.jobs.find(j => j.id === jobId);
    if (job) {
      alert(`Thank you for your interest in the ${job.title} position!\n\nPlease send your resume and cover letter to careers@goldpey.com with the subject line: "Application for ${job.title}"`);
    }
  }

  submitResume(): void {
    alert('Thank you for your interest!\n\nPlease send your resume to careers@goldpey.com and we will keep it on file for future opportunities.');
  }
}
