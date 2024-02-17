import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";
import { z } from "zod";

export const GET = (request: NextRequest) => {
  const { tag } = z
    .object({ tag: z.string() })
    .parse(Object.fromEntries(request.nextUrl.searchParams.entries()));
  revalidateTag(tag);
  console.log("Revalidated tag: ", tag);
  return Response.json({ success: true });
};
