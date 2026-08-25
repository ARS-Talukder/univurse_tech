import { useEffect } from "react";

const SITE_URL = "https://univursetech.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/images/univurse-tech-social-preview.png`;

const updateMeta = (selector, attributes) => {
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
};

const updateLink = (rel, href) => {
    let element = document.head.querySelector(`link[rel="${rel}"]`);

    if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
    }

    element.setAttribute("href", href);
};

const Seo = ({
    title,
    description,
    canonical = SITE_URL,
    image = DEFAULT_IMAGE,
    type = "website",
    schema,
}) => {
    useEffect(() => {
        document.title = title;

        updateMeta('meta[name="description"]', {
            name: "description",
            content: description,
        });
        updateMeta('meta[property="og:type"]', {
            property: "og:type",
            content: type,
        });
        updateMeta('meta[property="og:title"]', {
            property: "og:title",
            content: title,
        });
        updateMeta('meta[property="og:description"]', {
            property: "og:description",
            content: description,
        });
        updateMeta('meta[property="og:url"]', {
            property: "og:url",
            content: canonical,
        });
        updateMeta('meta[property="og:image"]', {
            property: "og:image",
            content: image,
        });
        updateMeta('meta[name="twitter:card"]', {
            name: "twitter:card",
            content: "summary_large_image",
        });
        updateMeta('meta[name="twitter:title"]', {
            name: "twitter:title",
            content: title,
        });
        updateMeta('meta[name="twitter:description"]', {
            name: "twitter:description",
            content: description,
        });
        updateMeta('meta[name="twitter:image"]', {
            name: "twitter:image",
            content: image,
        });
        updateLink("canonical", canonical);

        const existingSchema = document.getElementById("page-schema");
        existingSchema?.remove();

        if (schema) {
            const script = document.createElement("script");
            script.id = "page-schema";
            script.type = "application/ld+json";
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
        }
    }, [canonical, description, image, schema, title, type]);

    return null;
};

export default Seo;
