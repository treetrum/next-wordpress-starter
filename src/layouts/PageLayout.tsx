import Link from "next/link";
import { PageFieldsFragment } from "@/gql/graphql";

export const PageLayout = async ({ page }: { page: PageFieldsFragment }) => {
  return (
    <div className="container mx-auto flex flex-col px-4 md:px-8">
      <div className="flex border-b py-4">
        <p className="font-bold">
          <Link href="/">NextJS WordPress Starter</Link>
        </p>
        <ul className="flex flex-grow justify-end gap-2">
          <li>
            <Link className="text-sm hover:underline" href="/privacy-policy">
              Privacy Policy
            </Link>
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
  );
};
