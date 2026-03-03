import { Services } from "../components/Services";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Check, Phone } from "lucide-react";

export default function PricingPage() {
  const additionalServices = [
    { service: "บริการรับส่งโรงพยาบาล", price: "500-1,500 บาท/ครั้ง (ขึ้นอยู่กับระยะทาง)" },
    { service: "ค่าตรวจเลือด ตรวจปัสสาวะ", price: "ตามราคาจริง + ค่าบริการ 500 บาท" },
    { service: "ค่ายา เวชภัณฑ์พิเศษ", price: "ตามราคาจริง" },
    { service: "นักกายภาพบำบัดส่วนตัว", price: "800-1,200 บาท/ชั่วโมง" },
    { service: "ที่นอนลมป้องกันแผลกดทับ", price: "3,000 บาท/เดือน" },
    { service: "เครื่องดูดเสมหะ", price: "2,000 บาท/เดือน" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              ราคาบริการ
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ราคาเหมาะสม โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing from Services Component */}
      <Services />

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                บริการเสริมและค่าใช้จ่ายอื่นๆ
              </h2>
              <p className="text-lg text-muted-foreground">
                บริการพิเศษที่คิดค่าใช้จ่ายแยกตามความต้องการ
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {additionalServices.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-start gap-4 py-3 border-b last:border-b-0"
                    >
                      <span className="font-medium">{item.service}</span>
                      <span className="text-primary font-semibold text-right">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">เงื่อนไขการชำระเงิน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">การชำระเงิน:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>ชำระค่าบริการล่วงหน้าทุกต้นเดือน</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>รับชำระเงินสด โอนเงิน บัตรเครดิต</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>ออกใบเสร็จรับเงินทุกครั้ง</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">นโยบายการคืนเงิน:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>แจ้งล่วงหน้า 15 วัน หากต้องการยกเลิก</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>คืนเงินตามสัดส่วนวันที่ใช้บริการ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>ไม่คืนเงินมัดจำ (ถ้ามี)</span>
                      </li>
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
              สนใจบริการของเรา?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              ติดต่อเราเพื่อขอใบเสนอราคาที่เหมาะกับความต้องการของคุณ
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Phone className="w-5 h-5 mr-2" />
                ขอใบเสนอราคา
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
