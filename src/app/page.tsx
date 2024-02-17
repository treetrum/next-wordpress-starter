import { PageLayout } from "@/layouts/PageLayout";
import { getPage } from "@/server/actions";

export default async function Home() {
  const page = await getPage("/");

  return <PageLayout page={page} />;
}
