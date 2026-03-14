const SLUG_TO_NAME = {
  electronics: "electronics",
  jewelery: "jewelery",
  "mens-clothing": "men's clothing",
  "womens-clothing": "women's clothing",
};

const NAME_TO_SLUG = {
  electronics: "electronics",
  jewelery: "jewelery",
  "men's clothing": "mens-clothing",
  "women's clothing": "womens-clothing",
};

export function categoryNameToSlug(categoryName) {
  if (!categoryName || typeof categoryName !== "string") return "";
  return (
    NAME_TO_SLUG[categoryName] ??
    categoryName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  );
}

export function slugToCategoryName(slug) {
  if (!slug || typeof slug !== "string") return "";
  return SLUG_TO_NAME[slug] ?? slug.replace(/-/g, " ");
}
