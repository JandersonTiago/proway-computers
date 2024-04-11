// Importando os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-footer', // Seletor do componente
  templateUrl: './footer.component.html', // URL do template HTML do componente
  styleUrls: ['./footer.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class FooterComponent implements OnInit {
  // Construtor do componente
  constructor() { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
  }
}
