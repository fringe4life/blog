import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  if (!id) {
    return new Response("Not found", { status: 404 });
  }
  const product = await getEntry("blog", id);
  if (!product) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(JSON.stringify(product.data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getStaticPaths = async () => {
  const entries = await getCollection("blog");
  return entries.map((entry) => ({
    params: {
      id: entry.id,
    },
  }));
};
