// Importando o módulo NgModule do Angular
import { NgModule } from '@angular/core';
// Importando o módulo CommonModule do Angular para diretivas comuns
import { CommonModule } from '@angular/common';

// Importando o módulo de roteamento do carrinho
import { CarrinhoRoutingModule } from './carrinho-routing.module';
// Importando o componente CarrinhoComponent que será declarado neste módulo
import { CarrinhoComponent } from './carrinho.component';
// Importando o módulo FormsModule do Angular para suporte a formulários
import { FormsModule } from '@angular/forms';

// Decorador NgModule que define metadados do módulo
@NgModule({
  // Declarando os componentes pertencentes a este módulo
  declarations: [
    CarrinhoComponent // Declarando o componente CarrinhoComponent
  ],
  // Importando os módulos necessários para este módulo
  imports: [
    CommonModule, // Importando o CommonModule para diretivas comuns
    CarrinhoRoutingModule, // Importando o módulo de roteamento do carrinho
    FormsModule // Importando o FormsModule para suporte a formulários
  ]
})
export class CarrinhoModule { } // Definindo o módulo do carrinho
