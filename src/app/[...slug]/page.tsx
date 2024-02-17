import { PageLayout } from "@/layouts/PageLayout";
import { getPage } from "@/server/actions";

interface Params {
  slug: string[];
}

export const generateMetadata = async ({ params }: { params: Params }) => {
  const page = await getPage(params.slug.join("/"));

  return { title: page.title };
};

export default async function Page({ params }: { params: Params }) {
  const page = await getPage(params.slug.join("/"));

  return <PageLayout page={page} />;
}
