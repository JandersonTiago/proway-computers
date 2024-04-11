// Importando os módulos necessários do Angular para roteamento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando o componente CarrinhoComponent que será associado à rota
import { CarrinhoComponent } from './carrinho.component';

// Definindo as rotas para o módulo de carrinho
const routes: Routes = [
  { path: '', component: CarrinhoComponent } // Rota padrão que direciona para o componente CarrinhoComponent
];

@NgModule({
  // Configurando o módulo de roteamento com as rotas definidas
  imports: [RouterModule.forChild(routes)],
  // Exportando o módulo de roteamento para que ele possa ser importado por outros módulos
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { } // Definindo o módulo de roteamento do carrinho
