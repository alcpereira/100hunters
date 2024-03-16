# How to contribute

Fork and open a PR

## Commit message format

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

For more information see [commit-message.md](docs/commit-message.md)
