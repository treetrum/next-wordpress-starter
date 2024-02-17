/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment PageFields on Page {\n    title\n    content\n  }\n": types.PageFieldsFragmentDoc,
    "\n  query PageByPreviewId($id: ID!) {\n    page(id: $id, idType: DATABASE_ID, asPreview: true) {\n      ...PageFields\n    }\n  }\n": types.PageByPreviewIdDocument,
    "\n  query PageBySlug($slug: ID!) {\n    page(id: $slug, idType: URI) {\n      ...PageFields\n    }\n  }\n": types.PageBySlugDocument,
    "\n  query AllPages {\n    pages {\n      edges {\n        node {\n          uri\n        }\n      }\n    }\n  }\n": types.AllPagesDocument,
    "\n  query SiteMeta {\n    allSettings {\n      generalSettingsTitle\n    }\n  }\n": types.SiteMetaDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageFields on Page {\n    title\n    content\n  }\n"): (typeof documents)["\n  fragment PageFields on Page {\n    title\n    content\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageByPreviewId($id: ID!) {\n    page(id: $id, idType: DATABASE_ID, asPreview: true) {\n      ...PageFields\n    }\n  }\n"): (typeof documents)["\n  query PageByPreviewId($id: ID!) {\n    page(id: $id, idType: DATABASE_ID, asPreview: true) {\n      ...PageFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PageBySlug($slug: ID!) {\n    page(id: $slug, idType: URI) {\n      ...PageFields\n    }\n  }\n"): (typeof documents)["\n  query PageBySlug($slug: ID!) {\n    page(id: $slug, idType: URI) {\n      ...PageFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPages {\n    pages {\n      edges {\n        node {\n          uri\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllPages {\n    pages {\n      edges {\n        node {\n          uri\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SiteMeta {\n    allSettings {\n      generalSettingsTitle\n    }\n  }\n"): (typeof documents)["\n  query SiteMeta {\n    allSettings {\n      generalSettingsTitle\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;