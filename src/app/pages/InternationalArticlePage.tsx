import { ArrowLeft, ArrowRight, Calendar, Check, Clock, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { getInternationalArticle, internationalArticles } from "../data/internationalArticles";
import NotFound from "./NotFound";

export default function InternationalArticlePage() {
  const { slug } = useParams();
  const article = getInternationalArticle(slug);
  if (!article) return <NotFound />;

  const currentIndex = internationalArticles.findIndex((item) => item.slug === article.slug);
  const nextArticle = internationalArticles[(currentIndex + 1) % internationalArticles.length];
  const canonical = `https://evercarenursinghome.com/international/blog/${article.slug}`;

  return (
    <article className="bg-white">
      <SEO
        title={article.seoTitle}
        description={article.description}
        keywords={article.keywords}
        canonical={canonical}
        lang="en"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.description,
          datePublished: article.published,
          dateModified: article.updated,
          inLanguage: "en",
          mainEntityOfPage: canonical,
          author: { "@type": "Organization", name: "Evercare Nursing Home" },
          publisher: { "@type": "Organization", name: "Evercare Nursing Home", url: "https://evercarenursinghome.com" },
        }}
      />

      <header className="bg-[#f2f8f7] py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <Link to="/international/blog" className="mb-7 inline-flex items-center text-sm font-semibold text-primary hover:underline"><ArrowLeft className="mr-2 h-4 w-4" />All international guides</Link>
          <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="rounded-full bg-secondary/10 px-3 py-1 font-semibold text-secondary">{article.category}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />13 August 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.readTime}</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-primary md:text-5xl">{article.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{article.intro}</p>
        </div>
      </header>

      <div className="container mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-20">
        <div className="min-w-0">
          <section className="mb-12 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-primary">Key takeaways</h2>
            <ul className="mt-5 space-y-3">
              {article.takeaways.map((item) => <li key={item} className="flex gap-3 leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-secondary" />{item}</li>)}
            </ul>
          </section>

          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-primary md:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-lg leading-8 text-[#374151]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-6 space-y-3 rounded-2xl bg-gray-50 p-6">
                    {section.bullets.map((item) => <li key={item} className="flex gap-3 leading-relaxed"><Check className="mt-1 h-4 w-4 shrink-0 text-secondary" />{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-14 border-t pt-10">
            <h2 className="text-xl font-semibold text-primary">Sources and further reading</h2>
            <ul className="mt-4 space-y-3">
              {article.sources.map((source) => (
                <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-primary hover:underline">{source.label}<ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" /></a></li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">This article provides general information, not medical or immigration advice. Treatment, discharge, rehabilitation, and travel decisions must be made with qualified clinicians. Visa approval is decided only by the responsible Thai authority.</p>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-primary/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <h2 className="text-lg font-semibold text-primary">Evercare International Care</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Private rooms and assessed caregiver support in Bangkok, with monthly packages from THB 47,000.</p>
          <Link to="/international#packages"><Button className="mt-5 w-full bg-secondary hover:bg-secondary/90">View packages</Button></Link>
          <a href="https://line.me/R/ti/p/@ever_care" target="_blank" rel="noopener noreferrer"><Button variant="outline" className="mt-3 w-full">Chat on LINE</Button></a>
        </aside>
      </div>

      <section className="bg-primary py-14 text-white">
        <div className="container mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-wider text-secondary">Read next</p><h2 className="mt-2 max-w-2xl text-2xl font-semibold">{nextArticle.title}</h2></div>
          <Link to={`/international/blog/${nextArticle.slug}`}><Button size="lg" className="bg-white text-primary hover:bg-white/90">Next guide <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </section>
    </article>
  );
}
