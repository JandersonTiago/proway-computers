// Importando a função 'enableProdMode' do módulo '@angular/core'
import { enableProdMode } from '@angular/core';
// Importando a função 'platformBrowserDynamic' do módulo '@angular/platform-browser-dynamic'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importando o módulo principal da aplicação ('AppModule') do arquivo './app/app.module'
import { AppModule } from './app/app.module';
// Importando as configurações de ambiente da aplicação do arquivo './environments/environment'
import { environment } from './environments/environment';

// Se a aplicação estiver em modo de produção, ativa o modo de produção
if (environment.production) {
  enableProdMode();
}

// Inicializa o módulo da aplicação usando o compilador de templates do navegador
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Captura e imprime qualquer erro ocorrido durante a inicialização
