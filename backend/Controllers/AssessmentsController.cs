using Microsoft.AspNetCore.Mvc;
using FinancialAnalystAssessment.Models;
using FinancialAnalystAssessment.Services;

namespace FinancialAnalystAssessment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssessmentsController : ControllerBase
{
    private readonly IAssessmentService _assessmentService;

    public AssessmentsController(IAssessmentService assessmentService)
    {
        _assessmentService = assessmentService;
    }

    [HttpGet("default")]
    public IActionResult GetDefaultAssessment()
    {
        var assessment = _assessmentService.GetDefaultAssessment();
        return Ok(assessment);
    }

    [HttpGet("{id}")]
    public IActionResult GetAssessment(string id)
    {
        var assessment = _assessmentService.GetAssessment(id);
        if (assessment == null)
        {
            return NotFound(new { message = "Assessment not found" });
        }
        return Ok(assessment);
    }

    [HttpPost("submit")]
    public IActionResult SubmitAssessment([FromBody] AssessmentSubmission submission)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var result = _assessmentService.SubmitAssessment(submission);
            return Ok(result);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred while processing the assessment", error = ex.Message });
        }
    }

    [HttpGet("results/{id}")]
    public IActionResult GetResult(string id)
    {
        var result = _assessmentService.GetResult(id);
        if (result == null)
        {
            return NotFound(new { message = "Result not found" });
        }
        return Ok(result);
    }
}

