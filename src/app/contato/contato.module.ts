// Importando o módulo NgModule do Angular
import { NgModule } from '@angular/core';
// Importando o módulo CommonModule do Angular para diretivas comuns
import { CommonModule } from '@angular/common';

// Importando o módulo de roteamento do contato
import { ContatoRoutingModule } from './contato-routing.module';
// Importando o componente ContatoComponent que será declarado neste módulo
import { ContatoComponent } from './contato.component';
// Importando o módulo ReactiveFormsModule do Angular para formulários reativos
import { ReactiveFormsModule } from '@angular/forms';
// Importando o módulo NgxMaskModule para uso de máscaras nos campos de formulário
import { NgxMaskModule } from 'ngx-mask';

// Decorador NgModule que define metadados do módulo
@NgModule({
  // Declarando os componentes pertencentes a este módulo
  declarations: [
    ContatoComponent // Declarando o componente ContatoComponent
  ],
  // Importando os módulos necessários para este módulo
  imports: [
    CommonModule, // Importando o CommonModule para diretivas comuns
    ContatoRoutingModule, // Importando o módulo de roteamento do contato
    ReactiveFormsModule, // Importando o ReactiveFormsModule para formulários reativos
    NgxMaskModule.forRoot(), // Importando o NgxMaskModule para uso de máscaras nos campos de formulário
  ]
})
export class ContatoModule { } // Definindo o módulo do contato
