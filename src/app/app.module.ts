// Importando os módulos necessários do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

// Importando os componentes principais da aplicação
import { AppComponent } from './app.component'; // Componente raiz da aplicação
import { HeaderComponent } from './header/header.component'; // Componente do cabeçalho
import { FooterComponent } from './footer/footer.component'; // Componente do rodapé
import { AppRoutingModule } from './app-routing.module'; // Módulo de roteamento principal
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component'; // Componente para página não encontrada
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component'; // Componente da barra de pesquisa

// Decorador NgModule que define metadados do módulo principal da aplicação
@NgModule({
  // Declarando os componentes pertencentes a este módulo
  declarations: [
    AppComponent, // Componente raiz da aplicação
    HeaderComponent, // Componente do cabeçalho
    FooterComponent, // Componente do rodapé
    NaoEncontradaComponent, // Componente para página não encontrada
    BarraPesquisaComponent // Componente da barra de pesquisa
  ],
  // Importando os módulos necessários para este módulo
  imports: [
    BrowserModule, // Módulo do navegador para renderização da aplicação
    AppRoutingModule, // Módulo de roteamento principal da aplicação
    BrowserAnimationsModule, // Módulo para animações na aplicação
    MatSnackBarModule, // Módulo para exibir notificações de snack-bar
    FormsModule // Módulo para suporte a formulários
  ],
  // Provedores de serviços disponíveis para toda a aplicação
  providers: [],
  // Componente raiz que será inicializado automaticamente quando a aplicação Angular for iniciada
  bootstrap: [AppComponent]
})
export class AppModule { } // Definindo o módulo principal da aplicação
