import { Link, useLocation } from "react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Globe2, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const thaiNav = [
  { path: "/", label: "หน้าแรก" },
  { path: "/nursing-home-bangkok", label: "บ้านพักคนชราในกรุงเทพ" },
  { path: "/dementia-care", label: "ดูแลผู้ป่วยสมองเสื่อม" },
  { path: "/bedbound-care", label: "ดูแลผู้ป่วยติดเตียง" },
  { path: "/rehabilitation", label: "ฟื้นฟูหลังผ่าตัด/Stroke" },
  { path: "/pricing", label: "ราคา" },
  { path: "/facilities", label: "สิ่งอำนวยความสะดวก" },
  { path: "/about", label: "เกี่ยวกับเรา" },
];

const englishNav = [
  { path: "/international#why-evercare", label: "Why Evercare" },
  { path: "/international#medical-care", label: "Medical care" },
  { path: "/international#visa-support", label: "Visa support" },
  { path: "/international#packages", label: "Packages" },
  { path: "/international#costs", label: "Extra costs" },
  { path: "/international/blog", label: "Guides" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isInternational = location.pathname === "/international";
  const navItems = isInternational ? englishNav : thaiNav;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to={isInternational ? "/international" : "/"} aria-label="Evercare home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 2xl:flex" aria-label={isInternational ? "International navigation" : "เมนูหลัก"}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="whitespace-nowrap text-sm text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-primary/20 bg-primary/5 p-1" aria-label="Language selection">
              <Globe2 className="ml-2 h-4 w-4 text-primary" />
              <Link
                to="/"
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${!isInternational ? "bg-primary text-white shadow-sm" : "text-primary hover:bg-white"}`}
                aria-label="ดูเว็บไซต์ภาษาไทย"
              >
                TH
              </Link>
              <Link
                to="/international"
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${isInternational ? "bg-primary text-white shadow-sm" : "text-primary hover:bg-white"}`}
                aria-label="View the website for international clients in English"
              >
                EN
              </Link>
            </div>

            {isInternational ? (
              <a href="https://line.me/R/ti/p/@ever_care" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                <Button className="bg-[#06C755] hover:bg-[#05b84e]"><MessageCircle className="mr-2 h-4 w-4" />LINE</Button>
              </a>
            ) : (
              <Link to="/contact" className="hidden sm:block">
                <Button className="bg-secondary hover:bg-secondary/90"><Phone className="mr-2 h-4 w-4" />ติดต่อเรา</Button>
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 hover:bg-gray-100 2xl:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-4 border-t border-border pb-3 pt-4 2xl:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to={isInternational ? "/international#contact-international" : "/contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  {isInternational ? "Contact our care team" : "ติดต่อเรา"}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
