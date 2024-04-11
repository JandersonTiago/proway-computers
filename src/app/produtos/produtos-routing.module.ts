// Importando os módulos necessários do Angular para roteamento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando os componentes que serão associados às rotas
import { ProdutosComponent } from './produtos.component'; // Componente que exibe a lista de produtos
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component'; // Componente que exibe os detalhes de um produto

// Definindo as rotas para a funcionalidade de produtos
const routes: Routes = [
  { path: '', component: ProdutosComponent }, // Rota padrão que direciona para o componente ProdutosComponent
  { path: ':id', component: DetalhesProdutosComponent } // Rota para exibir os detalhes de um produto com base no ID
];

// Decorador NgModule que define metadados do módulo de roteamento de produtos
@NgModule({
  // Configurando o módulo de roteamento com as rotas definidas
  imports: [RouterModule.forChild(routes)],
  // Exportando o módulo de roteamento para que ele possa ser importado por outros módulos
  exports: [RouterModule]
})
export class ProdutosRoutingModule { } // Definindo o módulo de roteamento de produtos
