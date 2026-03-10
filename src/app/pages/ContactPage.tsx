import { Contact as ContactSection } from "../components/Contact";
import { useEffect } from "react";
export default function ContactPage() {
    useEffect(() => {
    document.title = "ติดต่อสอบถาม แผนที่ และที่ตั้ง - Evercare Nursing Home";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ติดต่อ Evercare Nursing Home เพื่อนัดหมายเข้าเยี่ยมชมสถานที่ สอบถามแผนที่การเดินทาง และข้อมูลที่ตั้งศูนย์ดูแลผู้สูงอายุย่านจรัญสนิทวงศ์");
    }
  }, []);

  return (
    <div>
      <ContactSection />
    </div>
  );
}
