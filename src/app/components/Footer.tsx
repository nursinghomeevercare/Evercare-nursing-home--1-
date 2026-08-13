import { Heart } from "lucide-react";
import { Link, useLocation } from "react-router";
import footerLogo from "../assets/Logo-footer-transparent.png";

export function Footer() {
  const location = useLocation();
  const isInternational = location.pathname.startsWith("/international");

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link to={isInternational ? "/international" : "/"} className="inline-block">
              <img src={footerLogo} alt="Evercare Nursing Home" className="h-auto w-48 object-contain brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {isInternational ? <>Personal care, warm support,<br />and a place that feels like home.</> : <>ดูแลด้วยรัก อบอุ่นใจ<br />เหมือนใกล้ชิดครอบครัว</>}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{isInternational ? "International" : "เมนูหลัก"}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {isInternational ? (
                <>
                  <li><Link to="/international" className="transition-colors hover:text-white">International care</Link></li>
                  <li><Link to="/international#packages" className="transition-colors hover:text-white">Care packages</Link></li>
                  <li><Link to="/international#visa-support" className="transition-colors hover:text-white">Visa coordination</Link></li>
                  <li><Link to="/international/blog" className="transition-colors hover:text-white">English care guides</Link></li>
                  <li><Link to="/" className="transition-colors hover:text-white">เว็บไซต์ภาษาไทย</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/" className="transition-colors hover:text-white">หน้าหลัก</Link></li>
                  <li><Link to="/nursing-home-bangkok" className="transition-colors hover:text-white">บ้านพักคนชราในกรุงเทพ</Link></li>
                  <li><Link to="/pricing" className="transition-colors hover:text-white">ราคา</Link></li>
                  <li><Link to="/blog" className="transition-colors hover:text-white">บทความ</Link></li>
                  <li><Link to="/contact" className="transition-colors hover:text-white">ติดต่อเรา</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{isInternational ? "Contact" : "ข้อมูลติดต่อ"}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Charansanitwong Road, Bangkok</li>
              <li className="pt-2">{isInternational ? "Phone" : "โทร"}: 086-324-6842, 091-010-9286, 099-939-6696</li>
              <li>{isInternational ? "Email" : "อีเมล"}: evercarenursinghome@gmail.com</li>
              <li><a href="https://line.me/R/ti/p/@ever_care" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LINE: @ever_care</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
            © 2026 Evercare Nursing Home. {isInternational ? "All rights reserved." : "สงวนลิขสิทธิ์"}
            <span className="flex items-center gap-1">Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> for your loved ones</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
