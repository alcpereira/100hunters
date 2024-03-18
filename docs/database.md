## Database

### Decision

To practice SQL, we decided to not use an ORM.

Locally we use an seeded SQLite database that you can create using `npm run db:seed`.
On production, we will use libSQL which is an open source fork of SQLite maintained by Turso.
The SDK supports both languages.

If you want to use an hosted version of the database, you can follow the Turso Quickstart [guide](https://docs.turso.tech/quickstart),
setup the environment variables and run in production mode (`npm run build && npm run start`).

### Transactions

https://docs.turso.tech/sdk/ts/reference#batch-transactions

### Schema

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../utils/mermaid/dark.png">
  <img alt="Mermaid database schema" src="../utils/mermaid/light.png">
</picture>

### Documentation

Schema should be kept up to date using Mermaid Markdown in `utils/mermaid/schema.mmd`

### Tools

-[`@libsql/client`](https://www.github.com/tursodatabase/libsql-client-ts/)
