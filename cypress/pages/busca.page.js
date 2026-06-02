class BuscaPage {
  acessarPaginaInicial() {
    cy.visit("/");
    this.aceitarCookiesSeExistir();
  }

  pesquisarTermo(chaveTermo) {
    cy.fixture("dados").then(({ termosPesquisa }) => {
      const termo = termosPesquisa[chaveTermo];

      expect(termo, `termo da fixture para a chave ${chaveTermo}`).to.exist;
      this.acessarResultadoBusca(termo);
    });
  }

  validarPaginaResultados(chaveTermo) {
    cy.fixture("dados").then(({ termosPesquisa }) => {
      const termo = termosPesquisa[chaveTermo];

      expect(termo, `termo da fixture para a chave ${chaveTermo}`).to.exist;
      cy.location("href").should("include", "search");
      cy.location("href").should("include", encodeURIComponent(termo));
      cy.contains("body", new RegExp(termo, "i")).should("be.visible");
    });
  }

  aceitarCookiesSeExistir() {
    cy.get("body").then(($body) => {
      const botaoCookie = $body.find(
        "button:contains('Aceitar'), button:contains('Concordo'), button:contains('Accept')"
      );

      if (botaoCookie.length) {
        cy.wrap(botaoCookie.first()).click({ force: true });
      }
    });
  }

  acessarResultadoBusca(termo) {
    cy.visit(`/pt-br/search?SearchableText=${encodeURIComponent(termo)}`);
  }
}

module.exports = new BuscaPage();
