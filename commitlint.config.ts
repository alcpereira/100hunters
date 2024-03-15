import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  helpUrl: `https://github.com/alcpereira/100hunters/blob/main/docs/commit-message.md`,
};

export default commitlintConfig;
