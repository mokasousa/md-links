# Markdown Links

## 1. Resumo do projeto

O objetivo desse projeto era criar uma ferramenta, usando `Node.js`, que pudesse ler 
e analisar arquivos no formato `Markdown` para verificar e filtrar os _links_ presentes 
no arquivo. Para isso foi criada uma ferramenta de linha de comando (CLI) e uma biblioteca 
em Javascript.

## 2. Descrição

## 3. Instalação e utilização

O módulo pode ser instalado via `npm install <github-user>/md-links`.

A ferramenta pode ser executada da seguinte maneira, através do terminal: 
`md-links <path-to-file> [option]`. Ou pode ser importada com `require` para
usá-la em seu código.

E terá como resultado algo como:
```sh
$ md-links ./some/example.md
http://something.com/2/3/ Something Link
https://another-thing-.net/some-doc.html Some doc
http://google.com/ Google
```
