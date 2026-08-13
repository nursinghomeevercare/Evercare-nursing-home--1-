import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { 
  Bed, Wifi, Tv, Coffee, Wind, Sun, Trees, Camera, 
  Phone, Utensils, Activity, Heart
} from "lucide-react";
import { useEffect } from "react";
import { SEO } from "../components/SEO";
import gardenWalkway from "../assets/facilities/evercare-nursing-home-garden-walkway-bangkok.webp";
import buildingExterior from "../assets/facilities/evercare-nursing-home-building-bangkok.webp";
import nursingHomeEntrance from "../assets/facilities/evercare-nursing-home-entrance-bangkok.webp";
import patientRoomGarden from "../assets/facilities/evercare-nursing-home-patient-room-garden-view.webp";
import adjustableBeds from "../assets/facilities/evercare-nursing-home-adjustable-beds-bangkok.webp";
import sharedCareRoom from "../assets/facilities/evercare-nursing-home-shared-care-room-bangkok.webp";
import activityCorner from "../assets/facilities/evercare-nursing-home-activity-corner-bangkok.webp";
import activityMaterials from "../assets/facilities/evercare-nursing-home-activity-materials-bangkok.webp";


export default function FacilitiesPage() {
    useEffect(() => {
    document.title = "สิ่งอำนวยความสะดวกและบรรยากาศ - Evercare Nursing Home";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ชมบรรยากาศภายในศูนย์ดูแลผู้สูงอายุ ห้องพักสะอาด อุปกรณ์การแพทย์ครบครัน และพื้นที่กิจกรรม");
    }
  }, []);

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

  const facilityPhotos = [
    {
      src: nursingHomeEntrance,
      alt: "ทางเข้า Evercare nursing home Bangkok และอาคารศูนย์ดูแลผู้สูงอายุ",
      title: "ทางเข้าและอาคาร Evercare",
      description: "ภาพสถานที่จริงบริเวณทางเข้า nursing home ของเราในกรุงเทพฯ",
      layout: "md:col-span-2 lg:col-span-2",
    },
    {
      src: buildingExterior,
      alt: "อาคาร Evercare nursing home ในกรุงเทพพร้อมพื้นที่สนามด้านหน้า",
      title: "อาคารและสนามด้านหน้า",
      description: "บรรยากาศภายนอกของศูนย์ดูแลผู้สูงอายุ Evercare",
      layout: "",
    },
    {
      src: gardenWalkway,
      alt: "สวนและทางเดินภายใน Evercare nursing home Bangkok สำหรับผู้สูงอายุ",
      title: "สวนและทางเดิน",
      description: "พื้นที่กลางแจ้งและทางเดินภายใน nursing home",
      layout: "",
    },
    {
      src: patientRoomGarden,
      alt: "ห้องพักผู้สูงอายุใน nursing home พร้อมเตียงปรับระดับและวิวสวน",
      title: "ห้องพักรับแสงธรรมชาติ",
      description: "เตียงปรับระดับและประตูหน้าต่างที่มองออกไปยังสวน",
      layout: "md:col-span-2",
    },
    {
      src: adjustableBeds,
      alt: "เตียงปรับระดับในห้องพัก Evercare nursing home Bangkok",
      title: "เตียงปรับระดับ",
      description: "พื้นที่ห้องพักจริงพร้อมตู้ข้างเตียงและแสงธรรมชาติ",
      layout: "md:col-span-2",
    },
    {
      src: sharedCareRoom,
      alt: "ห้องพักรวม Evercare nursing home สำหรับการดูแลผู้สูงอายุในกรุงเทพ",
      title: "ห้องพักรวม",
      description: "ห้องพักรวมที่จัดวางเตียงและทางเดินภายในอย่างเป็นระเบียบ",
      layout: "md:col-span-2 lg:col-span-2",
    },
    {
      src: activityCorner,
      alt: "มุมกิจกรรมสำหรับผู้สูงอายุใน Evercare nursing home Bangkok",
      title: "มุมกิจกรรม",
      description: "โต๊ะกิจกรรมและชั้นอุปกรณ์สำหรับกิจกรรมที่เหมาะสม",
      layout: "",
    },
    {
      src: activityMaterials,
      alt: "อุปกรณ์กิจกรรมและหนังสือในศูนย์ดูแลผู้สูงอายุ Evercare nursing home",
      title: "อุปกรณ์กิจกรรม",
      description: "หนังสือ เกม และอุปกรณ์สำหรับกิจกรรมภายในศูนย์",
      layout: "",
    },
  ];

  return (
    <div>
      <SEO 
  title="สิ่งอำนวยความสะดวก" 
  description="ชมบรรยากาศบ้านพักผู้สูงอายุ Evercare ห้องพักสะอาด ทันสมัย พร้อมอุปกรณ์ช่วยเหลือทางการแพทย์ครบครันเพื่อความปลอดภัยสูงสุด" 
/>
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

      {/* Authentic Facility Photo Gallery */}
      <section className="bg-[#f3f8f7] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.16em] text-secondary">ภาพสถานที่จริง</p>
            <h2 className="mb-4 text-3xl text-primary md:text-4xl">บรรยากาศ Evercare Nursing Home</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              ชมอาคาร ห้องพัก สวน และมุมกิจกรรมจริงของศูนย์ดูแลผู้สูงอายุ Evercare ในกรุงเทพฯ
            </p>
          </div>

          <div className="grid auto-rows-[19rem] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {facilityPhotos.map((photo, index) => (
              <figure key={photo.alt} className={`group relative overflow-hidden rounded-2xl bg-gray-200 shadow-sm ${photo.layout}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={index === 0 ? 1418 : undefined}
                  height={index === 0 ? 1019 : undefined}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-5 pb-5 pt-16 text-white">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{photo.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">ภาพถ่ายสถานที่จริง ปรับเฉพาะการครอป แสง และสีเพื่อการแสดงผลบนเว็บไซต์</p>
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
