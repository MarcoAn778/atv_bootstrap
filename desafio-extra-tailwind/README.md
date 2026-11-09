# Café do Largo — Tailwind CSS


## Instalação pelo terminal

O Tailwind foi instalado no terminal do próprio Codespaces e a configuração foi gerada com o CLI. Este é o processo para iniciar um projeto novo nesse formato:

```bash
npm init -y
npm install -D tailwindcss@3
npx tailwindcss init
```

`npm install` baixa o pacote completo em `node_modules` e registra a dependência nos manifestos. `npx tailwindcss init` cria `tailwind.config.js`; depois preenchemos `content` com os caminhos do HTML e do JavaScript. `css/input.css` contém as três diretivas `@tailwind`. O comando abaixo lê esses arquivos e gera o CSS usado pela página:

```bash
npx tailwindcss -i ./css/input.css -o ./css/tailwind.css --watch
```

Neste projeto já configurado, use os comandos da próxima seção. Não é necessário repetir `init` ou criar os arquivos de novo. Usamos Tailwind 3 para seguir o fluxo com configuração JavaScript; Tailwind 4 possui outro processo de configuração.

## Executar no Codespaces

```bash
cd /workspaces/atv_bootstrap/desafio-extra-tailwind
npm ci
npm start
```

Abra a porta **8001**, em **Portas → Abrir no navegador**. A raiz já contém `index.html`. A versão Bootstrap continua na pasta `cafe-do-largo` e usa a porta 8000.

O comando `npm start` compila o CSS e inicia o servidor Python disponível no Codespaces. Depois de modificar classes, execute `npm run build` e recarregue a página. Para compilar automaticamente enquanto edita, execute `npm run watch` em outro terminal. Encerre cada processo com Ctrl+C.