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
    name: "กลุ่มช่วยเหลือตัวเองได้ (Normal / Low Care)",
    price: "27,000",
    priceperhour : "(฿1,200/24 ชั่วโมง)",
    target: "กลุ่มผู้สูงอายุทั่วไป ช่วยเหลือตัวเองได้",
    meal: [
      "ทานอาหารได้เองปกติ",
      "กลืนได้ดี ไม่สำลัก",
      "ทานยาทางปากได้"
    ],
    care: [
      "ไม่ติดเตียง เดินได้ หรือพยุงเดินได้",
      "นั่งรถเข็นเองได้ ช่วยตัวเองได้ส่วนใหญ่",
      "เข้าห้องน้ำขับถ่ายเองได้ หรือแค่ช่วยพยุง",
      "อาการทั่วไปคงที่ สื่อสารรู้เรื่อง"
    ]
  },
  {
    name: "กลุ่มติดเตียง (ระดับต้น) (Bedridden – Oral Feeding)",
    price: "30,000",
    priceperhour : "(฿1,500/24 ชั่วโมง)",
    target: "กลุ่มติดเตียง ระดับต้น",
    meal: [
      "ทานอาหารทางปากได้",
      "ผู้ดูแลป้อนอาหารให้ได้ ไม่สำลัก",
      "ทานยาทางปากได้"
    ],
    care: [
      "ผู้ป่วยแขนขาอ่อนแรง แต่สามารถนั่งหรือยืนได้โดยมีคนช่วย",
      "เดินได้ระยะสั้น ต้องใช้ walker หรือ รถเข็น",
      "ผู้ป่วยหลังผ่าตัดกระดูกสะโพก หรือเข่า"
    ]
  },
  {
    name: "กลุ่มอัลไซเมอร์ & ติดเตียง (ระดับสูง) (High Care / Tube Feeding)",
    price: "35,000",
    priceperhour : "(฿2,000/24 ชั่วโมง)",
    target: "กลุ่มอัลไซเมอร์ & ติดเตียง ระดับสูง",
    meal: [
      "ทานอาหารเองไม่ได้",
      "ให้อาหารทางสายยาง (NG/PEG)",
      "ให้ยาทางสายยาง"
    ],
    care: [
      "ติดเตียง ช่วยเหลือตัวเองไม่ได้",
      "ต้องมีคนช่วยพลิกตะแคงตัว/มีแผลกดทับ",
      "ผู้ป่วยเจาะคอ/ต้องดูดเสมหะ",
      "ผู้อัลไซเมอร์ (หลง/ควบคุมอารมณ์ไม่ได้)",
      "ผู้ป่วยระยะประคับประคอง (Palliative)"
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
<div className="max-w-7xl mx-auto">
  <h3 className="text-2xl md:text-3xl text-center mb-12 text-primary">
    แพ็กเกจและราคา
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {packages.map((pkg, index) => (
      <Card
        key={index}
        className={`relative h-full ${
          index === 1 ? "border-secondary border-2" : ""
        }`}
      >
        {index === 1 && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm">
              แนะนำ
            </span>
          </div>
        )}

        <CardHeader className="text-center">
          <CardTitle className="text-l leading-relaxed">
            {pkg.name}
          </CardTitle>

          <div className="text-2xl font-bold text-primary mt-4">
            ฿{pkg.price}
          </div>
          <p className="text-sm text-muted-foreground">
            ต่อเดือน หรือ
          </p>
          <div className="text-xl font-bold text-primary">
            {pkg.priceperhour}
          </div>


        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-primary mb-3">
              การรับประทานอาหาร / ยา
            </h4>

            <ul className="space-y-2">
              {pkg.meal.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-3">
              ลักษณะการดูแล
            </h4>

            <ul className="space-y-2">
              {pkg.care.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
