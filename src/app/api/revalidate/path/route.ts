import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { posix } from "path";
import { z } from "zod";

export const GET = (request: NextRequest) => {
  const params = z
    .object({ path: z.string() })
    .parse(Object.fromEntries(request.nextUrl.searchParams.entries()));
  const path = posix.join("/", params.path);
  revalidatePath(path);
  console.log("Revalidated path: ", path);
  return Response.json({ success: true });
};
