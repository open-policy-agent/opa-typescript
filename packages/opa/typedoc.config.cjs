/** @type { import('typedoc').TypeDocOptionMap & import('typedoc-plugin-replace-text').Config } */
module.exports = {
  out: "output",
  hideGenerator: true,
  navigationLinks: {
    NPM: "https://www.npmjs.com/package/@open-policy-agent/opa",
    GitHub: "https://github.com/open-policy-agent/opa-typescript",
  },
  entryPoints: [
    "./src",
    "./src/lib",
    "./src/sdk",
    "./src/sdk/models/components",
    "./src/sdk/models/errors",
    "./src/sdk/models/operations",
  ],
  excludeInternal: true,
  excludePrivate: true,
  excludeProtected: true,
  entryPointStrategy: "resolve",
  plugin: ["typedoc-plugin-replace-text"],
  replaceText: {
    replacements: [
      { pattern: "# OPA Typescript SDK", replace: "" },
      {
        pattern: `> \\*\\*Note\\*\\*: For low-level SDK usage, see the sections below.`,
        replace: "",
      },
      {
        // this captures all links to speakeasy's generated docs
        pattern: "docs/sdks/opaapiclient/README\\.md",
        replace: "../classes/_open-policy-agent_opa.sdk.OpaApiClient.html",
      },
      { pattern: "#executepolicy\\)", replace: "#executePolicy)" },
      {
        pattern: "#executepolicywithinput\\)",
        replace: "#executePolicyWithInput)",
      },
      {
        pattern: "#executebatchpolicywithinput\\)",
        replace: "#executeBatchPolicyWithInput)",
      },
      {
        pattern: "#executedefaultpolicywithinput\\)",
        replace: "#executeDefaultPolicyWithInput)",
      },
      {
        pattern:
          "For supported JavaScript runtimes, please consult \\[RUNTIMES\\.md\\]\\(RUNTIMES\\.md\\)\\.",
        replace:
          "See [the repository docs](https://github.com/open-policy-agent/opa-typescript/blob/main/packages/opa/RUNTIMES.md) for supported JavaScript runtimes.",
      },
    ],
  },
};
