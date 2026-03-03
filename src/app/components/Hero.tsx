import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Heart, Shield, Home } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1608979827489-2b855e79debe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwaG9tZSUyMGVsZGVybHklMjBjYXJlfGVufDF8fHx8MTc3MjMwMDc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Evercare Nursing Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            ดูแลด้วยรัก อบอุ่นใจ<br />
            เหมือนใกล้ชิดครอบครัว
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            บ้านพักผู้สูงอายุ Evercare มอบการดูแลที่เต็มเปี่ยมด้วยความรักและความใส่ใจ 
            ในบรรยากาศที่อบอุ่นเหมือนบ้านของคุณเอง
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold">อบอุ่น</div>
                <div className="text-sm text-white/80">Warmth</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold">ปลอดภัย</div>
                <div className="text-sm text-white/80">Safety</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold">มั่นคง</div>
                <div className="text-sm text-white/80">Stability</div>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            ติดต่อสอบถาม
          </Button>
        </div>
      </div>
    </section>
  );
}
