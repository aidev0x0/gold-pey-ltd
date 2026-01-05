namespace FinancialAnalystAssessment.Models;

public class Assessment
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<Question> Questions { get; set; } = new();
    public int? TimeLimit { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class Question
{
    public string Id { get; set; } = string.Empty;
    public QuestionType Type { get; set; }
    public string Text { get; set; } = string.Empty;
    public List<string>? Options { get; set; }
    public object? CorrectAnswer { get; set; }
    public int Points { get; set; }
    public string Category { get; set; } = string.Empty;
}

public enum QuestionType
{
    MultipleChoice,
    Numeric,
    Text,
    Calculation
}

public class AssessmentSubmission
{
    public string AssessmentId { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string CandidateEmail { get; set; } = string.Empty;
    public List<Answer> Answers { get; set; } = new();
    public DateTime SubmittedAt { get; set; }
}

public class Answer
{
    public string QuestionId { get; set; } = string.Empty;
    public object Value { get; set; } = string.Empty;
}

public class AssessmentResult
{
    public string Id { get; set; } = string.Empty;
    public string AssessmentId { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string CandidateEmail { get; set; } = string.Empty;
    public double TotalScore { get; set; }
    public double MaxScore { get; set; }
    public double Percentage { get; set; }
    public DateTime SubmittedAt { get; set; }
    public List<QuestionResult> QuestionResults { get; set; } = new();
}

public class QuestionResult
{
    public string QuestionId { get; set; } = string.Empty;
    public string QuestionText { get; set; } = string.Empty;
    public object UserAnswer { get; set; } = string.Empty;
    public object? CorrectAnswer { get; set; }
    public bool IsCorrect { get; set; }
    public double Points { get; set; }
    public double MaxPoints { get; set; }
}

