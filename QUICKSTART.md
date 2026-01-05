# Quick Start Guide

## Prerequisites

1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **.NET 8.0 SDK** - [Download](https://dotnet.microsoft.com/download)

## Step-by-Step Setup

### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 2. Install Backend Dependencies

```bash
cd ../backend
dotnet restore
```

### 3. Start the Backend Server

In the `backend` directory:

```bash
dotnet run
```

The backend will start on:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:7000`
- Swagger UI: `https://localhost:7000/swagger`

### 4. Start the Frontend Server

Open a **new terminal** and navigate to the `frontend` directory:

```bash
cd frontend
npm start
```

The frontend will start on `http://localhost:4200`

### 5. Access the Application

Open your browser and go to: **http://localhost:4200**

## Troubleshooting

### Backend won't start
- Make sure port 5000 and 7000 are not in use
- Check that .NET 8.0 SDK is installed: `dotnet --version`

### Frontend won't start
- Make sure Node.js is installed: `node --version`
- Try deleting `node_modules` and running `npm install` again

### CORS errors
- Make sure the backend is running before starting the frontend
- Check that the API URL in `frontend/src/app/services/assessment.service.ts` matches your backend URL

### API connection issues
- Verify the backend is running and accessible at `http://localhost:5000`
- Check the browser console for detailed error messages

## Testing the Application

1. Navigate to the home page
2. Click "Start Assessment"
3. Fill in your name and email
4. Answer the 8 financial analyst questions
5. Submit the assessment
6. View your results with detailed scoring

## Next Steps

- Customize questions in `backend/Services/AssessmentService.cs`
- Modify the UI styling in `frontend/src/styles.css`
- Add more question types or features as needed

