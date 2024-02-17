import { graphql } from "@/gql";

graphql(`
  fragment PageFields on Page {
    title
    content
  }
`);

export const pageQuery = graphql(`
  query PageByPreviewId($id: ID!) {
    page(id: $id, idType: DATABASE_ID, asPreview: true) {
      ...PageFields
    }
  }
`);

export const pagePreviewQuery = graphql(`
  query PageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      ...PageFields
    }
  }
`);
