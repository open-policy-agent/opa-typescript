# Development Notes

## Maintenance

For all packages, dependabot should take care of their dependencies.
Dependabot also updates the workflow actions themselves.


### Releases: Changsets

Independent of merged PRs, changesets lets us control what is about to be released in the next version of a package.
To record a changeset for a package, run `npx changeset` in the top-level of the repository.
It will query you about the desired changeset.

When the "Release" workflow (using Changesets' action) notices that there are active changests, it will open a "Version Packages" PR that contains the relevant changes to the repository.
When you decide that a release is ready, merging that PR will cause
1. the `package.json` to be updated accordingly (major/minor/patch bump)
2. the changesets for each affected package are combined into the package's CHANGELOG.


### Publishing packages and releases

Publishing packages and releases is managed by the Changsets action in the  Generate workflow:

When it finds **no changsets**, it will check npmjs.com for the version we have in the repository, and will publish the packages so that both are in sync.

This process also takes care of publishing our SE-generated `@open-policy-agent/opa` package: the action notices that the latest version on `main` is newer than what's on NPM, and will publish the package there.

It also takes care of pushing tags to github, in the format `PACKAGE@VERSION`, e.g. `@open-policy-agent/opa@1.2.2`.

Additional steps have been added over the plain Changesets action to take care of:

1. Publishing `@open-policy-agent/opa` to https://jsr.io:
   The process is idempotent and just runs for every merge. If the package is present, nothing happens.
2. Publishing a Release for @open-policy-agent/opa on GitHub:
   But in combination, we need to do it ourselves.

**When Changeset finds changes**, the process is **on hold** until those changes are "flushed", i.e. until the "Version Packages" PR is merged.
This also means that `@open-policy-agent/opa` is **not** published to npmjs.com until the Changeset PR is merged.


## Testing

### `@open-policy-agent/opa`

For testing, we use NodeJS' builtin test runner, together with testcontainers-node.
The tests are defined in a TS file, `tests/authorizer.test.ts`.

Run all tests with

```shell
npx tsx --test tests/**/*.ts
```

and with testcontainers-node's debug logging:

```shell
DEBUG='testcontainers*' npx tsx --test tests/**/*.ts
```

Single out a test case by name:

```shell
npx tsx --test-name-pattern="can be called with input==false"  --test tests/**/*.ts
```

### Other packages

```shell
npx -w package/$PACKAGE test
# for example
npx -w package/opa-react test
```
