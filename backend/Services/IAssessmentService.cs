using FinancialAnalystAssessment.Models;

namespace FinancialAnalystAssessment.Services;

public interface IAssessmentService
{
    Assessment GetDefaultAssessment();
    Assessment? GetAssessment(string id);
    AssessmentResult SubmitAssessment(AssessmentSubmission submission);
    AssessmentResult? GetResult(string id);
}

