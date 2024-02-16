import type { CodegenConfig } from "@graphql-codegen/cli";
import "./src/utils/env";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.WORDPRESS_URL}/graphql`,
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
