import { PageLayout } from "@/layouts/PageLayout";
import { getAllPages, getPage } from "@/server/actions";

interface Params {
  slug: string[];
}

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.edges
    .map(({ node }) => node.uri)
    .filter((slug): slug is string => slug != null && slug !== "/")
    .map((s) => s.split("/").filter((s) => s !== ""))
    .map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params }: { params: Params }) => {
  const page = await getPage(params.slug.join("/"));

  return { title: page.title };
};

export default async function Page({ params }: { params: Params }) {
  const page = await getPage(params.slug.join("/"));

  return <PageLayout page={page} />;
}
