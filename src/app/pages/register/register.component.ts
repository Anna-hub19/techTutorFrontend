import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    const loginData = {
      userName: this.username,
      pasword: this.password
    };

    // Substitua com a URL da sua API de login
    this.http.post('http://localhost:5000/api/login', loginData)
      .subscribe(
        (response: any) => {
          if (response && response.success) {
            this.router.navigate(['/dashboard']); // Roteia para o dashboard após login bem-sucedido
          } else {
            this.errorMessage = 'Usuário ou senha inválidos.';
          }
        },
        (error) => {
          this.errorMessage = 'Erro ao tentar fazer login. Tente novamente.';
        }
      );
  }
}
