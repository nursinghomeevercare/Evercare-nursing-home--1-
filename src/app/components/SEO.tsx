import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | Evercare Nursing Home`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      // Fallback if the tag doesn't exist yet
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [title, description]);

  return null; // This component doesn't render anything visually
}