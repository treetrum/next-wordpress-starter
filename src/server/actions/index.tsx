"use server";

import { readFragment } from "gql.tada";
import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { PageFieldsFragment, allPagesQuery, pagePreviewQuery, pageQuery } from "@/queries/page";
import { siteSettingsQuery } from "@/queries/settings";
import { getGraphqlClient, getPreviewGraphqlClient } from "@/server/clients/graphql";

const graphqlClient = getGraphqlClient();

const isPreview = (slugOrPreviewId: string) => {
  return draftMode().isEnabled && Number.isInteger(parseInt(slugOrPreviewId, 10));
};

// This is currently only used for SSG so we're not using cache
export const getAllPages = async () => {
  const response = await graphqlClient.request(allPagesQuery);
  if (response.pages) {
    return response.pages;
  }
  notFound();
};

export const getPage = unstable_cache(
  async (slugOrId: string) => {
    const { page } = isPreview(slugOrId)
      ? await getPreviewGraphqlClient().request(pageQuery, { id: slugOrId })
      : await graphqlClient.request(pagePreviewQuery, { slug: slugOrId });
    if (page) {
      return readFragment(PageFieldsFragment, page);
    }
    notFound();
  },
  ["page"],
  {
    revalidate: 60 * 60 * 24,
    tags: ["page"],
  },
);

export const getSiteSettings = unstable_cache(
  async () => {
    const res = await graphqlClient.request(siteSettingsQuery);
    return {
      title: res.allSettings?.generalSettingsTitle ?? "NO TITLE",
    };
  },
  ["settings"],
  {
    revalidate: 60 * 60 * 24,
    tags: ["settings"],
  },
);
