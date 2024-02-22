import { graphql } from "gql.tada";

export const PageFieldsFragment = graphql(`
  fragment PageFields on Page {
    title
    content
  }
`);

export const pageQuery = graphql(
  `
    query PageByPreviewId($id: ID!) {
      page(id: $id, idType: DATABASE_ID, asPreview: true) {
        ...PageFields
      }
    }
  `,
  [PageFieldsFragment],
);

export const pagePreviewQuery = graphql(
  `
    query PageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        ...PageFields
      }
    }
  `,
  [PageFieldsFragment],
);

export const allPagesQuery = graphql(`
  query AllPages {
    pages {
      edges {
        node {
          uri
        }
      }
    }
  }
`);
