"use server";

import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { pagePreviewQuery, pageQuery } from "@/queries/page";
import { siteSettingsQuery } from "@/queries/settings";
import { getGraphqlClient, getPreviewGraphqlClient } from "../graphql";

const graphqlClient = getGraphqlClient();

const isPreview = (slugOrPreviewId: string) => {
  return draftMode().isEnabled && Number.isInteger(parseInt(slugOrPreviewId, 10));
};

export const getPage = async (slugOrId: string) => {
  const { page } = isPreview(slugOrId)
    ? await graphqlClient.request(pageQuery, { id: slugOrId })
    : await getPreviewGraphqlClient().request(pagePreviewQuery, { slug: slugOrId });
  if (page) {
    return page;
  }
  notFound();
};

export const getSiteSettings = async () => {
  const res = await graphqlClient.request(siteSettingsQuery);
  return {
    title: res.allSettings?.generalSettingsTitle ?? "NO TITLE",
  };
};
