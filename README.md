# Financial Analyst Assessment Platform

A comprehensive web application for conducting financial analyst hiring assessments. Built with Angular (frontend) and ASP.NET Core (backend).

## Features

- **Interactive Assessment Interface**: User-friendly interface for taking assessments
- **Multiple Question Types**: Supports multiple choice, numeric, text, and calculation questions
- **Real-time Scoring**: Automatic evaluation and scoring of answers
- **Detailed Results**: Comprehensive results page showing performance breakdown
- **Modern UI**: Beautiful, responsive design with smooth user experience

## Project Structure

```
gold-pey-ltd/
├── frontend/          # Angular application
│   ├── src/
│   │   └── app/
│   │       ├── assessment/    # Assessment taking component
│   │       ├── home/          # Home page component
│   │       ├── results/       # Results display component
│   │       ├── models/        # TypeScript models
│   │       └── services/      # API service
│   └── package.json
│
└── backend/           # ASP.NET Core Web API
    ├── Controllers/   # API controllers
    ├── Models/        # C# models
    ├── Services/      # Business logic
    └── Program.cs
```

## Getting Started

### Prerequisites

- **Frontend**: Node.js (v18+) and npm
- **Backend**: .NET 8.0 SDK

### Running the Application

#### 1. Start the Backend

```bash
cd backend
dotnet restore
dotnet run
```

The backend will run on `https://localhost:7000`

#### 2. Start the Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:4200`

#### 3. Access the Application

Open your browser and navigate to `http://localhost:4200`

## Assessment Features

The default assessment includes questions covering:

- Financial Ratios (Current Ratio, ROE, etc.)
- Valuation Methods (DCF, Comparables)
- Financial Statements (Balance Sheet, Income Statement)
- Financial Metrics (EBITDA, Operating Margin)
- Financial Concepts (Working Capital, Cash Flow)

## API Documentation

When the backend is running, you can access Swagger UI at:
`https://localhost:7000/swagger`

## Development

### Frontend Development

- Framework: Angular 17
- Language: TypeScript
- Styling: CSS with CSS Variables

### Backend Development

- Framework: ASP.NET Core 8.0
- Language: C#
- API Style: RESTful

## License

This project is created for Gold Pey Ltd.

