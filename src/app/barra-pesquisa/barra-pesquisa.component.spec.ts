// Importando as funções necessárias para testes unitários do Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importando o componente que será testado
import { BarraPesquisaComponent } from './barra-pesquisa.component';

// Descrevendo o teste para o componente BarraPesquisaComponent
describe('BarraPesquisaComponent', () => {
  // Declarando variáveis para o componente e seu fixture (contexto de teste)
  let component: BarraPesquisaComponent;
  let fixture: ComponentFixture<BarraPesquisaComponent>;

  // Antes de cada teste assíncrono, configura o ambiente de teste
  beforeEach(async () => {
    // Configurando o módulo de teste
    await TestBed.configureTestingModule({
      declarations: [ BarraPesquisaComponent ] // Declarando o componente a ser testado
    })
    .compileComponents(); // Compilando os componentes do módulo de teste

    // Criando o fixture para o componente e obtendo uma instância do componente
    fixture = TestBed.createComponent(BarraPesquisaComponent);
    component = fixture.componentInstance;
    // Detectando mudanças no componente
    fixture.detectChanges();
  });

  // Teste: verifica se o componente foi criado com sucesso
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera-se que o componente seja verdadeiro (existente)
  });
});
