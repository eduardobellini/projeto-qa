# Projeto QA - Automação E2E com Cypress

Projeto de automação de testes end-to-end para o portal gov.br utilizando Cypress, Cucumber e BDD (Behavior-Driven Development).

## Tecnologias Utilizadas

- **Cypress**: Framework de automação de testes E2E
- **Cucumber**: Ferramenta para BDD e escrever testes em linguagem natural
- **Gherkin**: Linguagem para descrever cenários de teste
- **JavaScript**: Linguagem de implementação
- **Page Object Model**: Padrão de design para organização do código

## Estrutura do Projeto

```
cypress/
├── e2e/
│   └── features/              # Cenários de teste em Gherkin
│       └── buscaGov.feature
├── pages/                     # Page Object Model - representação das páginas
│   └── busca.page.js
├── steps/                     # Step definitions - implementação dos passos
│   └── busca.steps.js
├── fixtures/                  # Dados de teste
│   ├── dados.json
│   └── example.json
├── support/                   # Configurações de suporte
│   ├── commands.js
│   └── e2e.js
└── downloads/                 # Downloads dos testes

cypress.config.js             # Configuração do Cypress
package.json                  # Dependências do projeto
```

## Como Funciona

### 1. Estrutura BDD com Gherkin

Os testes são escritos em linguagem natural usando Gherkin no arquivo `.feature`:

```gherkin
Feature: Busca no portal gov.br
  Scenario: Realizar busca por passaporte
    Given que acesso a pagina inicial do gov.br
    When pesquiso pelo termo "passaporte"
    Then devo ser direcionado para a pagina de resultados da busca por "passaporte"
```

### 2. Page Object Model

A classe `BuscaPage` encapsula todas as interações com a página:

```javascript
class BuscaPage {
  acessarPaginaInicial() { ... }
  pesquisarTermo(chaveTermo) { ... }
  validarPaginaResultados(chaveTermo) { ... }
}
```

### 3. Step Definitions

Os passos do Gherkin são implementados em JavaScript:

```javascript
Given("que acesso a pagina inicial do gov.br", () => {
  buscaPage.acessarPaginaInicial();
});

When("pesquiso pelo termo {string}", (termo) => {
  buscaPage.pesquisarTermo(termo);
});

Then("devo ser direcionado para a pagina de resultados...", (termo) => {
  buscaPage.validarPaginaResultados(termo);
});
```

### 4. Dados de Teste

Os dados de teste são armazenados em `cypress/fixtures/dados.json`:

```json
{
  "termosPesquisa": {
    "passaporte": "passaporte",
    "CPF": "CPF",
    "CNH": "CNH"
  }
}
```

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/eduardobellini/projeto-qa.git
cd projeto-qa
```

2. Instale as dependências:
```bash
npm install
```

## Executar os Testes

### Modo Interativo (Cypress UI)
```bash
npm run cy:open
```
Abre a interface do Cypress onde você pode executar os testes visualmente.

### Modo Headless (Terminal)
```bash
npm run cy:run
```
Executa todos os testes no terminal sem interface gráfica.

## Configuração

O arquivo `cypress.config.js` contém:

- URL base: `https://www.gov.br`
- Padrão de specs: `.feature` files em `cypress/e2e/features/`
- Timeout padrão: 10 segundos
- Timeout de carregamento de página: 60 segundos
- Bloqueio de domínios de tracking (Google Analytics)

## Fluxo de Execução

1. Cypress carrega o arquivo `.feature`
2. O preprocessor do Cucumber converte Gherkin em JavaScript
3. Cada passo é mapeado para sua implementação em `steps/`
4. Os métodos do Page Object Model interagem com a página
5. Os dados são carregados das fixtures conforme necessário
6. Validações são executadas
7. Resultados são reportados

## Cenários de Teste

Atualmente o projeto contém cenários para:

- Busca por "passaporte"
- Busca por "CPF"
- Busca por "CNH"

Cada cenário:
1. Acessa a página inicial do gov.br
2. Realiza a busca pelo termo especificado
3. Valida se foi redirecionado para a página de resultados
4. Verifica se o termo aparece nos resultados

## Adicionando Novos Testes

### 1. Adicionar nova feature (Gherkin)
Crie um arquivo em `cypress/e2e/features/` com seus cenários.

### 2. Adicionar novos steps
Implemente os passos do Gherkin em `cypress/steps/` ou `busca.steps.js`.

### 3. Estender o Page Object
Adicione novos métodos em `cypress/pages/busca.page.js` para novas interações.

### 4. Adicionar dados
Inclua novos dados em `cypress/fixtures/dados.json`.

## Requisitos

- Node.js 14+
- npm ou yarn
- Browser Chrome (instalado automaticamente pelo Cypress)

## Licença

ISC
