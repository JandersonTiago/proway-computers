// Importando os módulos necessários do Angular para roteamento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando o componente para rota de página não encontrada
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

// Definindo as rotas principais da aplicação
const routes: Routes = [
  // Rota para a funcionalidade de produtos, carregando o módulo de produtos sob demanda
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  // Rota vazia que redireciona para a rota de produtos como padrão
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  // Rota para a funcionalidade de carrinho, carregando o módulo de carrinho sob demanda
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  // Rota para a funcionalidade de contato, carregando o módulo de contato sob demanda
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  // Rota para qualquer outra rota não definida, redirecionando para a página não encontrada
  { path: "**", component: NaoEncontradaComponent }
];

// Decorador NgModule que define metadados do módulo de roteamento principal
@NgModule({
  // Importando as rotas definidas para o roteador principal da aplicação
  imports: [
    RouterModule.forRoot(routes)
  ],
  // Exportando o módulo de roteamento para que ele possa ser importado por outros módulos
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { } // Definindo o módulo de roteamento principal
