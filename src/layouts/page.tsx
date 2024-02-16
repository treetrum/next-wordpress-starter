import Link from "next/link";
import { PageBySlugQuery } from "@/gql/graphql";
import { getSiteSettings } from "@/server/actions";

export const PageLayout = async ({ page }: { page: NonNullable<PageBySlugQuery["page"]> }) => {
  const meta = await getSiteSettings();
  return (
    <>
      <div className="container mx-auto flex flex-col px-4 md:px-8">
        <div className="flex border-b py-4">
          <p className="font-bold">
            <Link href="/">{meta.title}</Link>
          </p>
          <ul className="flex flex-grow justify-end gap-2">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 py-8">
          <h1 className="text-3xl font-bold">{page.title}</h1>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content ?? "" }}
          />
        </div>
      </div>
    </>
  );
};
