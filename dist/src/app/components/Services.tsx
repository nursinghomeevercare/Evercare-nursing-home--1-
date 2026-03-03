import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Check, Users, Stethoscope, Utensils, Heart, Activity, Car } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "ดูแลประจำ 24 ชั่วโมง",
      description: "ทีมพยาบาลและผู้ดูแลมืออาชีพพร้อมให้บริการตลอด 24 ชั่วโมง"
    },
    {
      icon: Stethoscope,
      title: "ตรวจสุขภาพเป็นประจำ",
      description: "แพทย์เข้าตรวจสุขภาพและติดตามอาการอย่างสม่ำเสมอ"
    },
    {
      icon: Utensils,
      title: "อาหารเพื่อสุขภาพ",
      description: "อาหารสะอาด ถูกหลักโภชนาการ ปรับได้ตามความต้องการ"
    },
    {
      icon: Heart,
      title: "กิจกรรมบำบัด",
      description: "กิจกรรมกายภาพบำบัดและจิตใจบำบัดเพื่อคุณภาพชีวิตที่ดี"
    },
    {
      icon: Activity,
      title: "ติดตามอาการพิเศษ",
      description: "ดูแลเฉพาะทางสำหรับผู้ป่วยพิเศษ เช่น Stroke, Alzheimer's"
    },
    {
      icon: Car,
      title: "รถรับส่งโรงพยาบาล*",
      description: "บริการรถรับส่งไปโรงพยาบาล (คิดค่าบริการแยกตามระยะทาง)"
    }
  ];

  const packages = [
    {
      name: "แพ็กเกจมาตรฐาน",
      price: "18,000",
      features: [
        "ห้องพักส่วนตัวหรือห้องรวม",
        "ดูแลประจำ 24 ชั่วโมง",
        "อาหาร 3 มื้อ + ขนม",
        "ตรวจสุขภาพเบื้องต้น",
        "กิจกรรมบำบัดทั่วไป"
      ]
    },
    {
      name: "แพ็กเกจพิเศษ",
      price: "22,000 - 25,000",
      features: [
        "ห้องพักส่วนตัว VIP",
        "ดูแลแบบเฉพาะทาง 1:1",
        "อาหารตามแผนโภชนาการ",
        "ตรวจสุขภาพครบถ้วน",
        "กายภาพบำบัดเฉพาะโรค",
        "บริการซักรีด + ทำความสะอาด"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            บริการของเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            เราให้บริการดูแลผู้สูงอายุอย่างครบวงจรด้วยทีมงานมืออาชีพและใส่ใจในทุกรายละเอียด
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-center mb-12 text-primary">
            แพ็กเกจและราคา
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${index === 1 ? 'border-secondary border-2' : ''}`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">
                      แนะนำ
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl text-primary mt-4">
                    ฿{pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    ต่อเดือน (ราคาขึ้นอยู่กับลักษณะการดูแล)
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>* บริการรับส่งโรงพยาบาลคิดค่าใช้จ่ายแยกตามระยะทาง</p>
            <p className="mt-2">** ราคาอาจปรับเปลี่ยนตามลักษณะการดูแลเฉพาะโรคและความต้องการพิเศษ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
