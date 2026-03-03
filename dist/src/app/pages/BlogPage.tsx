import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      title: "5 สัญญาณที่บอกว่าผู้สูงอายุควรเข้าบ้านพัก",
      excerpt: "วิธีสังเกตอาการที่บอกว่าคนในครอบครัวต้องการการดูแลเฉพาะทาง และเมื่อไรควรพิจารณาบ้านพักผู้สูงอายุ",
      category: "คำแนะนำ",
      date: "15 ก.พ. 2026",
      readTime: "5 นาที"
    },
    {
      title: "การดูแลผู้ป่วย Alzheimer's: คู่มือสำหรับครอบครัว",
      excerpt: "เข้าใจโรคสมองเสื่อมและวิธีการดูแลที่เหมาะสม พร้อมเทคนิคการสื่อสารกับผู้ป่วย",
      category: "สุขภาพ",
      date: "10 ก.พ. 2026",
      readTime: "8 นาที"
    },
    {
      title: "โภชนาการสำหรับผู้สูงอายุ: อาหารที่ควรและไม่ควรทาน",
      excerpt: "แนะนำเมนูอาหารที่เหมาะสมกับผู้สูงอายุ และสารอาหารที่จำเป็นในแต่ละวัย",
      category: "โภชนาการ",
      date: "5 ก.พ. 2026",
      readTime: "6 นาที"
    },
    {
      title: "ฟื้นฟูหลัง Stroke: ก้าวแรกสู่การกลับมามีชีวิตปกติ",
      excerpt: "โปรแกรมฟื้นฟูสมรรถภาพหลังโรคหลอดเลือดสมอง และความสำคัญของการเริ่มต้นเร็ว",
      category: "ฟื้นฟู",
      date: "1 ก.พ. 2026",
      readTime: "7 นาที"
    },
    {
      title: "วิธีป้องกันการล้มในผู้สูงอายุ",
      excerpt: "เทคนิคและการปรับสภาพแวดล้อมเพื่อลดความเสี่ยงจากการล้มซึ่งเป็นสาเหตุหลักของการบาดเจ็บ",
      category: "ความปลอดภัย",
      date: "28 ม.ค. 2026",
      readTime: "5 นาที"
    },
    {
      title: "เลือกบ้านพักผู้สูงอายุอย่างไร? 10 สิ่งที่ต้องดู",
      excerpt: "เช็คลิสต์สำคัญก่อนตัดสินใจเลือกบ้านพักผู้สูงอายุให้กับคนที่คุณรัก",
      category: "คำแนะนำ",
      date: "25 ม.ค. 2026",
      readTime: "10 นาที"
    }
  ];

  const categories = [
    { name: "ทั้งหมด", count: 6 },
    { name: "คำแนะนำ", count: 2 },
    { name: "สุขภาพ", count: 1 },
    { name: "โภชนาการ", count: 1 },
    { name: "ฟื้นฟู", count: 1 },
    { name: "ความปลอดภัย", count: 1 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              บทความและความรู้
            </h1>
            <p className="text-xl text-muted-foreground">
              ความรู้และคำแนะนำเกี่ยวกับการดูแลผู้สูงอายุ<br />
              จากทีมผู้เชี่ยวชาญของเรา
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>หมวดหมู่</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-between"
                      >
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight mb-3">
                        {article.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-sm mb-4 flex-1">
                        {article.excerpt}
                      </CardDescription>
                      <Button variant="outline" className="w-full group">
                        อ่านต่อ
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button size="lg" variant="outline">
                  โหลดบทความเพิ่มเติม
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">
              รับบทความใหม่ทุกสัปดาห์
            </h2>
            <p className="text-lg mb-8 text-white/90">
              สมัครรับข่าวสารและบทความเกี่ยวกับการดูแลผู้สูงอายุ
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button className="bg-secondary hover:bg-secondary/90">
                สมัครรับข่าวสาร
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-primary">
              ต้องการคำปรึกษาเพิ่มเติม?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              ทีมผู้เชี่ยวชาญของเราพร้อมให้คำแนะนำและตอบคำถามทุกข้อสงสัย
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                ติดต่อเรา
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
