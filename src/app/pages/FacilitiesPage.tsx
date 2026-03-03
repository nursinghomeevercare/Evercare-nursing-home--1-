import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { 
  Bed, Wifi, Tv, Coffee, Wind, Sun, Trees, Camera, 
  Phone, Utensils, Activity, Heart
} from "lucide-react";

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: Bed,
      title: "ห้องพักผู้ป่วย",
      description: "ห้องพักส่วนตัวและห้องรวม สะอาด ถูกสุขลักษณะ พร้อมเตียงไฟฟ้าปรับระดับได้"
    },
    {
      icon: Wind,
      title: "ระบบปรับอากาศ",
      description: "เครื่องปรับอากาศทุกห้อง ควบคุมอุณหภูมิที่เหมาะสมตลอดเวลา"
    },
    {
      icon: Wifi,
      title: "Wi-Fi ความเร็วสูง",
      description: "อินเทอร์เน็ตไร้สายฟรีทั่วทั้งอาคาร สำหรับผู้ป่วยและครอบครัว"
    },
    {
      icon: Tv,
      title: "ทีวีในห้องพัก",
      description: "โทรทัศน์สำหรับความบันเทิง ช่วยให้ผู้สูงอายุไม่รู้สึกเหงา"
    },
    {
      icon: Utensils,
      title: "ห้องรับประทานอาหาร",
      description: "พื้นที่รับประทานอาหารร่วมกัน สร้างบรรยากาศอบอุ่น"
    },
    {
      icon: Activity,
      title: "ห้องกายภาพบำบัด",
      description: "อุปกรณ์กายภาพบำบัดครบครัน สำหรับฟื้นฟูสมรรถภาพ"
    },
    {
      icon: Heart,
      title: "ห้องพยาบาล",
      description: "ห้องพักพยาบาลและอุปกรณ์การแพทย์เพื่อการดูแลฉุกเฉิน"
    },
    {
      icon: Coffee,
      title: "ห้องรับแขก",
      description: "พื้นที่สำหรับรับครอบครัวและญาติที่มาเยี่ยม"
    },
    {
      icon: Sun,
      title: "พื้นที่กิจกรรม",
      description: "ห้องกิจกรรมร่วม สำหรับทำกิจกรรมกลุ่มและสังสรรค์"
    },
    {
      icon: Trees,
      title: "สวนและพื้นที่พักผ่อน",
      description: "สวนสวยร่มรื่น เหมาะสำหรับพักผ่อนและออกกำลังกายเบาๆ"
    },
    {
      icon: Camera,
      title: "ระบบรักษาความปลอดภัย",
      description: "กล้อง CCTV และระบบรักษาความปลอดภัยตลอด 24 ชั่วโมง"
    },
    {
      icon: Phone,
      title: "ระบบเรียกพยาบาล",
      description: "ปุ่มกดเรียกพยาบาลในทุกห้องพัก สะดวกและรวดเร็ว"
    }
  ];

  const amenities = [
    "เตียงไฟฟ้า 3 ไก ปรับระดับได้",
    "ที่นอนลมป้องกันแผลกดทับ",
    "ตู้เสื้อผ้าส่วนตัว",
    "โต๊ะข้างเตียง",
    "ห้องน้ำส่วนตัว (บางห้อง)",
    "ราวจับในห้องน้ำ",
    "เครื่องวัดสัญญาณชีพ",
    "เครื่องดูดเสมหะ",
    "Oxygen Concentrator",
    "รถเข็นผู้ป่วย",
    "Walker และอุปกรณ์ช่วยเดิน",
    "อุปกรณ์กายภาพบำบัด"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              สิ่งอำนวยความสะดวก
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ครบครันด้วยอุปกรณ์ทันสมัยและสิ่งอำนวยความสะดวกที่ครบวงจร<br />
              เพื่อความสบายและความปลอดภัยของผู้สูงอายุ
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                นัดหมายเข้าเยี่ยมชม
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              สิ่งอำนวยความสะดวกของเรา
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ออกแบบมาเพื่อความสะดวกสบายและความปลอดภัยของผู้สูงอายุโดยเฉพาะ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <facility.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {facility.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                อุปกรณ์การแพทย์และเครื่องใช้
              </h2>
              <p className="text-lg text-muted-foreground">
                ครบครันด้วยอุปกรณ์ที่จำเป็นสำหรับการดูแลผู้สูงอายุ
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {amenities.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary mb-2">
                  มาตรฐานความปลอดภัย
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">ป้องกันอุบัติเหตุ:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• พื้นกันลื่นทั้งอาคาร</li>
                      <li>• ราวจับตามทางเดินและห้องน้ำ</li>
                      <li>• แสงสว่างเพียงพอทุกพื้นที่</li>
                      <li>• ไม่มีขั้นบันไดที่ไม่จำเป็น</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-secondary">ระบบรักษาความปลอดภัย:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• กล้อง CCTV ทั่วทั้งอาคาร</li>
                      <li>• รปภ. 24 ชั่วโมง</li>
                      <li>• ระบบเรียกพยาบาลในทุกห้อง</li>
                      <li>• ระบบดับเพลิงมาตรฐาน</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-6">
              มาเยี่ยมชมสถานที่จริง
            </h2>
            <p className="text-xl mb-8 text-white/90">
              เราเปิดให้เข้าเยี่ยมชมสถานที่และสิ่งอำนวยความสะดวกได้ฟรี<br />
              นัดหมายล่วงหน้าเพื่อรับการต้อนรับที่ดีที่สุด
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Phone className="w-5 h-5 mr-2" />
                นัดหมายเข้าเยี่ยมชม
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
