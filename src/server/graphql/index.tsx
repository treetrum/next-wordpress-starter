"use server";

import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";

const graphqlUrl = process.env.WORDPRESS_URL + "/graphql";

const graphqlClient = new GraphQLClient(graphqlUrl);

export const getGraphqlClient = () => {
  return graphqlClient;
};

/**
 * Instance of graphql client that includes the WordPress auth cookie in its
 * headers to be able to request preview documents.
 */
export const getPreviewGraphqlClient = () => {
  const allCookies = cookies().getAll();
  const authCookie = allCookies.find((cookie) => cookie.name.startsWith("wordpress_logged_in_"));
  const client = new GraphQLClient(graphqlUrl, {
    credentials: "include",
    headers: {
      Cookie: authCookie ? `${authCookie.name}=${authCookie.value}` : "",
    },
  });
  return client;
};
