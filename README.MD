# Minimal API com Festify

## Descrição

A API Fórmula 1 é uma Minimal api funcional criada com Fastify para a listagem e filtragem de times e pilotos do esporte, com informações simples e de livre acesso.

## Funcionalidades

- **Listar os pilotos ou times da competição:** Os times e pilotos são gerados com informaões simples e rápidas.
- **Filtrar pilotos por id:** Os usuários podem realizar buscas específicas por id do piloto, facilitando o acesso às informações desejadas.

## Implementação

### Listar os pilotos da corrida

- **Endpoint:** `GET /drivers`
- **Descrição:** Retorna uma lista de pilotos da corrida.
- **Exemplo de resposta:**

```json
[
  { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
  { "id": 2, "name": "Sergio Pérez", "team": "Red Bull Racing" },
  { "id": 3, "name": "Lewis Hamilton", "team": "Mercedes" },
]
```

### Listar os times da corrida

- **Endpoint:** `GET /teams`
- **Descrição:** Retorna uma lista de times da corrida.
- **Exemplo de resposta:**

```json
[
  { "id": 1, "name": "Alpine", "base": "Enstone, United Kingdom" },
  { "id": 2, "name": "Alfa Romeo", "base": "Hinwil, Switzerland" },
  { "id": 3, "name": "AlphaTauri", "base": "Faenza, Italy" },
]
```

### Filtrar os pilotos por ID

- **Endpoint:** `GET drivers/{id}`
- **Descrição:** Retorna o devido piloto correspondente caso exista.
- **Exemplo de requisição:** `GET drivers/2`


## Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação utilizada para o desenvolvimento do projeto.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de construção e empacotamento para projetos TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.

## Como Utilizar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para listar pilotos e times ou utilize o mecanismo de filtro por id.