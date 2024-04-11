// Importando os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-nao-encontrada', // Seletor do componente
  templateUrl: './nao-encontrada.component.html', // URL do template HTML do componente
  styleUrls: ['./nao-encontrada.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class NaoEncontradaComponent implements OnInit {
  // Construtor do componente
  constructor() { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
  }
}
