import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface QuizApiResponse {
  results: Array<{
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }>;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = []; // Para armazenar as perguntas
  currentQuestionIndex: number = 0; // Para rastrear a pergunta atual
  selectedAnswer: any = null; // Para armazenar a resposta selecionada
  score: number = 0; // Para armazenar a pontuação
  isCorrect: boolean | null = null;
  isAnswerSubmitted: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  // Função para buscar as perguntas da API
  getQuestions(): void {
    this.http.get<QuizApiResponse>('https://opentdb.com/api.php?amount=10&category=18&type=multiple&lang=pt-br').subscribe(data => {
      this.questions = data.results; // Armazena as perguntas na variável 'questions'
    });
  }

  // Função para mover para a próxima pergunta
   nextQuestion(): void {
    if (this.selectedAnswer !== null) {
      if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correct_answer) {
        this.score++;
        this.isCorrect = true; // Resposta correta
      } else {
        this.isCorrect = false; // Resposta incorreta
      }
      this.isAnswerSubmitted = true; // Marca que a resposta foi submetida
    }
  }
  moveToNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.isCorrect = null;
      this.isAnswerSubmitted = false; // Reseta a variáveis para a próxima pergunta
    }
  }
}
