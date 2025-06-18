## Requisitos

Verificar se o Node.js está instalado na máquina

-   Node.js 22 ou superior - conferir a versão: node -v

## Como rodar o projeto baixado, caso baixe de um repositório

Instalar as dependências indicadas pelo arquivo package.json

-   npm install

## Sequencia para criar o projeto

Criar o arquivo package.

-   npm init

Instalar o Typescript como uma dependência de desenvolvimento, mais recomendado

-   npm install --save-dev typescript

Criar o arquivo tsconfig.json, executarquando o typescript foi instalado somente no projeto.

-   npm tsc -- init

Compilar os arquivos Typescript

-   npx tsc

Compilar os arquivos Typescript. -watch: o compilador fica monitorando os arquivos .ts do projeto. Sempre que um arquivo é alterado, o tsc recompila automaticamente as alterações para gerar os arquivos .js correspondentes.

-   tsc --w

Executar o arquivo Javascript compilado

-   node dist/index.js
