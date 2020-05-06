# Desafio 2

## API no Nest.js com TypeORM

Nesse desafio você dará um passo além e criará um endpoint Rest com a listagem de todas aulas da Maratona Full Cycle 2.0 (utilize o menu do site: [maratona.fullcycle.com.br](http://maratona.fullcycle.com.br)).

### Requisitos
* Nest.js
* TypeORM
* Migrations
* Banco de dados: SQLite

### Detalhes

* Estrutura do banco de dados: Tabela: maratona. Campos: id, aula.
* Endpoint: "/maratona" com a opção de listar (GET) e inserir (POST)
* Realize o build da aplicação usando o comando: "npm run build"
* Gere uma imagem Docker copiando a pasta dist para dento do container incluindo o arquivo do banco do SQLite com as informações populadas
* Utilize o comando como entrypoint: "npm start:prod"
* A aplicação deverá rodar na porta 3000
* Suba o container no DockerHub
* Poste sua imagem nos comentários do site: [maratona.fullcycle.com.br](http://maratona.fullcycle.com.br)
* Quando executarmos: "docker run -p 3000:3000 seu-login-docker/nome-da-sua-imagem" deveremos ter acesso a API na porta 3000

### Dicas

* Coloque o arquivo do banco de dados gerado pelo SQLite na raiz do projeto (não esqueça de copiá-lo para dentro do container em conjunto com a pasta dist). Utilize a configuração abaixo no arquivo: "app.module.ts"

```
TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [Maratona],
 })
``` 

* Para facilitar o processo e rodar o comando do TypeORM no terminal, adicione em scripts no package.json:

```
"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
```

* Para realizar a configuração do banco de dados, crie um arquivo .env na raiz do projeto conforme abaixo:

```
TYPEORM_CONNECTION=sqlite
TYPEORM_DATABASE=database.sqlite
TYPEORM_ENTITIES=src/**/*.entity.ts
TYPEORM_MIGRATIONS=src/migrations/**/*.ts
TYPEORM_MIGRATIONS_DIR=src/migrations
```

* Para criar uma nova migração, execute o comando:

```
npm run typeorm migration:create -- -n maratona
```