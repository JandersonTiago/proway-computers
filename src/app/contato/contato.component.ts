// Importando os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; // Importando FormBuilder e Validators para lidar com formulários reativos

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-contato', // Seletor do componente
  templateUrl: './contato.component.html', // URL do template HTML do componente
  styleUrls: ['./contato.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class ContatoComponent implements OnInit {
  // Definindo o formulário de contato usando FormBuilder
  formContato = this.fb.group({
    // Definindo os campos do formulário com as respectivas validações
    nome: ["", [
      Validators.minLength(4), // Validador de comprimento mínimo para o nome (mínimo de 4 caracteres)
      Validators.required // Validador de campo obrigatório
    ]],
    assunto: ["", [
      Validators.minLength(10), // Validador de comprimento mínimo para o assunto (mínimo de 10 caracteres)
      Validators.required // Validador de campo obrigatório
    ]],
    telefone: ["", [
      Validators.minLength(11), // Validador de comprimento mínimo para o telefone (mínimo de 11 caracteres)
      Validators.required // Validador de campo obrigatório
    ]],
    email: ["", [
      Validators.email, // Validador de email
      Validators.required // Validador de campo obrigatório
    ]],
    mensagem: ["", [
      Validators.minLength(20), // Validador de comprimento mínimo para a mensagem (mínimo de 20 caracteres)
      Validators.required // Validador de campo obrigatório
    ]]
  });

  // Construtor do componente que injeta o FormBuilder
  constructor(
    private fb: FormBuilder
  ) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
  }

  // Método para enviar o formulário
  enviarFormulario(){
    // Exibe um alerta informando que o formulário foi enviado com sucesso
    alert("O formulário foi enviado com sucesso!");
    // Reseta o formulário para os valores padrão
    this.formContato.reset();
  }
}
