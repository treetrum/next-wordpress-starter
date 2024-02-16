import { graphql } from "@/gql";

export const pageBySlugQuery = graphql(`
  query PageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
    }
  }
`);

export const siteSettingsQuery = graphql(`
  query SiteMeta {
    allSettings {
      generalSettingsTitle
    }
  }
`);
