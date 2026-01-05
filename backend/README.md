# Financial Analyst Assessment - Backend

ASP.NET Core Web API backend for the Financial Analyst Assessment platform.

## Prerequisites

- .NET 8.0 SDK or higher
- Visual Studio 2022, VS Code, or any IDE with .NET support

## Running the Application

### Using .NET CLI

```bash
cd backend
dotnet restore
dotnet run
```

The API will be available at:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:7000`
- Swagger UI: `https://localhost:7000/swagger`

### Using Visual Studio

1. Open `FinancialAnalystAssessment.csproj`
2. Press F5 to run

## API Endpoints

- `GET /api/assessments/default` - Get the default assessment
- `GET /api/assessments/{id}` - Get a specific assessment by ID
- `POST /api/assessments/submit` - Submit an assessment
- `GET /api/assessments/results/{id}` - Get assessment results by result ID

## Configuration

The CORS policy is configured to allow requests from `http://localhost:4200` (Angular dev server). Update `Program.cs` if you need to change this.

