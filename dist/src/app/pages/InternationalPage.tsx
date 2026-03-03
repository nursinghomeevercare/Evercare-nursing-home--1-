import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Globe, Languages, FileText, CreditCard, Phone, Users } from "lucide-react";

export default function InternationalPage() {
  const services = [
    {
      icon: Languages,
      title: "English Speaking Staff",
      titleThai: "พนักงานพูดภาษาอังกฤษ",
      description: "Our staff can communicate in English to better serve international families"
    },
    {
      icon: FileText,
      title: "Documentation Support",
      titleThai: "ช่วยเหลือด้านเอกสาร",
      description: "Assistance with visa extensions, medical certificates, and insurance claims"
    },
    {
      icon: CreditCard,
      title: "International Payment",
      titleThai: "รับชำระเงินสากล",
      description: "Accept international credit cards, wire transfers, and major payment methods"
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      titleThai: "เคารพความหลากหลายทางวัฒนธรรม",
      description: "We respect different dietary requirements, religious practices, and cultural needs"
    },
    {
      icon: Users,
      title: "Family Video Calls",
      titleThai: "วิดีโอคอลสำหรับครอบครัว",
      description: "Regular video call schedules for families living abroad"
    },
    {
      icon: Phone,
      title: "24/7 Communication",
      titleThai: "ติดต่อได้ตลอด 24 ชม.",
      description: "Round-the-clock updates via LINE, WhatsApp, or email"
    }
  ];

  const countries = [
    "United States 🇺🇸",
    "United Kingdom 🇬🇧", 
    "Australia 🇦🇺",
    "Singapore 🇸🇬",
    "Japan 🇯🇵",
    "Germany 🇩🇪",
    "Canada 🇨🇦",
    "France 🇫🇷"
  ];

  return (
    <div>
      {/* Hero Section - Bilingual */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">International Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">
              สำหรับครอบครัวต่างชาติ
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">
              For International Families
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Professional elderly care services for expats and international families in Bangkok<br />
              <span className="text-base">
                บริการดูแลผู้สูงอายุคุณภาพสำหรับครอบครัวชาวต่างชาติในกรุงเทพ
              </span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us / ติดต่อเรา
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing / ดูราคา
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services for International Families */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              International-Friendly Services
            </h2>
            <h3 className="text-xl text-muted-foreground mb-2">
              บริการที่เหมาะสำหรับครอบครัวต่างชาติ
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base text-primary">
                    {service.titleThai}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for International Care */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                Why Choose Evercare?
              </h2>
              <h3 className="text-xl text-muted-foreground">
                ทำไมต้องเลือก Evercare?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Strategic Location</CardTitle>
                  <CardDescription>ทำเลที่ตั้งยุทธศาสตร์</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Located on Jaransanitwong Road, close to:</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Siriraj Hospital (โรงพยาบาลศิริราช)</li>
                    <li>• Bangkok Christian Hospital</li>
                    <li>• Multiple international hospitals</li>
                    <li>• Easy access from city center</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Affordable Quality Care</CardTitle>
                  <CardDescription>ดูแลคุณภาพในราคาเหมาะสม</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>High-quality care at reasonable prices:</p>
                  <ul className="mt-3 space-y-1">
                    <li>• THB 18,000 - 25,000 per month</li>
                    <li>• Professional nursing care 24/7</li>
                    <li>• Significantly more affordable than Western countries</li>
                    <li>• Transparent pricing, no hidden fees</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Family Connection</CardTitle>
                  <CardDescription>การเชื่อมต่อกับครอบครัว</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Stay connected with your loved ones:</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Regular photo and video updates</li>
                    <li>• Scheduled video calls via LINE/WhatsApp</li>
                    <li>• Monthly health reports in English</li>
                    <li>• Immediate notification for any concerns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Cultural Respect</CardTitle>
                  <CardDescription>เคารพความหลากหลาย</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>We accommodate different needs:</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Dietary restrictions (vegetarian, halal, etc.)</li>
                    <li>• Religious practices and preferences</li>
                    <li>• Language and communication preferences</li>
                    <li>• Cultural celebrations and traditions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-primary">
              Families We Serve / ครอบครัวที่เราดูแล
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We have experience caring for families from various countries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {countries.map((country, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold">{country}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">
              Let Us Care for Your Loved Ones
            </h2>
            <h3 className="text-2xl mb-6">
              ให้เราดูแลคนที่คุณรัก
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Contact us for a free consultation in English or Thai<br />
              <span className="text-base">
                ติดต่อเราเพื่อปรึกษาฟรีในภาษาอังกฤษหรือภาษาไทย
              </span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact / ติดต่อ
                </Button>
              </Link>
              <a href="https://wa.me/66XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
