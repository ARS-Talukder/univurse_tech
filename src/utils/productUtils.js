export const createProductSlug = (title) =>
    title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

export const flattenProductGroups = (productGroups = []) =>
    productGroups.flatMap((group) =>
        group.items.map((item) => ({
            ...item,
            group: group.group,
            groupDescription: group.groupDescription,
            slug: createProductSlug(item.title),
        }))
    );

export const createProductMetaDescription = (product) =>
    `${product.title} by Univurse Tech: ${product.description} Built with ${product.core} for ${product.category.toLowerCase()} operations.`;
