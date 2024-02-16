import { PageLayout } from "@/layouts/page";
import { getPage } from "@/server/actions";

export default async function Home() {
  const page = await getPage("/");

  return <PageLayout page={page} />;
}
