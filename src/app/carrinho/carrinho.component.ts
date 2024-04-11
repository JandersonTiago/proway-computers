// Importando os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service'; // Importando o serviço CarrinhoService
import { IProdutoCarrinho } from '../produtos'; // Importando a interface IProdutoCarrinho
import { Router } from '@angular/router'; // Importando o módulo de roteamento do Angular

// Decorador Component que define metadados do componente
@Component({
  selector: 'app-carrinho', // Seletor do componente
  templateUrl: './carrinho.component.html', // URL do template HTML do componente
  styleUrls: ['./carrinho.component.css'] // URLs dos arquivos de estilo CSS do componente
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = []; // Array para armazenar os itens do carrinho
  total = 0; // Variável para armazenar o total do carrinho

  // Construtor do componente que injeta o serviço CarrinhoService e o serviço de roteamento (Router)
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
    // Obtém os itens do carrinho do serviço CarrinhoService
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    // Calcula o total do carrinho
    this.calculaTotal();
  }

  // Método para calcular o total do carrinho
  calculaTotal(){
    // Utiliza o método reduce para somar os preços dos itens do carrinho
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  // Método para remover um produto do carrinho
  removerProdutoCarrinho(produtoId: number){
    // Filtra os itens do carrinho, removendo o item com o ID correspondente
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    // Remove o produto do carrinho no serviço CarrinhoService
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    // Recalcula o total do carrinho
    this.calculaTotal();
  }

  // Método para finalizar a compra
  comprar(){
    // Exibe um alerta informando que a compra foi finalizada
    alert("Parabéns, você finalizou sua compra!");
    // Limpa o carrinho utilizando o método limparCarrinho do serviço CarrinhoService
    this.carrinhoService.limparCarrinho();
    // Navega para a rota 'produtos' utilizando o serviço de roteamento (Router)
    this.router.navigate(["produtos"]);
  }
}
