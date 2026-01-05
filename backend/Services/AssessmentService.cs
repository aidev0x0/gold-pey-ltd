using FinancialAnalystAssessment.Models;
using System.Text.Json;

namespace FinancialAnalystAssessment.Services;

public class AssessmentService : IAssessmentService
{
    private readonly Dictionary<string, AssessmentResult> _results = new();
    private readonly Assessment _defaultAssessment;

    public AssessmentService()
    {
        _defaultAssessment = CreateDefaultAssessment();
    }

    public Assessment GetDefaultAssessment()
    {
        return _defaultAssessment;
    }

    public Assessment? GetAssessment(string id)
    {
        if (id == _defaultAssessment.Id)
        {
            return _defaultAssessment;
        }
        return null;
    }

    public AssessmentResult SubmitAssessment(AssessmentSubmission submission)
    {
        var assessment = GetAssessment(submission.AssessmentId);
        if (assessment == null)
        {
            throw new ArgumentException("Assessment not found");
        }

        var questionResults = new List<QuestionResult>();
        double totalScore = 0;
        double maxScore = 0;

        foreach (var question in assessment.Questions)
        {
            maxScore += question.Points;
            var userAnswer = submission.Answers.FirstOrDefault(a => a.QuestionId == question.Id);
            
            var questionResult = new QuestionResult
            {
                QuestionId = question.Id,
                QuestionText = question.Text,
                UserAnswer = userAnswer?.Value ?? string.Empty,
                CorrectAnswer = question.CorrectAnswer,
                MaxPoints = question.Points
            };

            // Evaluate answer
            bool isCorrect = EvaluateAnswer(question, userAnswer?.Value);
            questionResult.IsCorrect = isCorrect;
            questionResult.Points = isCorrect ? question.Points : 0;
            totalScore += questionResult.Points;

            questionResults.Add(questionResult);
        }

        var result = new AssessmentResult
        {
            Id = Guid.NewGuid().ToString(),
            AssessmentId = submission.AssessmentId,
            CandidateName = submission.CandidateName,
            CandidateEmail = submission.CandidateEmail,
            TotalScore = totalScore,
            MaxScore = maxScore,
            Percentage = maxScore > 0 ? Math.Round((totalScore / maxScore) * 100, 2) : 0,
            SubmittedAt = submission.SubmittedAt,
            QuestionResults = questionResults
        };

        _results[result.Id] = result;
        return result;
    }

    public AssessmentResult? GetResult(string id)
    {
        return _results.TryGetValue(id, out var result) ? result : null;
    }

    private bool EvaluateAnswer(Question question, object? userAnswer)
    {
        if (userAnswer == null || question.CorrectAnswer == null)
        {
            return false;
        }

        switch (question.Type)
        {
            case QuestionType.MultipleChoice:
                return string.Equals(
                    userAnswer.ToString()?.Trim(),
                    question.CorrectAnswer.ToString()?.Trim(),
                    StringComparison.OrdinalIgnoreCase
                );

            case QuestionType.Numeric:
                if (double.TryParse(userAnswer.ToString(), out double userNum) &&
                    double.TryParse(question.CorrectAnswer.ToString(), out double correctNum))
                {
                    // Allow 1% tolerance for numeric answers
                    double tolerance = Math.Abs(correctNum * 0.01);
                    return Math.Abs(userNum - correctNum) <= tolerance;
                }
                return false;

            case QuestionType.Text:
            case QuestionType.Calculation:
                // For text and calculation questions, check for key terms or exact match
                var userText = userAnswer.ToString()?.Trim().ToLower() ?? string.Empty;
                var correctText = question.CorrectAnswer.ToString()?.Trim().ToLower() ?? string.Empty;
                
                // Exact match
                if (userText == correctText)
                {
                    return true;
                }

                // For calculation questions, try to parse as numbers
                if (question.Type == QuestionType.Calculation)
                {
                    if (double.TryParse(userText, out double userCalc) &&
                        double.TryParse(correctText, out double correctCalc))
                    {
                        double tolerance = Math.Abs(correctCalc * 0.01);
                        return Math.Abs(userCalc - correctCalc) <= tolerance;
                    }
                }

                // Partial match for text (contains key terms)
                return userText.Contains(correctText) || correctText.Contains(userText);

            default:
                return false;
        }
    }

