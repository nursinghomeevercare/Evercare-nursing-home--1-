import {
  ArrowRight,
  BedDouble,
  Check,
  CircleDollarSign,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Hospital,
  Languages,
  MessageCircle,
  Plane,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import LineContact from "../assets/Line.jpg";
import internationalHero from "../assets/international/bangkok-medical-wellness-nursing-care-hero.webp";
import gardenPhoto from "../assets/facilities/evercare-nursing-home-garden-walkway-bangkok.webp";
import patientRoomPhoto from "../assets/facilities/evercare-nursing-home-patient-room-garden-view.webp";
import adjustableBedsPhoto from "../assets/facilities/evercare-nursing-home-adjustable-beds-bangkok.webp";
import sharedCareRoomPhoto from "../assets/facilities/evercare-nursing-home-shared-care-room-bangkok.webp";
import activityCornerPhoto from "../assets/facilities/evercare-nursing-home-activity-corner-bangkok.webp";
import { internationalArticles } from "../data/internationalArticles";

const LINE_URL = "https://line.me/R/ti/p/@ever_care";

const internationalFacilityPhotos = [
  {
    src: gardenPhoto,
    alt: "Accessible garden walkway at Evercare nursing home in Bangkok",
    title: "Calm outdoor space",
    description: "A green garden and walking area within our Bangkok nursing home.",
    className: "md:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    src: patientRoomPhoto,
    alt: "Bright elderly care room with adjustable beds and garden view at Evercare nursing home Bangkok",
    title: "Bright care rooms",
    description: "Adjustable care beds, natural light, and direct views of the garden.",
    className: "md:col-span-2",
  },
  {
    src: adjustableBedsPhoto,
    alt: "Adjustable nursing beds in an Evercare senior care room in Bangkok Thailand",
    title: "Care-ready accommodation",
    description: "Rooms prepared with adjustable nursing beds and bedside storage.",
  },
  {
    src: sharedCareRoomPhoto,
    alt: "Shared elderly care room at Evercare international nursing home in Bangkok",
    title: "Spacious shared care area",
    description: "An open, orderly room designed for attentive daily care.",
  },
  {
    src: activityCornerPhoto,
    alt: "Senior activity corner at Evercare nursing home for international residents in Bangkok",
    title: "Activity corner",
    description: "A dedicated area for appropriate recreational and social activities.",
  },
];

const packages = [
  {
    name: "Essential Care",
    price: "THB 47,000",
    description:
      "For residents who manage most daily activities but benefit from general supervision, safety monitoring, or occasional assistance.",
    highlights: ["Private furnished room", "Shared caregiver", "Safety monitoring"],
  },
  {
    name: "Assisted Care",
    price: "THB 55,000",
    description:
      "For residents with limited mobility or regular assistance needs for meals, bathing, dressing, toileting, medication, and daily routines.",
    highlights: ["Regular ADL assistance", "Mobility support", "Medication assistance"],
    featured: true,
  },
  {
    name: "Advanced Care",
    price: "THB 65,000",
    description:
      "For residents needing a higher level of support, including bedbound care, tube feeding, dementia care, or palliative support.",
    highlights: ["Higher-support care", "Bedbound and tube-feeding support", "Dementia or palliative support"],
  },
];

const included = [
  "Private furnished room and shared caregiver service",
  "24-hour care-team availability",
  "Three meals per day",
  "Daily-living assistance matched to the assessed care level",
  "Medication assistance according to the prescribed schedule",
  "General health and safety monitoring",
  "Routine room cleaning and laundry",
  "Recreational and appropriate social activities",
  "Basic English communication and agreed family updates",
  "Coordination with hospitals, doctors, and family members",
];

const extraFees = [
  ["Hospital transport", "From THB 1,500 / round trip"],
  ["Ambulance", "From THB 2,500 / trip or provider quotation"],
  ["Physical therapy", "From THB 1,200 / session"],
  ["Doctor home visit", "Doctor's quotation"],
  ["Haircut service", "From THB 500 / visit"],
  ["Tolls, parking, and extended waiting", "Actual cost"],
];

const seoKeywords = [
  "nursing home Bangkok for foreigners",
  "international elderly care Bangkok",
  "post surgery recovery care Thailand",
  "private nursing home Thailand price",
  "medical treatment visa support Thailand",
  "English speaking caregiver Bangkok",
  "long term care Thailand expats",
  "rehabilitation accommodation Bangkok",
].join(", ");

export default function InternationalPage() {
  return (
    <div className="bg-white">
      <SEO
        title="International Nursing Home & Post-Surgery Care in Bangkok"
        description="Private nursing home care in Bangkok for international residents. English communication, post-surgery recovery support, transparent monthly packages from THB 47,000, and medical-visa document coordination."
        keywords={seoKeywords}
        canonical="https://evercarenursinghome.com/international"
        lang="en"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "NursingHome",
          name: "Evercare Nursing Home",
          url: "https://evercarenursinghome.com/international",
          email: "evercarenursinghome@gmail.com",
          telephone: "+66-86-324-6842",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Charansanitwong Road",
            addressLocality: "Bangkok",
            addressCountry: "TH",
          },
          availableLanguage: ["English", "Thai"],
          priceRange: "THB 47,000-80,000 per month",
        }}
      />

      <section className="relative min-h-[650px] overflow-hidden bg-primary py-20 text-white md:flex md:items-center md:py-28">
        <img
          src={internationalHero}
          alt="Bangkok medical wellness and nursing care for an international senior guest"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#073f46]/95 via-[#0c5960]/80 to-[#0c5960]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073f46]/35 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
              <Globe2 className="h-4 w-4" /> International residents & families
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Recover and live well in Bangkok—with care that feels personal.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
              Evercare provides private accommodation, professional caregiver support, and English communication for older adults, post-surgery guests, and international families seeking dependable care in Thailand.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                  Chat on LINE <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#packages">
                <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary">
                  View care packages <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              {["Private rooms", "24-hour care-team availability", "Family updates in English"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
                  <Check className="h-4 w-4 text-secondary" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="international-facilities-heading" className="bg-[#f7faf9] py-18 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-secondary">Our nursing home in Bangkok</p>
            <h2 id="international-facilities-heading" className="text-3xl font-semibold text-primary md:text-4xl">See where you will stay and recover</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Explore real photographs of Evercare's rooms, care equipment, garden, and activity spaces before arranging an in-person or video tour.
            </p>
          </div>
          <div className="grid auto-rows-[18rem] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {internationalFacilityPhotos.map((photo, index) => (
              <figure key={photo.title} className={`group relative overflow-hidden rounded-3xl bg-primary ${photo.className}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-6 pb-5 pt-16 text-white">
                  <h3 className="text-xl font-semibold">{photo.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{photo.description}</p>
                </div>
              </figure>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-white px-6 py-5">
            <p className="text-sm leading-relaxed text-muted-foreground">All photographs show the actual Evercare premises and care facilities.</p>
            <a href="#contact-international" className="inline-flex items-center font-semibold text-primary hover:underline">Arrange a tour <ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section id="why-evercare" className="py-18 scroll-mt-28 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-secondary">Why Evercare</p>
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">A calmer bridge between hospital and home</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Hospitals are designed for acute treatment. Once the treating doctor confirms that hospital-level care is no longer required, a nursing home can offer more personal space, help with daily routines, and a structured recovery environment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [HeartHandshake, "Individual care plan", "Care level is selected after reviewing mobility, medication, daily-living needs, and the medical summary."],
              [Languages, "English communication", "Basic English communication with residents and scheduled family updates according to the agreed care plan."],
              [Hospital, "Hospital coordination", "We coordinate appointments, transport, and communication with hospitals, doctors, and family members when requested."],
              [ShieldCheck, "Clear pricing", "Monthly inclusions, optional upgrades, and common third-party costs are shown before admission."],
            ].map(([Icon, title, copy]) => {
              const FeatureIcon = Icon as typeof HeartHandshake;
              return (
                <Card key={title as string} className="border-primary/10 shadow-sm">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <FeatureIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{title as string}</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">{copy as string}</CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="medical-care" className="scroll-mt-28 bg-[#f3f8f7] py-18 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-secondary">Medical treatment in Thailand</p>
              <h2 className="text-3xl font-semibold text-primary md:text-4xl">Why international patients consider Bangkok</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Bangkok offers a broad choice of public, private, specialist, and internationally accredited medical facilities. International patients often value the concentration of specialists, established medical-tourism services, and the ability to combine treatment with planned step-down recovery care.
              </p>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                Treatment and surgery decisions must be made with a licensed doctor. Evercare does not replace a hospital, emergency department, surgeon, or medical diagnosis.
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                [Stethoscope, "Specialist access", "Bangkok has a dense network of hospitals and specialty centres, giving patients options for consultations, procedures, and follow-up."],
                [Plane, "International-patient services", "Many Bangkok hospitals have dedicated international desks and experience coordinating overseas patients."],
                [BedDouble, "Recovery beyond the ward", "After discharge, Evercare can support medication routines, mobility, meals, hygiene, transport, and family updates."],
                [Users, "Family visibility", "An agreed update plan helps overseas relatives stay informed without relying only on brief hospital visits."],
              ].map(([Icon, title, copy]) => {
                const FeatureIcon = Icon as typeof Stethoscope;
                return (
                  <div key={title as string} className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                    <FeatureIcon className="mb-4 h-7 w-7 text-secondary" />
                    <h3 className="text-lg font-semibold text-primary">{title as string}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="visa-support" className="py-18 scroll-mt-28 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-3xl bg-primary p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
              <div>
                <FileCheck2 className="mb-5 h-10 w-10 text-secondary" />
                <h2 className="text-3xl font-semibold">Medical-treatment visa coordination</h2>
              </div>
              <div className="space-y-4 leading-relaxed text-white/85">
                <p>
                  For eligible overseas guests, we can help coordinate care information, accommodation details, and communication with the treating hospital or an immigration specialist.
                </p>
                <p>
                  Thailand's official requirements vary by visa category, nationality, treatment duration, and the embassy handling the application. A Thai hospital or medical centre normally provides the treatment appointment or acceptance letter; visa approval remains solely with the relevant Thai authority.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-sm">
                  <a className="rounded-full border border-white/25 px-4 py-2 hover:bg-white/10" href="https://thaievisa.go.th/" target="_blank" rel="noopener noreferrer">
                    Official Thai e-Visa website
                  </a>
                  <a className="rounded-full border border-white/25 px-4 py-2 hover:bg-white/10" href="https://www.mfa.go.th/en/publicservice/issuance-of-visa" target="_blank" rel="noopener noreferrer">
                    Thai Ministry of Foreign Affairs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 bg-gray-50 py-18 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-secondary">Monthly private-care packages</p>
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">Straightforward care levels and pricing</h2>
            <p className="mt-4 text-muted-foreground">Final package selection follows a pre-admission care assessment.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((carePackage) => (
              <Card key={carePackage.name} className={carePackage.featured ? "relative border-2 border-secondary shadow-lg" : "border-primary/10"}>
                {carePackage.featured && <span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">Popular care level</span>}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{carePackage.name}</CardTitle>
                  <div className="pt-2 text-3xl font-semibold text-secondary">{carePackage.price}</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent>
                  <p className="min-h-24 leading-relaxed text-muted-foreground">{carePackage.description}</p>
                  <ul className="mt-6 space-y-3">
                    {carePackage.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-secondary/20 bg-white p-6 text-center shadow-sm">
            <p className="text-lg font-semibold text-primary">Dedicated private caregiver upgrade: +THB 15,000 per month</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Total monthly price: Essential THB 62,000 · Assisted THB 70,000 · Advanced THB 80,000. Service follows an agreed shift schedule; it is not continuous 24-hour service by one individual caregiver.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-primary">Included in every package</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-primary/5 p-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div id="costs" className="scroll-mt-28">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl font-semibold text-primary">Plan for costs beyond the monthly fee</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Common post-surgery and long-term-care costs can include transport, hospital and doctor fees, medication, diapers, wound-care products, feeding supplies, equipment, therapy, tests, specialist consultations, interpreters, and visa or immigration services.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border">
              {extraFees.map(([service, fee], index) => (
                <div key={service} className={`grid grid-cols-[1fr_auto] gap-4 px-5 py-4 text-sm ${index % 2 ? "bg-gray-50" : "bg-white"}`}>
                  <span>{service}</span><strong className="text-right text-primary">{fee}</strong>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Third-party prices vary by distance, urgency, duration, and medical needs. We provide a quotation before arranging a non-emergency service whenever reasonably possible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-18 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-secondary">International care guides</p>
              <h2 className="max-w-3xl text-3xl font-semibold text-primary md:text-4xl">Plan treatment, recovery, visas, and costs with clearer information</h2>
            </div>
            <Link to="/international/blog"><Button variant="outline" className="border-primary/20 text-primary">View all guides <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {internationalArticles.slice(0, 6).map((article) => (
              <Link key={article.slug} to={`/international/blog/${article.slug}`} className="group rounded-2xl border border-primary/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{article.category}</span>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-primary group-hover:underline">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-international" className="scroll-mt-28 bg-[#edf7f5] py-18 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl bg-white p-7 shadow-sm md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-secondary">Request a care recommendation</p>
              <h2 className="text-3xl font-semibold text-primary md:text-4xl">Talk with our team on LINE</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Send the resident's medical summary, medication list, mobility information, and expected admission date. We will review the information and recommend the most appropriate care package.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#06C755] hover:bg-[#05b84e]">Open LINE @ever_care <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </a>
                <a href="mailto:evercarenursinghome@gmail.com">
                  <Button size="lg" variant="outline">Email our care team</Button>
                </a>
              </div>
            </div>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="group mx-auto block rounded-2xl border-2 border-[#06C755]/20 p-3 text-center transition hover:-translate-y-1 hover:shadow-lg" aria-label="Open Evercare LINE Official Account">
              <img src={LineContact} alt="Evercare LINE Official Account QR code - click to open LINE" className="h-52 w-52 object-contain" />
              <span className="mt-2 block text-sm font-semibold text-[#049b43] group-hover:underline">Tap QR image to open LINE</span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t py-10">
        <div className="container mx-auto px-4 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Admission notes:</strong> Monthly fees are payable in advance. A security deposit may be required. Additional and third-party services are billed separately. If the resident's condition changes, Evercare may recommend a different care level. All services and caregiver arrangements are subject to availability and the final service agreement.
        </div>
      </section>
    </div>
  );
}
