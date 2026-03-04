import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";
import heroImage from "../assets/happy.jpg"; 

export function About() {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "ผู้สูงอายุที่ดูแล"
    },
    {
      icon: Award,
      number: "15+",
      label: "ปีของประสบการณ์"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "ดูแลตลอด 24 ชั่วโมง"
    },
    {
      icon: Heart,
      number: "100%",
      label: "ความใส่ใจและห่วงใย"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage}
              alt="Happy Thai elderly with caregiver at Evercare Nursing Home" 
              className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-primary">
              เกี่ยวกับ Evercare
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                <span className="font-semibold text-foreground">Evercare Nursing Home</span> 
                {" "}เป็นบ้านพักผู้สูงอายุที่ให้บริการดูแลอย่างครบวงจร 
                โดยทีมพยาบาลและผู้ดูแลมืออาชีพที่มีประสบการณ์ยาวนานในการดูแลผู้สูงอายุ
              </p>
              
              <p>
                เราเชื่อว่าผู้สูงอายุทุกท่านสมควรได้รับการดูแลที่เต็มไปด้วยความรัก 
                ความเคารพ และศักดิ์ศรีในบรรยากาศที่อบอุ่นเหมือนอยู่บ้านของตนเอง
              </p>

              <p>
                ด้วยทำเลที่ตั้งบนถนนจรัญสนิทวงศ์ ใกล้กับโรงพยาบาลชั้นนำหลายแห่ง 
                ทำให้สามารถเข้าถึงการรักษาพยาบาลได้อย่างรวดเร็วในกรณีฉุกเฉิน
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
