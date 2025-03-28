import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-searched',
  templateUrl: './ProgrammingFlashcards.component.html',
  styles: [`
    
  .card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px; /* Define a perspectiva para o efeito 3D */
  flex-direction: column; /* Alinha os itens verticalmente */
  height: 80vh; /* Ocupa 80% da altura da tela */
}

.card {
  width: 300px;
  height: 400px;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
}

.card.flip {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Esconde o verso quando o card vira */
  border-radius: 10px;
}

.card-front {
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
}

.card-back {
  background-color: #2ecc71;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-align: center;
  padding: 20px;
  transform: rotateY(180deg); /* Gira o verso do card */
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Estilo para os botões posicionados na parte inferior */
.card-navigation {
  display: flex;
  justify-content: space-between; /* Espaça os botões */
  width: 100%;
  position: absolute; /* Posiciona os botões fora do fluxo normal */
  bottom: 10px; /* Distância do fundo */
  left: 0;
  padding: 0 20px; /* Distância da borda esquerda e direita */
}

.card-navigation button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card-navigation button:hover {
  background-color: #2980b9;
}

.card-navigation button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

  
  `]
})

export class MostSearchedComponent implements OnInit {
  questions: any[] = []; // Para armazenar as perguntas
  showAnswer: boolean[] = []; // Controle de exibição das respostas
  showLoader: boolean = true; // Controle de carregamento
  currentCardIndex: number = 0; // Para armazenar o índice do card atual

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  // Função para buscar as perguntas da API
  getQuestions(): void {
    this.http.get<any>('https://opentdb.com/api.php?amount=10&category=18&type=multiple&lang=pt').subscribe(data => {
      this.questions = data.results; // Armazena as perguntas
      this.showAnswer = new Array(this.questions.length).fill(false); // Inicializa os controles de resposta
      this.showLoader = false;
    });
  }

  // Função para alternar a exibição da resposta e virar o card
  toggleAnswer(index: number): void {
    this.showAnswer[index] = !this.showAnswer[index];
  }

  // Função para ir para o próximo card
  nextCard(): void {
    if (this.currentCardIndex < this.questions.length - 1) {
      this.currentCardIndex++;
    }
  }

  // Função para ir para o card anterior
  prevCard(): void {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
    }
  }
}
