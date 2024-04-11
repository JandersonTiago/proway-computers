// Importando o módulo Injectable do Angular
import { Injectable } from '@angular/core';
// Importando a interface IProdutoCarrinho
import { IProdutoCarrinho } from './produtos';

// Decorador Injectable que permite a injeção de dependência deste serviço em outros componentes ou serviços
@Injectable({
  providedIn: 'root' // Especificando que este serviço será fornecido em nível de raiz (root) da aplicação
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = []; // Array para armazenar os itens do carrinho de compras

  // Construtor do serviço
  constructor() { }

  // Método para obter os itens do carrinho de compras do armazenamento local
  obtemCarrinho() {
    // Obtendo os itens do carrinho de compras do armazenamento local e convertendo de volta para um array
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens; // Retornando os itens do carrinho
  }

  // Método para adicionar um produto ao carrinho de compras
  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    // Verificando se o produto já está no carrinho com base no seu ID
    const produtoExistente = this.itens.find(item => item.id === produto.id);
    if (produtoExistente) {
        // Se o produto já estiver no carrinho, você pode aumentar a quantidade ou fazer outra ação, como emitir um aviso
        console.log('Produto já está no carrinho');
    } else {
        // Se o produto não estiver no carrinho, ele é adicionado ao array de itens e atualizado no armazenamento local
        this.itens.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }
  }

  // Método para remover um produto do carrinho de compras com base no seu ID
  removerProdutoCarrinho(produtoId: number){
    // Filtrando os itens do carrinho para remover o produto com o ID fornecido
    this.itens= this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); // Atualizando o carrinho no armazenamento local
  }

  // Método para limpar todo o carrinho de compras
  limparCarrinho(){
    this.itens = []; // Limpando o array de itens do carrinho
    localStorage.clear(); // Limpando o armazenamento local
  }
}
