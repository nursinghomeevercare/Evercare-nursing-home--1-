import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Hospital, Navigation } from "lucide-react";
import HospitalPic from "../assets/nurses-senior.jpg" ;

export function Location() {
  const nearbyHospitals = [
    "โรงพยาบาลศิริราช",
    "โรงพยาบาลธนบุรี",
    "โรงพยาบาลบำรุงราษฎร์",
    "โรงพยาบาลวิชัยเวช",
    "โรงพยาบาลกรุงเทพคริสเตียน"
  ];

  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            สถานที่ตั้ง
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ทำเลทองที่เหมาะสำหรับการดูแลผู้สูงอายุ ใกล้โรงพยาบาลชั้นนำหลายแห่ง
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Location Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>ที่อยู่</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">
                  ถนนจรัญสนิทวงศ์
                </p>
                <p className="text-muted-foreground">
                  กรุงเทพมหานคร, ประเทศไทย
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Hospital className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>โรงพยาบาลใกล้เคียง</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {nearbyHospitals.map((hospital, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{hospital}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">ข้อดีของทำเลที่ตั้ง</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• เดินทางสะดวก ติดถนนใหญ่</li>
                      <li>• ใกล้โรงพยาบาลชั้นนำหลายแห่ง</li>
                      <li>• บรรยากาศเงียบสงบ เหมาะสำหรับการพักผ่อน</li>
                      <li>• ห่างจากมลพิษและความวุ่นวายในเมือง</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map/Image Placeholder */}
          <div className="lg:sticky lg:top-24">
            <Card className="overflow-hidden">
              <div className="relative h-[500px]">
                <img
                  src= {HospitalPic}
                  alt="Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    ทำเลศักยภาพสูง
                  </h3>
                  <p className="text-sm text-white/90">
                    ใกล้โรงพยาบาลและสิ่งอำนวยความสะดวกครบครัน
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
