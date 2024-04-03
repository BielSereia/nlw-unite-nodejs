<p align="center">
	<img src="https://github.com/BielSereia/assets/blob/main/mockup.png?raw=true"/>
</p>
<h1 align="center">pass.in</h1>

<p>O pass.in é uma aplicação de gestão de participantes em eventos presenciais.</p>
<p>A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.</p>
<p>Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.</p>
<p>O sistema fará um scan da credencial do participante para permitir a entrada no evento.</p>
<p>O projeto foi desenvolvido durante a NLW Unite realizada pela <a href="https://www.rocketseat.com.br">rocketseat</a>.</p>

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Execute o projeto na sua máquina
```
# Clone o projeto com git 
git clone https://github.com/BielSereia/nlw-unite-nodejs.git

# Instale as dependências
npm install

# Rode as migrations
npm run db:migrate

# Inicie o projeto
npm run dev

# Teste a aplicação acessando
http://localhost:3333/docs
```
<br>
<p align="center">
Construído com <a href="https://nodejs.org/en">NodeJs</a>, <a href="https://www.typescriptlang.org">TypeScript</a>, <a href="https://fastify.dev">Fastify</a>, <a href="https://www.prisma.io">Prisma</a> e <a href="https://zod.dev">Zod</a>.
</p>
