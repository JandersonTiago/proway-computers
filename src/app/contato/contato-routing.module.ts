// Importando os módulos necessários do Angular para roteamento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando o componente ContatoComponent que será associado à rota
import { ContatoComponent } from './contato.component';

// Definindo as rotas para o módulo de contato
const routes: Routes = [
  { path: '', component: ContatoComponent } // Rota padrão que direciona para o componente ContatoComponent
];

@NgModule({
  // Configurando o módulo de roteamento com as rotas definidas
  imports: [RouterModule.forChild(routes)],
  // Exportando o módulo de roteamento para que ele possa ser importado por outros módulos
  exports: [RouterModule]
})
export class ContatoRoutingModule { } // Definindo o módulo de roteamento do contato
