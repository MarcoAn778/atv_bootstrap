# Café do Largo - Bootstrap pelo npm

Página de uma cafeteria fictícia com navbar, carrossel, três cards, tabela,
formulário e modal. O HTML, o CSS próprio e o JavaScript estão comentados.

## Abrir no Codespaces

No terminal do repositório:

```bash
cd /workspaces/atv_bootstrap/cafe-do-largo
npm install
npm start
```

Abra a porta **8000** no painel **Portas**. A página da cafeteria abre automaticamente.
Use **Ctrl+C** no terminal para parar o servidor.

O comando `npm start` executa o servidor simples do Python, que já está disponível
neste Codespace. Ele serve o HTML e os arquivos do Bootstrap; não há build.

## Como o Bootstrap foi instalado

Foi executado `npm install bootstrap`, sem escolher uma versão alpha.
Versão instalada nesta configuração: **5.3.8**.

- `package.json` registra a dependência e os comandos `start` e `check`.
- `package-lock.json` registra as versões exatas instaladas; mantenha-o no Git.
- `node_modules` é gerada pelo npm e está ignorada no Git. Não edite seus arquivos.
- `npm install` recria essa pasta depois de clonar o repositório.
- `npm ci` instala exatamente as versões do lockfile em uma instalação limpa.

O HTML carrega o CSS e o bundle diretamente de `../node_modules/bootstrap/dist/`.
O caminho começa com `../` porque o HTML está dentro da pasta `bootstrap`.
A antiga pasta `vendor` foi substituída pela instalação gerenciada pelo npm.
Depois de instalar os pacotes, a página não depende de CDN para carregar o Bootstrap.


## Componentes e verificações

1. Navbar com quatro links e menu colapsável no celular.
2. Carrossel com três slides, setas e indicadores; sem autoplay.
3. Três cards: uma coluna no celular, duas no tablet e três no desktop.
4. Tabela de combos com cinco linhas, listras e rolagem horizontal.
5. Formulário com quatro campos, labels e validação HTML5.
6. Modal com descrição, botão de fechar e ação para acessar o formulário.

O formulário confere os campos localmente. Não envia e-mail nem salva informações.
A cafeteria, os produtos e os valores apresentados são fictícios.

Para verificar a sintaxe do JavaScript, execute `npm run check`.
Antes da entrega, confira os componentes em Chrome, Firefox, Safari e Edge,
e em telas de celular, tablet e desktop. Prepare seu vídeo explicando o código
e os componentes no Codespaces. O desafio extra continua separado e não foi feito.

## Referência

[Documentação oficial do Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/).