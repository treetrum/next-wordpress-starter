import { graphql } from "@/gql";

export const siteSettingsQuery = graphql(`
  query SiteMeta {
    allSettings {
      generalSettingsTitle
    }
  }
`);
