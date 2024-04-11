// Importando os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos'; // Importando a interface IProduto
import { ProdutosService } from '../produtos.service'; // Importando o serviço ProdutosService
import { ActivatedRoute } from '@angular/router'; // Importando o módulo ActivatedRoute do Angular para obter parâmetros de consulta

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-produtos', // Seletor do componente
  templateUrl: './produtos.component.html', // URL do template HTML do componente
  styleUrls: ['./produtos.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined; // Array para armazenar os produtos

  // Construtor do componente que injeta o serviço ProdutosService e o ActivatedRoute
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }
    
  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
    // Obtendo todos os produtos do serviço ProdutosService
    const produtos = this.produtosService.getAll();

    // Subscrevendo os parâmetros de consulta da rota
    this.route.queryParamMap.subscribe(params => {
      // Obtendo o parâmetro de consulta 'descricao' e convertendo para minúsculas
      const descricao = params.get("descricao")?.toLowerCase();

      // Verificando se o parâmetro de consulta 'descricao' está presente
      if (descricao) {
        // Filtrando os produtos cuja descrição inclui a descrição fornecida
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      // Se não houver parâmetro de consulta 'descricao', exibe todos os produtos
      this.produtos = produtos;
    });
  }
}