    private Assessment CreateDefaultAssessment()
    {
        return new Assessment
        {
            Id = "default-assessment-001",
            Title = "Financial Analyst Skills Assessment",
            Description = "This assessment evaluates your knowledge and skills in financial analysis, including financial statement analysis, ratio calculations, valuation methods, and data interpretation.",
            CreatedAt = DateTime.UtcNow,
            Questions = new List<Question>
            {
                new Question
                {
                    Id = "q1",
                    Type = QuestionType.MultipleChoice,
                    Text = "What is the formula for calculating the Current Ratio?",
                    Options = new List<string>
                    {
                        "Current Assets / Current Liabilities",
                        "Current Liabilities / Current Assets",
                        "Total Assets / Total Liabilities",
                        "Net Income / Total Assets"
                    },
                    CorrectAnswer = "Current Assets / Current Liabilities",
                    Points = 10,
                    Category = "Financial Ratios"
                },
                new Question
                {
                    Id = "q2",
                    Type = QuestionType.MultipleChoice,
                    Text = "Which valuation method uses projected future cash flows discounted to present value?",
                    Options = new List<string>
                    {
                        "Comparable Company Analysis",
                        "Discounted Cash Flow (DCF)",
                        "Asset-Based Valuation",
                        "Market Multiple Method"
                    },
                    CorrectAnswer = "Discounted Cash Flow (DCF)",
                    Points = 10,
                    Category = "Valuation"
                },
                new Question
                {
                    Id = "q3",
                    Type = QuestionType.Numeric,
                    Text = "A company has Current Assets of $500,000 and Current Liabilities of $250,000. What is the Current Ratio? (Round to 2 decimal places)",
                    CorrectAnswer = 2.0,
                    Points = 15,
                    Category = "Financial Ratios"
                },
                new Question
                {
                    Id = "q4",
                    Type = QuestionType.MultipleChoice,
                    Text = "What does EBITDA stand for?",
                    Options = new List<string>
                    {
                        "Earnings Before Interest, Taxes, Depreciation, and Amortization",
                        "Earnings Before Interest and Taxes",
                        "Earnings Before Depreciation and Amortization",
                        "Earnings Before Tax Deductions"
                    },
                    CorrectAnswer = "Earnings Before Interest, Taxes, Depreciation, and Amortization",
                    Points = 10,
                    Category = "Financial Metrics"
                },
                new Question
                {
                    Id = "q5",
                    Type = QuestionType.Calculation,
                    Text = "A company has Revenue of $1,000,000, Cost of Goods Sold of $600,000, and Operating Expenses of $200,000. Calculate the Operating Profit Margin as a percentage. (Enter the percentage value, e.g., 20 for 20%)",
                    CorrectAnswer = 20.0,
                    Points = 15,
                    Category = "Profitability Analysis"
                },
                new Question
                {
                    Id = "q6",
                    Type = QuestionType.MultipleChoice,
                    Text = "Which financial statement shows a company's financial position at a specific point in time?",
                    Options = new List<string>
                    {
                        "Income Statement",
                        "Balance Sheet",
                        "Cash Flow Statement",
                        "Statement of Retained Earnings"
                    },
                    CorrectAnswer = "Balance Sheet",
                    Points = 10,
                    Category = "Financial Statements"
                },
                new Question
                {
                    Id = "q7",
                    Type = QuestionType.Numeric,
                    Text = "If a company's Net Income is $150,000 and Total Shareholders' Equity is $1,000,000, what is the Return on Equity (ROE) as a percentage? (Enter the percentage value, e.g., 15 for 15%)",
                    CorrectAnswer = 15.0,
                    Points = 15,
                    Category = "Financial Ratios"
                },
                new Question
                {
                    Id = "q8",
                    Type = QuestionType.Text,
                    Text = "Explain the difference between working capital and cash flow in one sentence.",
                    CorrectAnswer = "Working capital is the difference between current assets and current liabilities, representing short-term liquidity, while cash flow shows the actual movement of cash in and out of the business over a period.",
                    Points = 15,
                    Category = "Financial Concepts"
                }
            }
        };
    }
}

