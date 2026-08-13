import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  lang?: "th" | "en";
  jsonLd?: Record<string, unknown>;
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

export function SEO({ title, description, keywords, canonical, lang = "th", jsonLd }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Evercare Nursing Home`;
    document.title = fullTitle;
    document.documentElement.lang = lang;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    if (keywords) upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
    if (canonical) {
      upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });
      upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
      upsertLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en", href: "https://evercarenursinghome.com/international" });
      upsertLink('link[rel="alternate"][hreflang="th"]', { rel: "alternate", hreflang: "th", href: "https://evercarenursinghome.com/" });
      upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: "https://evercarenursinghome.com/" });
    }

    const scriptId = "evercare-structured-data";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, lang, jsonLd]);

  return null;
}
