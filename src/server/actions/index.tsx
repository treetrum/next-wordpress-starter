"use server";

import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { pageBySlugQuery, siteSettingsQuery } from "@/queries";

const client = new GraphQLClient(process.env.WORDPRESS_URL + "/graphql", {});

const disableCache = () => {
  // Calling cookies() prevents nextjs from caching the action
  const _cookies = cookies();
};

export const getPage = async (slug?: string) => {
  disableCache();
  const response = await client.request(pageBySlugQuery, { slug: slug ?? "/" });
  const page = response.page;
  if (!page) {
    notFound();
  }
  return page;
};

export const getSiteSettings = async () => {
  disableCache();
  const res = await client.request(siteSettingsQuery);
  return {
    title: res.allSettings?.generalSettingsTitle ?? "NO TITLE",
  };
};
