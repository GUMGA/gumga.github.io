# Gumga Docs

Website de documentação da Gumga.

## Para desenvolvimento
Após clonar o projeto, executar o comando npm install para instalação das dependências.
```
npm install
```

Observe que no arquivo index.html tem duas importações do arquivo app.js

Para começar a desenvolver descomente a linha:

```
<script type="text/javascript" src="app.js"></script>
```
E comente a linha:
```
<script type="text/javascript" src="dist/app.min.js"></script>
```

Execute o comando npm run dev para desenvolver.
```
npm run dev
```

## Para produção
Execute o comando npm run prod para gerar o arquivo minificado na pasta "dist".
```
npm run prod
```

Comente a linha abaixo no arquivo index.html:

```
<script type="text/javascript" src="app.js"></script>
```
E descomente a linha:
```
<script type="text/javascript" src="dist/app.min.js"></script>
```
