// Importando o módulo Component do Angular
import { Component } from '@angular/core';

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-root', // Seletor do componente
  templateUrl: './app.component.html', // URL do template HTML do componente
  styleUrls: ['./app.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class AppComponent {
  title = 'proway-computers'; // Propriedade que armazena o título da aplicação
}
