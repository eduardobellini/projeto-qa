const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const buscaPage = require("../pages/busca.page");

Given("que acesso a pagina inicial do gov.br", () => {
  buscaPage.acessarPaginaInicial();
});

When("pesquiso pelo termo {string}", (termo) => {
  buscaPage.pesquisarTermo(termo);
});

Then("devo ser direcionado para a pagina de resultados da busca por {string}", (termo) => {
  buscaPage.validarPaginaResultados(termo);
});
