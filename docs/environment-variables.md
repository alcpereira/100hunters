## Environment variables

## Decision
We are not using `dotenv` or similar packages.

## Tools
- `invariant` package to simply check if the essential variables are set and t
- `--env-file=.env` as recommended per Node [docs ](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- Remember to update `environment.d.ts