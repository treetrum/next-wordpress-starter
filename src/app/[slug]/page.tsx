import { PageLayout } from "@/layouts/page";
import { getPage, getSiteSettings } from "@/server/actions";

interface Params {
  slug: string;
}

export const generateMetadata = async ({ params }: { params: Params }) => {
  const page = await getPage(params.slug);
  const meta = await getSiteSettings();
  return { title: `${page.title ?? "Unknown page"} | ${meta.title}` };
};

export default async function Home({ params }: { params: Params }) {
  const page = await getPage(params.slug);
  return <PageLayout page={page} />;
}
