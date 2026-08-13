import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { internationalArticles } from "../data/internationalArticles";

export default function InternationalBlogPage() {
  return (
    <div className="bg-white">
      <SEO
        title="International Care & Medical Travel Guides"
        description="English guides for international families considering nursing care, medical treatment, surgery, recovery accommodation, and medical-treatment visas in Bangkok, Thailand."
        keywords="Thailand medical travel blog, international nursing home Bangkok guides, surgery Thailand guide, medical visa Thailand, nursing home Thailand price"
        canonical="https://evercarenursinghome.com/international/blog"
        lang="en"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Evercare International Care Guides",
          url: "https://evercarenursinghome.com/international/blog",
          blogPost: internationalArticles.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: `https://evercarenursinghome.com/international/blog/${article.slug}`,
            datePublished: article.published,
          })),
        }}
      />

      <section className="bg-gradient-to-br from-primary via-primary to-[#0b4851] py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><BookOpen className="h-7 w-7 text-secondary" /></div>
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-secondary">Evercare guides</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">International care, medical travel, and recovery in Thailand</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/80">Practical English-language articles to help families compare care, plan treatment, understand visa documents, and budget beyond the hospital bill.</p>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {internationalArticles.map((article) => (
              <Card key={article.slug} className="flex flex-col border-primary/10 transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <span className="mb-3 w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">{article.category}</span>
                  <CardTitle className="text-xl leading-snug text-primary">{article.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 pt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />13 Aug 2026</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
                  <Link to={`/international/blog/${article.slug}`} className="mt-6">
                    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white">Read guide <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf7f5] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-primary">Need a care recommendation?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Send the medical summary, medication list, mobility information, and expected admission date to our care team.</p>
          <Link to="/international#contact-international"><Button size="lg" className="mt-7 bg-secondary hover:bg-secondary/90">Contact Evercare</Button></Link>
        </div>
      </section>
    </div>
  );
}
