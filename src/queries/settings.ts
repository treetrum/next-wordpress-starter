import { graphql } from "gql.tada";

export const siteSettingsQuery = graphql(`
  query SiteMeta {
    allSettings {
      generalSettingsTitle
    }
  }
`);
