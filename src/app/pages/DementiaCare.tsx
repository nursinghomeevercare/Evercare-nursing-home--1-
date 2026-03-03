import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Brain, Heart, Users, Activity, Bell, Eye } from "lucide-react";

export default function DementiaCare() {
  const careFeatures = [
    {
      icon: Brain,
      title: "กิจกรรมกระตุ้นสมอง",
      description: "กิจกรรมที่ออกแบบเฉพาะเพื่อชะลอการเสื่อมของสมอง เช่น เกมความจำ ปริศนา"
    },
    {
      icon: Users,
      title: "ดูแลเฉพาะบุคคล",
      description: "ทีมผู้ดูแลที่ผ่านการฝึกอบรมเฉพาะทางด้านผู้ป่วยสมองเสื่อม"
    },
    {
      icon: Eye,
      title: "เฝ้าระวังตลอดเวลา",
      description: "มีเจ้าหน้าที่คอยดูแลและเฝ้าระวังตลอด 24 ชั่วโมง ป้องกันการหลงทาง"
    },
    {
      icon: Heart,
      title: "สภาพแวดล้อมปลอดภัย",
      description: "ห้องพักและพื้นที่ส่วนรวมออกแบบให้ปลอดภัย ลดความเสี่ยงจากอุบัติเหตุ"
    },
    {
      icon: Activity,
      title: "กิจกรรมบำบัด",
      description: "กิจกรรมดนตรีบำบัด ศิลปะบำบัด เพื่อคุณภาพชีวิตที่ดีขึ้น"
    },
    {
      icon: Bell,
      title: "แจ้งเตือนครอบครัว",
      description: "รายงานสถานะและความเปลี่ยนแปลงให้ครอบครัวทราบสม่ำเสมอ"
    }
  ];

  const stages = [
    {
      stage: "ระยะเริ่มต้น (Early Stage)",
      symptoms: "ลืมง่าย สับสน เวลาและสถานที่",
      care: "กิจกรรมกระตุ้นความจำ ฝึกทักษะชีวิตประจำวัน"
    },
    {
      stage: "ระยะกลาง (Middle Stage)",
      symptoms: "ลืมคนในครอบครัว พฤติกรรมเปลี่ยนแปลง ต้องการความช่วยเหลือมากขึ้น",
      care: "ดูแลใกล้ชิด ช่วยเหลือในกิจวัตรประจำวัน กิจกรรมบำบัด"
    },
    {
      stage: "ระยะรุนแรง (Late Stage)",
      symptoms: "ไม่รู้จักคนใกล้ชิด พูดไม่ชัด เคลื่อนไหวลำบาก",
      care: "ดูแลแบบ 1:1 ช่วยเหลือทุกกิจกรรม ป้องกันแผลกดทับ"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Dementia & Alzheimer's Care</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              ดูแลผู้ป่วยสมองเสื่อม
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              การดูแลเฉพาะทางสำหรับผู้ป่วย Alzheimer's และภาวะสมองเสื่อม<br />
              ด้วยทีมงานมืออาชีพและความใส่ใจในทุกรายละเอียด
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  ปรึกษาฟรี
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  ดูแพ็กเกจการดูแล
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Care Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              การดูแลผู้ป่วยสมองเสื่อมของเรา
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              เราเข้าใจว่าผู้ป่วยสมองเสื่อมต้องการการดูแลที่แตกต่าง<br />
              ด้วยความอดทน ความเข้าใจ และเทคนิคเฉพาะทาง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careFeatures.map((feature, index) => (
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
        </div>
      </section>

      {/* Stages of Care */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              การดูแลตามระยะของโรค
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              แต่ละระยะของโรคมีความต้องการที่แตกต่างกัน<br />
              เราปรับแผนการดูแลให้เหมาะสมกับสภาพของผู้ป่วยแต่ละท่าน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stages.map((item, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-center text-xl">{item.stage}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">อาการ:</h4>
                    <p className="text-sm text-muted-foreground">{item.symptoms}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">การดูแล:</h4>
                    <p className="text-sm text-muted-foreground">{item.care}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-6">
              ให้เราช่วยดูแลคนที่คุณรัก
            </h2>
            <p className="text-xl mb-8 text-white/90">
              ทีมงานของเราพร้อมให้คำปรึกษาและประเมินสภาพผู้ป่วยฟรี<br />
              เพื่อวางแผนการดูแลที่เหมาะสมที่สุด
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                นัดหมายปรึกษา
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
