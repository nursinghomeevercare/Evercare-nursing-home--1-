import { Link, useLocation } from "react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "หน้าแรก" },
    { path: "/nursing-home-bangkok", label: "บ้านพักคนชราในกรุงเทพ" },
    { path: "/dementia-care", label: "ดูแลผู้ป่วยสมองเสื่อม" },
    { path: "/bedbound-care", label: "ดูแลผู้ป่วยติดเตียง" },
    { path: "/rehabilitation", label: "ฟื้นฟูผู้ป่วยหลังผ่าตัด/Stroke" },
    { path: "/pricing", label: "ราคา" },
    { path: "/facilities", label: "สิ่งอำนวยความสะดวก" },
    { path: "/international", label: "สำหรับครอบครัวต่างชาติ" },
    { path: "/about", label: "เกี่ยวกับเรา" },
    { path: "/blog", label: "บทความ" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 hidden sm:flex">
                <Phone className="w-4 h-4 mr-2" />
                ติดต่อเรา
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  <Phone className="w-4 h-4 mr-2" />
                  ติดต่อเรา
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
