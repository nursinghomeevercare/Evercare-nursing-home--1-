import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Bed, Heart, Activity, Stethoscope, Shield, Droplet } from "lucide-react";

export default function BedboundCare() {
  const services = [
    {
      icon: Bed,
      title: "ดูแลแผลกดทับ",
      description: "เปลี่ยนท่านอนเป็นระยะ ใช้ที่นอนลม ดูแลแผลอย่างเหมาะสม"
    },
    {
      icon: Activity,
      title: "กายภาพบำบัด",
      description: "นวดเคลื่อนไหวข้อต่อ ป้องกันการฝ่อของกล้ามเนื้อ"
    },
    {
      icon: Droplet,
      title: "การให้อาหาร",
      description: "ให้อาหารทางสายยาง หรือช่วยเหลือการกิน ดูแลโภชนาการ"
    },
    {
      icon: Stethoscope,
      title: "ดูดเสมหะ",
      description: "ดูดเสมหะเมื่อจำเป็น ดูแลทางเดินหายใจให้โล่ง"
    },
    {
      icon: Shield,
      title: "ดูแลสุขอนามัย",
      description: "เปลี่ยนผ้าอ้อม อาบน้ำบนเตียง ทำความสะอาดร่างกาย"
    },
    {
      icon: Heart,
      title: "ติดตามอาการ",
      description: "วัดสัญญาณชีพ ตรวจอาการเปลี่ยนแปลง ประสานแพทย์"
    }
  ];

  const conditions = [
    "ผู้ป่วย Stroke (อัมพาต)",
    "ผู้ป่วยหลังผ่าตัดใหญ่",
    "ผู้สูงอายุที่เคลื่อนไหวไม่ได้",
    "ผู้ป่วยพาร์กินสัน ระยะรุนแรง",
    "ผู้ป่วยอุบัติเหตุ",
    "ผู้ป่วยโรคประสาทเรื้อรัง"
  ];

  const equipment = [
    "เตียงไฟฟ้า 3 ไก ปรับระดับได้",
    "ที่นอนลมป้องกันแผลกดทับ",
    "เครื่องดูดเสมหะ",
    "เครื่องวัดสัญญาณชีพ",
    "อุปกรณ์กายภาพบำบัด",
    "Oxygen เมื่อจำเป็น"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Bed className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Bedbound Patient Care</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              ดูแลผู้ป่วยติดเตียง
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              การดูแลผู้ป่วยที่ไม่สามารถลุกจากเตียงได้<br />
              ด้วยความเชี่ยวชาญและอุปกรณ์ทางการแพทย์ที่ครบครัน
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  ปรึกษาฟรี
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              บริการดูแลผู้ป่วยติดเตียง
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              การดูแลที่ครบวงจร เพื่อคุณภาพชีวิตที่ดีของผู้ป่วยและความสบายใจของครอบครัว
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
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
        </div>
      </section>

      {/* Conditions & Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Conditions */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  เรารับดูแลผู้ป่วย
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {conditions.map((condition, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-base">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Equipment */}
            <Card className="border-2 border-secondary/30">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  อุปกรณ์ที่พร้อมให้บริการ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {equipment.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
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

      {/* Why Important Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary mb-4">
                  ทำไมต้องมีการดูแลแบบมืออาชีพ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">ความเสี่ยงที่ต้องป้องกัน:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• แผลกดทับที่รุนแรง</li>
                      <li>• ปอดอักเสบจากการสำลัก</li>
                      <li>• กล้ามเนื้อฝ่อ ข้อติด</li>
                      <li>• ภาวะขาดอาหาร ขาดน้ำ</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-secondary">ประโยชน์ที่จะได้รับ:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• ดูแลโดยทีมมืออาชีพตลอด 24 ชม.</li>
                      <li>• ลดภาระของครอบครัว</li>
                      <li>• ป้องกันภาวะแทรกซ้อน</li>
                      <li>• คุณภาพชีวิตที่ดีขึ้น</li>
                    </ul>
                  </div>
                </div>
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
              มอบหมายการดูแลให้กับผู้เชี่ยวชาญ
            </h2>
            <p className="text-xl mb-8 text-white/90">
              เราพร้อมดูแลคนที่คุณรักด้วยความเอาใจใส่และทักษะมืออาชีพ<br />
              ติดต่อเราวันนี้เพื่อปรึกษาและประเมินสภาพผู้ป่วยฟรี
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                นัดหมายประเมินสภาพ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
