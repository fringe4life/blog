import type { APIRoute } from "astro";
import products from "@/content/products.json" with { type: "json" };

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(products), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
