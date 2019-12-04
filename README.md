# Markdown Links

## 1. Descrição do projeto

O objetivo desse projeto era criar uma ferramenta, usando `Node.js`, que pudesse ler 
e analisar arquivos no formato `Markdown` para verificar e filtrar os _links_ presentes 
no arquivo. Para isso foi criada uma biblioteca em Javascript que pode ser executada por 
linha de comando (CLI) e que retorna ao terminal uma lista de links encontrados no arquivos
com suas respectivas referências e status do link quando requerido.

## 2. Instalação e utilização

O módulo pode ser instalado via `npm install -g mokasousa/md-links`.

A ferramenta pode ser executada da seguinte maneira, através do terminal: 
`md-links <path-to-file> [option]`, onde deve ser inserido o caminho do arquivo markdown 
que se deseja analisar e onde pode-se inserir ou não a opção para checagem do status do link 
adicionando-se `--validate`. Esse comando terá como resultado algo como:

```
$ md-links ./some/example.md
0 => http://something.com/2/3/ Something Link
1 => https://another-thing-.net/some-doc.html Some doc
2 => http://google.com/ Google
```

Ou, caso seja adicionada a validação dos links:

```
$ md-links ./some/example.md --validate
0 => http://something.com/2/3/ Something Link URL NOT FOUND
1 => https://another-thing-.net/some-doc.html Some doc URL NOT FOUND
2 => http://google.com/ Google OK
```

A ferramenta também pode ser importada com `require` para utilizá-la em seu código,
adicionando-se o seguinte comando: 

`const mdLinks = require("./lib/index.js")`

Assim será possível executar a função mdLinks adicionando-se até dois parâmetros, o caminho
do arquivo e a validação:

`mdLinks('./some/example.md', '--validate')`

A função retornará um array de objetos contendo a referência do link, o link encontrado e
o status quando a validação for adicionada.
Algo como:

```
[{ href: "http://something.com/2/3/ ", text: "Something Link", status: "URL NOT FOUND" },
{ href: "https://another-thing-.net/some-doc.html", text: "Some doc", status: "URL NOT FOUND" },
{ href: "http://google.com/", text: "Google", status: "OK" }]
```

## 3. Considerações Finais

Esse projeto foi desenvolvido como parte do currículo da [Laboratoria Bootcamp Brasil](https://www.laboratoria.la/)
e os requisitos para o projeto podem ser verificados [aqui](https://github.com/Laboratoria/SAP003-md-links).
Nesse projeto foram utilizados o Node.js, Javascript, métodos de requisição HTTP e testes unitários com JEST.

Criado e desenvolvido por Mônica Sousa
