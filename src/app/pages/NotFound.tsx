import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            ไม่พบหน้าที่คุณค้นหา
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            ขออภัย หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่จริง
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Home className="w-5 h-5 mr-2" />
                กลับหน้าแรก
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              กลับหน้าที่แล้ว
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
