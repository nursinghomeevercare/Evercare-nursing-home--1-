import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Heart, Shield, Users, Clock, MapPin, Phone } from "lucide-react";

export default function NursingHomePage() {
  const features = [
    {
      icon: Users,
      title: "ทีมงานมืออาชีพ",
      description: "พยาบาลและผู้ดูแลที่มีประสบการณ์ยาวนาน พร้อมให้การดูแลด้วยความใส่ใจ"
    },
    {
      icon: Clock,
      title: "ดูแลตลอด 24 ชั่วโมง",
      description: "มีเจ้าหน้าที่คอยดูแลและเฝ้าระวังตลอดเวลา ทั้งกลางวันและกลางคืน"
    },
    {
      icon: Heart,
      title: "บรรยากาศอบอุ่น",
      description: "สภาพแวดล้อมที่เหมือนบ้าน ไม่ใช่โรงพยาบาล สร้างความรู้สึกปลอดภัยและผ่อนคลาย"
    },
    {
      icon: Shield,
      title: "มาตรฐานสูง",
      description: "ระบบความปลอดภัยที่ทันสมัย อุปกรณ์การแพทย์ครบครัน พร้อมรับมือทุกสถานการณ์"
    },
    {
      icon: MapPin,
      title: "ทำเลยุทธศาสตร์",
      description: "ใกล้โรงพยาบาลชั้นนำหลายแห่งบนถนนจรัญสนิทวงศ์ เดินทางสะดวก"
    }
  ];

  const whyChooseUs = [
    "ราคาเหมาะสมกับคุณภาพการดูแล ไม่แพงเกินไป",
    "ห้องพักสะอาด ถูกสุขลักษณะ มีอุปกรณ์ครบครัน",
    "อาหารทำสดใหม่ทุกวัน คำนึงถึงโภชนาการและสุขภาพ",
    "กิจกรรมกายภาพบำบัดและจิตบำบัดเพื่อคุณภาพชีวิตที่ดี",
    "บริการรับส่งโรงพยาบาลในกรณีที่ต้องพบแพทย์",
    "รายงานสุขภาพให้ครอบครัวทราบสม่ำเสมอ"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              บ้านพักคนชราในกรุงเทพ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Evercare Nursing Home - บ้านพักผู้สูงอายุคุณภาพ<br />
              ที่ให้การดูแลด้วยใจ เหมือนอยู่บ้านตัวเอง
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  ติดต่อสอบถาม
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  ดูราคาบริการ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              ทำไมต้องเลือก Evercare?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              บ้านพักผู้สูงอายุที่ให้มากกว่าการดูแล แต่เป็นบ้านที่อบอุ่นและปลอดภัย
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-secondary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  จุดเด่นของบ้านพักผู้สูงอายุ Evercare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-6">
              พร้อมมอบความไว้วางใจให้เราดูแลคนที่คุณรัก?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              ติดต่อเราวันนี้เพื่อนัดหมายเข้าเยี่ยมชมและปรึกษาฟรี
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Phone className="w-5 h-5 mr-2" />
                ติดต่อเราเลย
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
