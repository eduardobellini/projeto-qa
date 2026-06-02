Feature: Busca no portal gov.br

  Scenario: Realizar busca por passaporte
    Given que acesso a pagina inicial do gov.br
    When pesquiso pelo termo "passaporte"
    Then devo ser direcionado para a pagina de resultados da busca por "passaporte"

  Scenario: Realizar busca por CPF
    Given que acesso a pagina inicial do gov.br
    When pesquiso pelo termo "CPF"
    Then devo ser direcionado para a pagina de resultados da busca por "CPF"

  Scenario: Realizar busca por CNH
    Given que acesso a pagina inicial do gov.br
    When pesquiso pelo termo "CNH"
    Then devo ser direcionado para a pagina de resultados da busca por "CNH"
