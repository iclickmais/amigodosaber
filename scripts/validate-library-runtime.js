import { categories, listBooksByCategory, listBooksBySubcategory, searchBooks, totalLibrarySize } from "../src/lib/library-data.ts";

if (totalLibrarySize !== 10000) throw new Error(`totalLibrarySize=${totalLibrarySize}`);
const categoryTotal = categories.reduce((total, category) => total + category.totalCount, 0);
if (categoryTotal !== 10000) throw new Error(`categoryTotal=${categoryTotal}`);
for (const category of categories) {
  const result = listBooksByCategory(category.slug, 0, 24);
  if (result.items.length > 24) throw new Error(`pagination failed for ${category.slug}`);
  if (result.total !== category.totalCount) throw new Error(`${category.slug}: ${result.total} != ${category.totalCount}`);
  for (const subcategory of category.subcategories) {
    const sub = listBooksBySubcategory(category.slug, subcategory.slug, 0, 24);
    if (sub.total !== subcategory.count) throw new Error(`${subcategory.slug}: ${sub.total} != ${subcategory.count}`);
    if (sub.items.some((book) => !book.coverUrl || !book.sourceKey || book.source !== "Open Library")) {
      throw new Error(`bibliographic metadata missing in ${subcategory.slug}`);
    }
  }
}
const search = searchBooks("theology", 50);
if (!search.length) throw new Error("search did not return an indexed real title/description");
console.log(JSON.stringify({ totalLibrarySize, categoryTotal, categories: categories.map((category) => ({ slug: category.slug, total: category.totalCount })), searchResults: search.length }, null, 2));
