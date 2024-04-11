// Importando o módulo NgModule do Angular
import { NgModule } from '@angular/core';
// Importando o módulo CommonModule do Angular para diretivas comuns
import { CommonModule } from '@angular/common';

// Importando o módulo de roteamento de produtos
import { ProdutosRoutingModule } from './produtos-routing.module';
// Importando o componente ProdutosComponent que será declarado neste módulo
import { ProdutosComponent } from './produtos.component';
// Importando o componente DetalhesProdutosComponent que será declarado neste módulo
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
// Importando o módulo FormsModule do Angular para suporte a formulários
import { FormsModule } from '@angular/forms';

// Decorador NgModule que define metadados do módulo
@NgModule({
  // Declarando os componentes pertencentes a este módulo
  declarations: [
    ProdutosComponent, // Declarando o componente ProdutosComponent
    DetalhesProdutosComponent // Declarando o componente DetalhesProdutosComponent
  ],
  // Importando os módulos necessários para este módulo
  imports: [
    CommonModule, // Importando o CommonModule para diretivas comuns
    ProdutosRoutingModule, // Importando o módulo de roteamento de produtos
    FormsModule // Importando o FormsModule para suporte a formulários
  ]
})
export class ProdutosModule { } // Definindo o módulo de produtos
