import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, Phone, Mail, Clock, QrCode } from "lucide-react";
import LineContact from "../assets/Line.jpg" ;

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            ติดต่อเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            พร้อมให้คำปรึกษาและตอบคำถามทุกข้อสงสัย ติดต่อเราได้ทุกช่องทาง
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-primary text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <img src={LineContact}
                      alt="Line Contact @408hermp" 
                      className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">ติดต่อผ่าน LINE</CardTitle>
                    <CardDescription className="text-white/80">
                      แนะนำ - ตอบเร็วที่สุด
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  สแกน QR Code ด้านล่างเพื่อเพิ่มเราเป็นเพื่อนบน LINE
                </p>
                <p className="text-sm text-white/80">
                  • ปรึกษาได้ตลอด 24 ชั่วโมง<br />
                  • ตอบคำถามรวดเร็ว<br />
                  • นัดหมายเข้าเยี่ยมชม
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>ช่องทางการติดต่ออื่นๆ</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">โทรศัพท์</p>
                    <p className="text-muted-foreground">02-XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">อีเมล</p>
                    <p className="text-muted-foreground">contact@evercare.th</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">เวลาเยี่ยมชม</p>
                    <p className="text-muted-foreground">
                      จันทร์ - ศุกร์: 9:00 - 18:00 น.<br />
                      เสาร์ - อาทิตย์: 9:00 - 16:00 น.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      * กรุณานัดหมายล่วงหน้า
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QR Code */}
          <div className="flex flex-col justify-center">
            <Card className="border-2 border-secondary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">สแกน QR Code</CardTitle>
                <CardDescription>
                  เพื่อติดต่อเราผ่าน LINE Official Account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-6">
                  <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    {/* QR Code Placeholder */}
                    <div className="text-center p-6">
                      <QrCode className="w-48 h-48 mx-auto text-gray-300 mb-4" />
                      <p className="text-sm text-muted-foreground">
                        วาง QR Code ของ LINE OA ที่นี่
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/10 rounded-lg p-4 text-center">
                  <p className="text-sm mb-2">หรือค้นหาเราด้วย LINE ID</p>
                  <p className="text-lg font-semibold text-secondary">
                    @evercare-nursing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
