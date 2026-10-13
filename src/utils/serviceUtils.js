export const createServiceSlug = (title) =>
    title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

export const createServiceMetaDescription = (service) =>
    `${service.title} service by UnivurseTech, a software company in Bangladesh: ${service.description} Built for businesses that need practical, scalable digital solutions.`;
