// Importando o módulo Injectable do Angular
import { Injectable } from '@angular/core';
// Importando a interface IProduto e a lista de produtos do arquivo produtos.ts
import { IProduto, produtos } from './produtos';

// Decorador Injectable que permite a injeção de dependência deste serviço em outros componentes ou serviços
@Injectable({
  providedIn: 'root' // Especificando que este serviço será fornecido em nível de raiz (root) da aplicação
})
export class ProdutosService {
  produtos: IProduto[] = produtos; // Array de produtos, inicializado com a lista de produtos

  // Construtor do serviço
  constructor() { }

  // Método para obter todos os produtos
  getAll(){
    return this.produtos; // Retorna a lista completa de produtos
  }

  // Método para obter um produto específico com base no seu ID
  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id === produtoId); // Retorna o produto com o ID fornecido
  }
}
