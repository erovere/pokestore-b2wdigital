# PokestoreB2wDigital
O desafio deste projeto foi criar uma aplicação Web de "Loja Pokémon", com uma estrutura única que comportasse diversos estilos mas preservasse o mesmo comportamento, para que a loja pudesse ser aplicada a diferentes tipos de Pokémon. Ou seja, criar uma aplicação multi-tenant/white label, onde Pokémons pudessem ser visualizados e adicionados em um carrinho de compras, simulando um fluxo real de Loja.
O projeto foi desenvolvido dentro do Processo Seletivo para a vaga de Front-end Sênior da empresa B2WDigital.


## Sumário
* [Responsáveis](#responsáveis)
* [Executando o projeto localmente](#executando-o-projeto-localmente)
* [Gerando novos componentes, se necessário](#gerando-novos-componentes-se-necessario)
* [Dependências](#dependências)
* [APIs](#apis)
* [Builds e testes](#builds-e-testes)
* [Releases (CD)](#releases-(cd))
* [Desafio Solicitado](#desafio-solicitado)
* [Bônus sugerido](#bonus)
* [Extras](#extras)
* [Backlog de melhorias](#backlog-de-melhorias)

## Responsáveis
* **Desenvolvedor**: Eduardo Roveré <eduardo.rovere@gmail.com>
* **UI/UX**: Eduardo Roveré (Com ideias da linha arquitetural partidas de um wireframe proposto pela B2WDigital)


## Executando o projeto localmente

1. Após baixar este projeto na sua máquina, rode um `npm install` para instalar todas as dependências do projeto.
2. Para simular os estilos das múltiplas lojas de tipos de Pokémon e carregar os dados white label de cada uma delas, orienta-se rodar o servidor local em diferentes portas. No arquivo `host-to-tenant-map.ts` você encontrará os apontamentos, relacionando as URLs com os tenantIDs definidos.
* Para visualizar a loja Pokémon "Fire" localmente, rode: `npm run start-fire`. A título de conhecimento, a porta localhost:4200 foi definida para esta loja por padrão. Então se você rodar o servidor normalmente, sempre abrirá na loja de Fogo.

* Para visualizar a loja Pokémon "Water" localmente, rode: `npm run start-water`.
* Para visualizar a loja Pokémon "Grass" localmente, rode: `npm run start-grass`.
* Para visualizar a loja Pokémon "Ghost" localmente, rode: `npm run start-ghost`.
* Para visualizar a loja Pokémon "Ice" localmente, rode: `npm run start-ice`.

Obs: O sistema possui um `configuration.service.ts`, que traz as configurações de cada loja do projeto. Primeiro tentamos captar as configurações de tema da API definida. Caso a API esteja indisponível, existe uma callback que puxa os dados do `default-configuration.ts`.



## Gerando novos componentes, se necessário

Rode o comando padrão da CLI do Angular `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Dependências
As dependências do projeto estão listadas no arquivo package.json e precisam ser instaladas com o comando `npm install`.

## APIs
* PokeApi
  * https://pokeapi.co/    

* A API de dados de cada loja está sendo simulada através do json-server da Typicode:
  * https://my-json-server.typicode.com/erovere/poketenantconfig


## Build e Testes
* Comando para lint:
    Rode o comando `npx ng lint` para rodar um lint no projeto e analisar se tudo está OK.

* Comando para geração de build:
    Rode o comando `ng build` para gerar uma build do projeto. Os artefatos da build serão armazenados na pasta `dist/`. 

* Build para Stage:
    Rode o comando `npm run build-staging` para gerar a build de Staging. 

* Build para Production:
    Rode o comando `npm run build-prod` para gerar a build de Produção. 

* Build para Production mais minificado:
    Rode o comando `npm run build-prod-min` para gerar a build de Produção. 

        
* Comandos para testes:
    Rode o comando `ng test` para executar testes unitários pelo [Karma](https://karma-runner.github.io).
    Rode o comando `ng e2e` para executar testes end-to-end via [Protractor](http://www.protractortest.org/).


## Releases
* URLs

| Loja          | URL                              |
|---------------|----------------------------------|
| Fire Pokémon  | https://fire-pokestore.web.app/  |
| Water Pokémon | https://water-pokestore.web.app/ |
| Grass Pokémon | https://grass-pokestore.web.app/ |
| Ghost Pokémon | https://ghost-pokestore.web.app/ |
| Ice Pokémon   | https://ice-pokestore.web.app/   |



## Desafio solicitado

- [x] Catálogo de produtos
- [x] Carrinho lateral
- [x] Resumo do carrinho
- [x] 05 lojas com estilos e tipos diferentes de Pokémon
- [x] Barra de busca para filtrar os Pokémon
- [x] Botão de finalizar compra, reiniciando o processo de compra
- [x] Modal de obrigado ao finalizar compra
- [x] Salvar os dados da compra do usuário localmente para não perdê-las ao atualizar a página
- [x] Colocá-lo online em alguma url pública para que as pessoas consigam utilizar a loja, afinal como vamos vender Pokémon se não nos acharem?
- [x] Uma página com mais detalhes do Pokémon, tendo informações como os tipos, movimentos, pontos fracos e pontos fortes. Dessa forma o usuário poderá navegar para essa página e adicionar o Pokémon no carrinho ou voltar para o catálogo.

## Bônus sugerido
- [ ] Loja ser acessível para pessoas que utilizaram leitores de tela.
- [ ] Testes E2E/UI automatizados parata be garantir que suas funcionalidades estão funcionando corretamente.
- [x] Loja ser um PWA completo com aviso de AHS.
- [ ] Ter nota 100 no lighthouse. (Atualmente estamos com nota **97** em Performance, **92** em Acessibilidade, **93** em melhores práticas e **75** em SEO. Iremos melhorar isso!)
- [x] Uilizar CI/CD para deploy das lojas.

## Extras

- [x] Projeto desenvolvido em Angular 10, com uma arquitetura criada para dar suporte ao projeto de forma White Label, que permite uma fácil manipulação, customização e expansão da aplicação para diversos outros clientes (ou, neste caso, diferentes lojas de tipos de Pokémon).
- [x] Armazenamento de cookies para guardar os dados de temas das lojas, para otimizar carregamento e diminuir consumo de memória da aplicação.
- [x] Fluxo de CI/CD totalmente configurado e automatizado com Github e Firebase integrados. Quando um Pull Request chega na branch master, automaticamente publica nos servidores de hosting do Firebase e espelha em todas as (atuais) 5 lojas de forma simultânea.
- [x] Site principal com espelhamento automático em outros tenants (Lojas de Pokémon: fire, water, grass, ghost e ice) a partir da mesma aplicação.
- [x] Melhorias de SEO e otimizações para compartilhamento em redes sociais.
- [x] Busca de Pokémons a partir de 2 caracteres, para evitar consumo excessivo de memória da aplicação.
- [x] Código passando em todos quesitos do NG LINT.
- [x] Integração com Google Tag Manager/Google Analytics em eventos front-end, que observa todos os eventos da aplicação, armazenando-os em um Data Layer em cada uma das lojas e gera relatórios customizados delas, relacionados aos acessos e interações dos usuários na aplicação.
- [x] Cores das lojas relacionadas aos elementos dos tipos dos Pokémons.
- [x] Carregamento por demanda de itens na tela da Loja.
- [x] Utilização de API de imagens de Pokémon para renderizar imagens de maior qualidade nos cards.
- [x] Notificação no ícone do carrinho de compras, localizado no menu superior, para indicar quantos itens o usuário já adicionou.
- [x] Menu superior listando todas 5 lojas de Pokémon disponíveis.
- [x] Página de carrinho de compras com detalhamento dos itens adicionados e função de limpar carrinho e/ou remover itens únicos.
- [x] Tratativas para cenários sem resultados (filtro de Pokémons e carrinho vazio).
- [x] Carregamento com preloader dos cards da loja.
- [x] Gestão de features por tenant. Possibilidade de adicionar e/ou remover uma determinada feature para um cliente em específico (uma loja de um tipo de Pokémon, por exemplo, não ter determinada funcionalidade).
- [x] Facilidade de implantação de novos tenants (criar novas lojas de tipos de Pokémon a partir de passos simples).
- [x] Animações com CSS/Keyframes (Pokebola do menu e Pokebola de Pokémon capturado na modal de sucesso do carrinho).
- [x] Arquitetura de carrinho diferente no desktop e mobile para otimizar a experiência dos usuários em ambas plataformas.


## Backlog de melhorias

Durante o desenvolvimento, foram reconhecidas e listadas algumas melhorias pontuais a serem feitas no projeto. 
Todos os itens estão cadastrados em um quadro público no Trello, que pode ser visualizado no seguinte endereço:
https://trello.com/b/JokjdpJt/poke-shop-b2wdigital-kanban
