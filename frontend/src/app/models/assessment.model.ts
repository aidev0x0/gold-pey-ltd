export interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number;
  createdAt: Date;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer?: string | number;
  points: number;
  category: string;
}

export enum QuestionType {
  MultipleChoice = 'MultipleChoice',
  Numeric = 'Numeric',
  Text = 'Text',
  Calculation = 'Calculation'
}

export interface AssessmentSubmission {
  assessmentId: string;
  candidateName: string;
  candidateEmail: string;
  answers: Answer[];
  submittedAt: Date;
}

export interface Answer {
  questionId: string;
  value: string | number;
}

export interface AssessmentResult {
  id: string;
  assessmentId: string;
  candidateName: string;
  candidateEmail: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  submittedAt: Date;
  questionResults: QuestionResult[];
}

export interface QuestionResult {
  questionId: string;
  questionText: string;
  userAnswer: string | number;
  correctAnswer?: string | number;
  isCorrect: boolean;
  points: number;
  maxPoints: number;
}

