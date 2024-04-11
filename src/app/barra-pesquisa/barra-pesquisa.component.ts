// Importando os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-barra-pesquisa', // Seletor do componente
  templateUrl: './barra-pesquisa.component.html', // URL do template HTML do componente
  styleUrls: ['./barra-pesquisa.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class BarraPesquisaComponent implements OnInit {
  descricao = ""; // Variável para armazenar a descrição da pesquisa

  // Construtor do componente que injeta o serviço de roteamento (Router)
  constructor(
    private router: Router
  ) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
  }

  // Método para realizar a pesquisa
  pesquisar(){
    if (this.descricao){ // Verifica se a descrição da pesquisa não está vazia
      // Navega para a rota 'produtos' com parâmetros de consulta (queryParams) contendo a descrição da pesquisa
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}});
      return; // Retorna para evitar a execução do código abaixo
    }

    // Se a descrição da pesquisa estiver vazia, navega para a rota 'produtos' sem parâmetros de consulta
    this.router.navigate(["produtos"]);
  }
}
