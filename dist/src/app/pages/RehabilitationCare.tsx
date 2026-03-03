import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Activity, Heart, Zap, Target, TrendingUp, User } from "lucide-react";

export default function RehabilitationCare() {
  const programs = [
    {
      icon: Activity,
      title: "กายภาพบำบัด",
      description: "ฟื้นฟูการเคลื่อนไหว เสริมสร้างกำลังกล้ามเนื้อ เดิน ยืน นั่ง"
    },
    {
      icon: Heart,
      title: "กิจกรรมบำบัด",
      description: "ฝึกทักษะการใช้ชีวิตประจำวัน เช่น กิน แต่งตัว อาบน้ำ"
    },
    {
      icon: Zap,
      title: "กระตุ้นสมอง",
      description: "ฟื้นฟูการพูด ความจำ การคิดวิเคราะห์ หลังโรค Stroke"
    },
    {
      icon: Target,
      title: "ฝึกการทรงตัว",
      description: "ป้องกันการล้ม เสริมสร้างความมั่นคงในการยืนและเดิน"
    },
    {
      icon: TrendingUp,
      title: "ติดตามความก้าวหน้า",
      description: "ประเมินผลและปรับแผนการรักษาอย่างต่อเนื่อง"
    },
    {
      icon: User,
      title: "นักกายภาพบำบัด",
      description: "ทีมผู้เชี่ยวชาญที่มีประสบการณ์ดูแลผู้ป่วยหลัง Stroke"
    }
  ];

  const conditions = [
    {
      title: "หลังผ่าตัด",
      examples: "ผ่าตัดกระดูก ข้อเข่า สะโพก หัวใจ"
    },
    {
      title: "Stroke (อัมพาต)",
      examples: "อัมพาตครึ่งซีก พูดไม่ชัด กลืนลำบาก"
    },
    {
      title: "หัก-เคลื่อน",
      examples: "กระดูกหัก ข้อเคลื่อน บาดเจ็บจากอุบัติเหตุ"
    },
    {
      title: "โรคประสาท",
      examples: "พาร์กินสัน MS (Multiple Sclerosis)"
    }
  ];

  const phases = [
    {
      phase: "ระยะแรก (สัปดาห์ที่ 1-2)",
      focus: "ประเมินสภาพ เริ่มฝึกเบื้องต้น",
      activities: "เคลื่อนไหวข้อต่อ นวดเพื่อป้องกันกล้ามเนื้อฝ่อ"
    },
    {
      phase: "ระยะกลาง (สัปดาห์ที่ 3-8)",
      focus: "เสริมสร้างกำลัง ฝึกการเดิน",
      activities: "ฝึกลุก นั่ง ยืน เดินด้วยอุปกรณ์ช่วย"
    },
    {
      phase: "ระยะฟื้นฟู (เดือนที่ 3+)",
      focus: "กลับสู่ชีวิตประจำวัน",
      activities: "ฝึกทักษะต่างๆ เพื่อดูแลตนเองได้"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Post-Surgery & Stroke Rehabilitation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              ฟื้นฟูผู้ป่วยหลังผ่าตัด/Stroke
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              โปรแกรมฟื้นฟูสมรรถภาพแบบเฉพาะบุคคล<br />
              ช่วยให้ผู้ป่วยกลับมาใช้ชีวิตได้อย่างมีคุณภาพ
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  ปรึกษาโปรแกรมฟื้นฟู
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  ดูราคา
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              โปรแกรมฟื้นฟูสมรรถภาพ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ครอบคลุมทุกด้านของการฟื้นฟู จากกายภาพจนถึงการใช้ชีวิตประจำวัน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              เรารับฟื้นฟูผู้ป่วย
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {conditions.map((condition, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{condition.title}</CardTitle>
                  <CardDescription className="text-base">
                    {condition.examples}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phases of Rehabilitation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              ระยะของการฟื้นฟู
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              แผนการฟื้นฟูแบบค่อยเป็นค่อยไป เพื่อผลลัพธ์ที่ยั่งยืน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {phases.map((item, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-center">{item.phase}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">เป้าหมาย:</h4>
                    <p className="text-sm text-muted-foreground">{item.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">กิจกรรม:</h4>
                    <p className="text-sm text-muted-foreground">{item.activities}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-primary">
              ความสำเร็จของผู้ป่วย
            </h2>
            <Card className="border-2 border-secondary/30">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">85%</div>
                    <p className="text-sm text-muted-foreground">
                      ผู้ป่วยฟื้นฟูจนสามารถ<br />ช่วยเหลือตัวเองได้
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3-6</div>
                    <p className="text-sm text-muted-foreground">
                      เดือนเฉลี่ย<br />ในการฟื้นฟู
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">
                      ความพึงพอใจ<br />จากครอบครัว
                    </p>
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
              เริ่มต้นการฟื้นฟูวันนี้
            </h2>
            <p className="text-xl mb-8 text-white/90">
              ยิ่งเริ่มเร็ว โอกาสฟื้นฟูยิ่งดี<br />
              ปรึกษานักกายภาพบำบัดของเราฟรี
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
