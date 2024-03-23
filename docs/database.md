## Database

### Decision

To practice SQL queries, we decided to NOT use an ORM.

Using prepare statements only for saftey reasons, see [here](https://sidorares.github.io/node-mysql2/docs#using-prepared-statements)

### Schema

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../utils/mermaid/dark.png">
  <img alt="Mermaid database schema" src="../utils/mermaid/light.png">
</picture>

### Documentation

Schema should be kept up to date using Mermaid Markdown in `utils/mermaid/schema.mmd`

```mermaid
---
title: 100hunters database schema
---
erDiagram
    ACCOUNT {
        int id PK
        string email
        string username
        string password
    }
    ACCOUNT ||--|| BOARD : has
    BOARD {
        int id PK
        int accountId FK
        string title
    }
    BOARD ||--|{ COLUMN : contains
    COLUMN {
        int id PK
        int boardId FK
        string title
        int position
    }
    COLUMN ||--|{ CARD : contains
    CARD {
        int id PK
        int columnId FK
        int companyId FK
        string title
        string description
        string note
        int position
    }
    CARD }o--|| COMPANY : links
    COMPANY {
        int id PK
        string name
        string description
    }
    COMPANY ||--o{ CONTACT : contains
    CONTACT {
        int id PK
        int companyId FK
        string name
        string email
        string twitter
        string linkedin
        text note
    }
    CARD ||--|| TODO : contains
    TODO {
        int id PK
        int cardId FK
        boolean isDone
    }
```

Visit the mermaid documentation page [here](https://mermaid.js.org/intro/)

### Tools

`mysql2` :  
https://sidorares.github.io/node-mysql2/docs

`TypeScript + mysql2` :  
https://sidorares.github.io/node-mysql2/docs/examples/typescript/row-data/index
