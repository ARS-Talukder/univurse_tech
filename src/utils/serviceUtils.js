export const createServiceSlug = (title) =>
    title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

export const createServiceMetaDescription = (service) =>
    `${service.title} service by Univurse Tech: ${service.description} Built for businesses that need practical, scalable digital solutions.`;
