import { About as AboutSection } from "../components/About";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Heart, Users, Award, Target } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "อบอุ่น (Warmth)",
      description: "ให้การดูแลด้วยความรักและความใส่ใจ เหมือนอยู่บ้านตัวเอง"
    },
    {
      icon: Users,
      title: "ปลอดภัย (Safety)",
      description: "ระบบรักษาความปลอดภัยและการดูแลสุขภาพอย่างเข้มงวด"
    },
    {
      icon: Award,
      title: "มั่นคง (Stability)",
      description: "ทีมงานมืออาชีพและประสบการณ์ยาวนาน"
    },
    {
      icon: Target,
      title: "คุณภาพ (Quality)",
      description: "มาตรฐานการดูแลระดับสากล ราคาเป็นธรรม"
    }
  ];

  const team = [
    { role: "พยาบาลวิชาชีพ (RN)", count: "8 คน", description: "จบการพยาบาลและมีใบประกอบวิชาชีพ" },
    { role: "ผู้ช่วยพยาบาล", count: "15 คน", description: "ผ่านการอบรมดูแลผู้สูงอายุเฉพาะทาง" },
    { role: "นักกายภาพบำบัด", count: "2 คน", description: "เชี่ยวชาญการฟื้นฟูสมรรถภาพ" },
    { role: "แพทย์ที่ปรึกษา", count: "3 ท่าน", description: "แพทย์จากโรงพยาบาลชั้นนำ" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              เกี่ยวกับ Evercare
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              บ้านพักผู้สูงอายุที่ให้การดูแลด้วยใจ<br />
              พร้อมทีมงานมืออาชีพและประสบการณ์ยาวนาน
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              คุณค่าหลักของเรา
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              หลักการที่เรายึดถือในการให้บริการทุกวัน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                ทีมงานของเรา
              </h2>
              <p className="text-lg text-muted-foreground">
                ทีมผู้เชี่ยวชาญที่พร้อมดูแลคนที่คุณรัก
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{member.role}</CardTitle>
                      <span className="text-2xl font-bold text-primary">{member.count}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  พันธกิจของเรา
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-center">
                  <p className="text-xl leading-relaxed">
                    "มอบการดูแลผู้สูงอายุที่เต็มเปี่ยมด้วยความรัก<br />
                    ความเคารพ และศักดิ์ศรี<br />
                    ในบรรยากาศที่อบอุ่นเหมือนบ้านของตนเอง"
                  </p>
                  <p className="text-lg text-white/90">
                    เราเชื่อว่าทุกท่านสมควรได้รับการดูแลที่ดีที่สุด<br />
                    โดยทีมงานมืออาชีพที่ใส่ใจในทุกรายละเอียด
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-primary">
              พร้อมมอบความไว้วางใจให้เรา?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              ติดต่อเราวันนี้เพื่อนัดหมายเข้าเยี่ยมชมและพบปะทีมงาน
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  ติดต่อเรา
                </Button>
              </Link>
              <Link to="/facilities">
                <Button size="lg" variant="outline">
                  ดูสิ่งอำนวยความสะดวก
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
