# PokestoreB2wDigital

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### O que o projeto possui: ##

* Arquitetura Angular Whitelabel, que permite uma fácil manipulação e expansão da aplicação para diversos clientes (em código, chamados de Tenant).
* Armazenamento de cookies para guardar os temas das lojas, para otimizar carregamento da aplicação e diminuir consumo de memória da aplicação.
* CI/CD totalmente configurado e automatizado com Github e Firebase integrados. Quando um Pull Request bate na branch master, automaticamente publica no firebase e espelha em todas lojas simultaneamente.
* Site principal com espelhamento automático em outros tenants (fire, water, grass, ghost e ice) a partir da mesma aplicação.
* SEO e otimizações para compartilhamento em redes sociais.

## Backlog do projeto: ##
* Modal de cashback AME após realizar uma compra de Pokemon;
* Integração com GTM/GA em eventos front-end, trackear todos os eventos da aplicação em cada uma das lojas e gerar relatório delas;
* Carrinho de compras que aparece apenas após adicionar itens, na lateral direita;
* Carrinho com notificação no mobile (icone de carrinho apenas e ele escondido para economizar viewport);
* Modal de cookie consent, aplicando as regras da LGPD.
* Layout de Black Friday
* Modelagem de README com detalhamento da arquitetura white label.

## Verificar: ##
PWA
Lighthouse


**JSON SERVER**
https://my-json-server.typicode.com/erovere/poketenantconfig