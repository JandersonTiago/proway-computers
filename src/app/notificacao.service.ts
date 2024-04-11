// Importando o módulo Injectable do Angular
import { Injectable } from '@angular/core';
// Importando o módulo MatSnackBar do Angular Material para exibir notificações de snack-bar
import { MatSnackBar } from '@angular/material/snack-bar';

// Decorador Injectable que permite a injeção de dependência deste serviço em outros componentes ou serviços
@Injectable({
  providedIn: 'root' // Especificando que este serviço será fornecido em nível de raiz (root) da aplicação
})
export class NotificacaoService {

  // Construtor do serviço, que injeta o MatSnackBar para exibir notificações de snack-bar
  constructor(
    private snackBar: MatSnackBar
  ) { }

  // Método para exibir uma notificação de snack-bar com a mensagem fornecida
  notificar(mensagem: string){
    // Abre uma notificação de snack-bar com a mensagem fornecida, botão "Ok" e outras configurações
    this.snackBar.open(mensagem, "Ok", {
      duration: 2000, // Duração da notificação em milissegundos (2 segundos)
      verticalPosition: "top", // Posição vertical da notificação (topo)
      horizontalPosition: "center" // Posição horizontal da notificação (centro)
    });
  }
}
