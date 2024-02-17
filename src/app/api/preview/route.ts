import { revalidatePath } from "next/cache";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { z } from "zod";

export const GET = (request: NextRequest) => {
  const { type, id } = z
    .object({ type: z.string(), id: z.string() })
    .parse(Object.fromEntries(request.nextUrl.searchParams.entries()));

  draftMode().enable();

  switch (type) {
    case "page":
      const url = `/${id}`;
      revalidatePath(url);
      return redirect(`/${id}`);
  }

  draftMode().disable();
  return Response.json({ errors: "Unknown post type" });
};
