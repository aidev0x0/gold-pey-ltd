using FinancialAnalystAssessment.Models;

namespace FinancialAnalystAssessment.Services;

public interface IAuthService
{
    Task<AuthResponse?> RegisterAsync(RegisterRequest request);
    Task<AuthResponse?> LoginAsync(LoginRequest request);
    User? GetUserById(string userId);
}
