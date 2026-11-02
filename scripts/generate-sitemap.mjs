import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SITE_URL = "https://univursetech.pro.bd";
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const createSlug = (value) =>
    value
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const readJson = async (relativePath) =>
    JSON.parse(await readFile(path.join(projectRoot, relativePath), "utf8"));

const services = await readJson("public/data/services.json");
const productGroups = await readJson("public/data/products.json");

const categorySlugs = [
    "digital-commerce-edtech",
    "health-operations-logistics",
    "facility-lifestyle-automation",
    "brand-portfolio-experiences",
];

const urls = [
    "/",
    "/privacy-policy",
    "/terms-and-conditions",
    ...services.map((service) => `/services/${createSlug(service.title)}`),
    ...categorySlugs.map((slug) => `/product-categories/${slug}`),
    ...productGroups.flatMap((group) =>
        group.items.map((product) => `/products/${createSlug(product.title)}`)
    ),
];

const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
        (url) => `  <url>\n    <loc>${SITE_URL}${url}</loc>\n  </url>`
    ),
    "</urlset>",
    "",
].join("\n");

await writeFile(path.join(projectRoot, "public/sitemap.xml"), sitemap, "utf8");

console.log(`Generated sitemap.xml with ${urls.length} canonical URLs.`);
