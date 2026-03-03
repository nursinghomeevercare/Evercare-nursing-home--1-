import { Logo } from "./Logo";
import { Heart } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4 [&_span]:text-white [&_.text-muted-foreground]:text-gray-400">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm">
              ดูแลด้วยรัก อบอุ่นใจ<br />
              เหมือนใกล้ชิดครอบครัว
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">เมนูหลัก</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  หน้าหลัก
                </Link>
              </li>
              <li>
                <Link to="/nursing-home-bangkok" className="hover:text-white transition-colors">
                  บ้านพักคนชราในกรุงเทพ
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  ราคา
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  บทความ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">ข้อมูลติดต่อ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>ถนนจรัญสนิทวงศ์</li>
              <li>กรุงเทพมหานคร</li>
              <li className="mt-3">โทร: 02-XXX-XXXX</li>
              <li>อีเมล: contact@evercare.th</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            © 2026 Evercare Nursing Home. สงวนลิขสิทธิ์. 
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> for your loved ones
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}