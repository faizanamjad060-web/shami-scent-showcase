import { createFileRoute, redirect } from "@tanstack/react-router";

// The storefront is a single page with in-page sections. Any direct visit or
// refresh on a path like /products, /home or /testers used to hit a 404.
// Map the known section paths onto the homepage anchors and send anything
// else back to the homepage instead of showing a Not Found page.
const SECTION_PATHS: Record<string, string> = {
  home: "#top",
  index: "#top",
  products: "#products",
  product: "#products",
  shop: "#products",
  collection: "#products",
  fragrances: "#products",
  about: "#about-products",
  "about-products": "#about-products",
  testers: "#testers",
  tester: "#testers",
  offers: "#products",
  contact: "#contact",
};

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const slug = (params._splat ?? "").replace(/^\/+|\/+$/g, "").toLowerCase();
    const hash = SECTION_PATHS[slug];
    throw redirect({ to: "/", hash: hash ? hash.slice(1) : undefined, replace: true });
  },
  component: () => null,
});
