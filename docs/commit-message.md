## Commit convention

### Decision

We decide to integrate [commitlint](https://commitlint.js.org/) to help our team adhere to good commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) specification.

### Commit message format

We have very precise rules over how our Git commit messages must be formatted. This format leads to easier to read commit history.

Each commit message consists of a **header**, optional **body**.

```text
<header>
<BLANK LINE>
<body>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-message-header) format.

### Commit message header

```text
<type>: <short summary>
  │           │
  │           └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory.
The most common commit conventions follow this pattern:

```text
type: subject
body?
footer?
```

### Documentation

**Type**:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system or external dependencies (example: npm)
- ci: Changes to our CI configuration files and scripts (example: Github Actions)
- chore: Other changes that don't modify src or test files
- revert: Reverts a previous commit

**Subject**:
Write a short, imperative tense description of the change

**Body**:
Provide a longer description of the change

### References:

- [commitlint](https://commitlint.js.org/reference/prompt.html)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Angular commit message format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)
