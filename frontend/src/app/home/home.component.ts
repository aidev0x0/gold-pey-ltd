import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-left">
            <h1 class="hero-headline">Get paid to train AI on your own schedule</h1>
            <button class="btn btn-primary btn-large" (click)="startAssessment()">
              Apply Now
            </button>
            <div class="social-proof">
              <p class="as-seen-on">As seen on:</p>
              <div class="media-logos">
                <span class="media-logo">BuzzFeed</span>
                <span class="media-logo">INDEPENDENT</span>
                <span class="media-logo">yahoo!news</span>
                <span class="media-logo">News</span>
              </div>
              <div class="reviews">
                <span class="indeed-logo">indeed</span>
                <div class="stars">
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                </div>
                <span class="rating-text">4.6 from 145 reviews</span>
                <span class="badge">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Expert Team Section -->
    <section class="expert-section">
      <div class="container">
        <div class="expert-content">
          <h2>Do you have a degree in math, physics, biology, or chemistry?</h2>
          <p class="expert-subtitle">Are you passionate about solving complex problems? Do you value the freedom to work on your own schedule? We are seeking experts with bachelor's, master's, or Ph.D. degrees. Expert projects start at $40 USD per hour with higher pay available for high-quality and high-volume work</p>
          <button class="btn btn-primary btn-large">Join our Expert Team today!</button>
          <div class="expert-fields">
            <span class="expert-field">Math</span>
            <span class="expert-field">Physics</span>
            <span class="expert-field">Biology</span>
            <span class="expert-field">Chemistry</span>
            <span class="expert-field">Law</span>
            <span class="expert-field">Medicine</span>
            <span class="expert-field">Finance</span>
          </div>
          <div class="stats">
            <div class="stat-item">
              <div class="stat-value">Millions</div>
              <div class="stat-label">Paid out</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">Starting at $20+</div>
              <div class="stat-label">per hour</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">100k+</div>
              <div class="stat-label">Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="steps-section">
      <div class="container">
        <h2 class="section-title">Do tasks, earn money. Simple as that.</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1.</div>
            <h3>Create an account</h3>
            <p>We're currently accepting folks from the US, Canada, UK, Ireland, New Zealand, and Australia. If you are outside these countries, you are still welcome to make an account (we'll email you when we're ready for you).</p>
          </div>
          <div class="step">
            <div class="step-number">2.</div>
            <h3>Take the Starter Assessment</h3>
            <p>If you pass, we'll notify you via email, and you'll have access to a wide range of work.</p>
          </div>
          <div class="step">
            <div class="step-number">3.</div>
            <h3>Start Earning!</h3>
            <p>Begin working on projects and earning money on your own schedule.</p>
          </div>
        </div>
        <button class="btn btn-primary btn-large center-btn" (click)="startAssessment()">Get Started Today!</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Flexible work and transparent pay!</h2>
        <div class="features-grid">
          <div class="feature-item">
            <h3>Flexible hours</h3>
            <p>Work whenever it suits you</p>
          </div>
          <div class="feature-item">
            <h3>Work from anywhere</h3>
            <p>Complete projects from the comfort of your home</p>
          </div>
          <div class="feature-item">
            <h3>Free training</h3>
            <p>We provide all the training you need</p>
          </div>
          <div class="feature-item">
            <h3>Choose your projects</h3>
            <p>Select the work that interests you</p>
          </div>
          <div class="feature-item">
            <h3>No AI experience required</h3>
            <p>We'll teach you everything you need to know</p>
          </div>
          <div class="feature-item">
            <h3>Transparent pay</h3>
            <p>Know exactly what you'll earn</p>
          </div>
        </div>
        <button class="btn btn-primary btn-large center-btn" (click)="startAssessment()">Get Started Today!</button>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Questions? Answers.</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>How much will I get paid?</h3>
            <p>From $20 an hour upwards.</p>
          </div>
          <div class="faq-item">
            <h3>How flexible is the work?</h3>
            <p>Very! You choose when to work, how much to work, and which projects you'd like to work on. Work is available 24/7/365.</p>
          </div>
          <div class="faq-item">
            <h3>How much work will be available to me?</h3>
            <p>If you qualify for our long-running projects and demonstrate high-quality work, there will be virtually unlimited work available to you.</p>
          </div>
          <div class="faq-item">
            <h3>What kind of data collection projects do you have?</h3>
            <p>Projects on the platform run the gamut: from survey-style work, to interacting with chatbots, to creative writing tasks, and much more! Additionally, some of our core projects allow you to take advantage of your areas of expertise or subjects that you are passionate about.</p>
          </div>
          <div class="faq-item">
            <h3>Who is this opportunity for?</h3>
            <p>While no specific background experience is necessary, we're seeking individuals who have excellent writing and critical reasoning abilities, and are detail-oriented, creative, and self-motivated.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">Testimonials</h2>
        <p class="section-subtitle">We're proud that our platform has had such a positive impact on our community members' lives</p>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p class="testimonial-text">"This platform has honestly felt too good to be true! (I'm generally a huge skeptic and do not trust easily!) It has afforded me the ability to work from home.. and actually make a decent living doing so! I'm a mom of 6 and homeschool and prefer to stay at home with my family."</p>
            <p class="testimonial-author">- Vicki</p>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">"Working with DataAnnotation has been a great way to make some extra money in my free time while I prepare to graduate med school. The projects are interesting and interactive, there is often unlimited work, and the pay is great!"</p>
            <p class="testimonial-author">- Max</p>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">"Real work. Zero issues! Throughout my time here, I've had the opportunity to work unlimited, flexible hours with projects that pay well and on time with no issues."</p>
            <p class="testimonial-author">- Tyler</p>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">"A great company to work with! I have contributed to some very interesting projects and it feels great to know that I had a part in building such amazing things even if it is just a small part."</p>
            <p class="testimonial-author">- Brian</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2 class="section-title">Limited Spots Available</h2>
        <p class="section-subtitle">Flexible and remote work from the comfort of your home.</p>
        <button class="btn btn-primary btn-large" (click)="startAssessment()">Get Started</button>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Section */
    .hero-section {
      position: relative;
      min-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      padding: 60px 0;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to right, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.7) 45%, rgba(10, 10, 10, 0.4) 70%, rgba(10, 10, 10, 0.2) 100%);
      z-index: 1;
    }

    .hero-container {
      position: relative;
      z-index: 2;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 40px;
      width: 100%;
    }

    .hero-content {
      max-width: 600px;
    }

    .hero-left {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .hero-headline {
      font-size: 56px;
      font-weight: 700;
      line-height: 1.1;
      color: white;
      margin: 0;
      letter-spacing: -1px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .btn-large {
      padding: 16px 32px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 8px;
      width: fit-content;
      background-color: #3b82f6;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.2s ease;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    .btn-large:hover {
      background-color: #2563eb;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
    }

    .center-btn {
      display: block;
      margin: 40px auto 0;
    }

    .social-proof {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
    }

    .as-seen-on {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }

    .media-logos {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }

    .media-logo {
      font-size: 14px;
      color: white;
      font-weight: 500;
    }

    .reviews {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .indeed-logo {
      font-size: 18px;
      color: #3b82f6;
      font-weight: 600;
    }

    .stars {
      display: flex;
      gap: 2px;
    }

    .star {
      color: #fbbf24;
      font-size: 18px;
    }

    .rating-text {
      font-size: 14px;
      color: white;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 6px;
      color: white;
      font-size: 14px;
      font-weight: 600;
    }

    /* Expert Section */
    .expert-section {
      padding: 80px 0;
      background: rgba(26, 26, 26, 0.6);
      backdrop-filter: blur(10px);
    }

    .expert-content {
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .expert-section h2 {
      font-size: 36px;
      font-weight: 700;
      color: white;
      margin-bottom: 20px;
    }

    .expert-subtitle {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .expert-fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin: 40px 0;
    }

    .expert-field {
      padding: 10px 20px;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.4);
      border-radius: 6px;
      color: white;
      font-weight: 500;
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 60px;
      margin-top: 50px;
      flex-wrap: wrap;
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      font-size: 32px;
      font-weight: 700;
      color: #3b82f6;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
    }

    /* Steps Section */
    .steps-section {
      padding: 80px 0;
    }

    .section-title {
      font-size: 42px;
      font-weight: 700;
      color: white;
      text-align: center;
      margin-bottom: 50px;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .step {
      text-align: center;
    }

    .step-number {
      font-size: 48px;
      font-weight: 700;
      color: #3b82f6;
      margin-bottom: 20px;
    }

    .step h3 {
      font-size: 24px;
      font-weight: 600;
      color: white;
      margin-bottom: 12px;
    }

    .step p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    /* Features Section */
    .features-section {
      padding: 80px 0;
      background: rgba(26, 26, 26, 0.6);
      backdrop-filter: blur(10px);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }

    .feature-item {
      padding: 30px;
      background: rgba(26, 26, 26, 0.8);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .feature-item h3 {
      font-size: 20px;
      font-weight: 600;
      color: white;
      margin-bottom: 12px;
    }

    .feature-item p {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    /* FAQ Section */
    .faq-section {
      padding: 80px 0;
    }

    .faq-list {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      padding: 30px;
      background: rgba(26, 26, 26, 0.6);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .faq-item h3 {
      font-size: 20px;
      font-weight: 600;
      color: white;
      margin-bottom: 12px;
    }

    .faq-item p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    /* Testimonials Section */
    .testimonials-section {
      padding: 80px 0;
      background: rgba(26, 26, 26, 0.6);
      backdrop-filter: blur(10px);
    }

    .section-subtitle {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      margin-bottom: 50px;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .testimonial-card {
      padding: 30px;
      background: rgba(26, 26, 26, 0.8);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .testimonial-text {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
      margin-bottom: 20px;
      font-style: italic;
    }

    .testimonial-author {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 600;
    }

    /* CTA Section */
    .cta-section {
      padding: 80px 0;
      text-align: center;
    }

    @media (max-width: 1024px) {
      .hero-overlay {
        background: linear-gradient(to right, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.75) 100%);
      }

      .hero-headline {
        font-size: 42px;
      }

      .section-title {
        font-size: 32px;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 40px 0;
      }

      .hero-container {
        padding: 0 20px;
      }

      .hero-headline {
        font-size: 32px;
      }

      .btn-large {
        width: 100%;
      }

      .hero-overlay {
        background: rgba(10, 10, 10, 0.8);
      }

      .expert-section,
      .steps-section,
      .features-section,
      .faq-section,
      .testimonials-section,
      .cta-section {
        padding: 60px 0;
      }

      .stats {
        gap: 30px;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  startAssessment(): void {
    this.router.navigate(['/sign-up']);
  }
}
