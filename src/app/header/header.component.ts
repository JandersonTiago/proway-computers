// Importando os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service'; // Importando o serviço CarrinhoService

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-header', // Seletor do componente
  templateUrl: './header.component.html', // URL do template HTML do componente
  styleUrls: ['./header.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class HeaderComponent implements OnInit {
  // Injetando o serviço CarrinhoService no componente
  constructor(
    public carrinhoService: CarrinhoService
  ) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
  }
}
