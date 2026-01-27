import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="section-calm">
        <div className="container-calm">
          {/* Simple, factual title */}
          <h1 className="text-2xl md:text-3xl font-heading text-center mb-8">
            مبادرة إفطار صائم
          </h1>

          {/* Brief factual explanation - no emotional language */}
          <div className="space-y-6 text-foreground/90">
            <p>
              هذه مبادرة تطوعية لتوفير وجبات إفطار للصائمين في شهر رمضان. 
              يتم جمع التبرعات وتوزيع الوجبات على المحتاجين.
            </p>

            <p>
              المبادرة غير ربحية ولا تهدف للترويج أو الدعاية. 
              لا نعرض أهدافًا مالية أو إحصائيات أو أرقام إنجازات.
            </p>
          </div>

          {/* Donation methods - clear and factual */}
          <div className="mt-12 card-calm">
            <h2 className="text-xl font-heading mb-6">طرق التبرع</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">فودافون كاش:</span>
                <span className="font-mono text-lg" dir="ltr">01028535623</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">واتساب:</span>
                <a
                  href="https://wa.me/201028535623?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AD%D9%85%D9%84%D8%A9%20%D8%A5%D9%81%D8%B7%D8%A7%D8%B1%20%D8%B5%D8%A7%D8%A6%D9%85%20%D9%84%D8%B1%D9%85%D8%B6%D8%A7%D9%86..%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%D8%9F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-calm font-mono"
                  dir="ltr"
                >
                  01028535623
                </a>
              </div>
            </div>
          </div>

          {/* Simple navigation to other pages */}
          <div className="mt-12 flex justify-center gap-6 text-sm">
            <Link to="/donate" className="link-calm">
              صفحة التبرع
            </Link>
            <Link to="/transparency" className="link-calm">
              الشفافية والثقة
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
