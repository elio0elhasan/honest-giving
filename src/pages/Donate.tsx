import Layout from "@/components/Layout";

const Donate = () => {
  const whatsappMessage = encodeURIComponent(
    "السلام عليكم، أود المساهمة في حملة إفطار صائم لرمضان.. كيف يمكنني المساعدة؟"
  );

  return (
    <Layout>
      <section className="section-calm">
        <div className="container-calm">
          <h1 className="text-2xl md:text-3xl font-heading text-center mb-8">
            التبرع
          </h1>

          <p className="text-center text-muted-foreground mb-12">
            يمكنك المساهمة عبر إحدى الطرق التالية
          </p>

          {/* Vodafone Cash */}
          <div className="card-calm mb-6">
            <h2 className="text-lg font-heading mb-4">فودافون كاش</h2>
            <p className="font-mono text-xl" dir="ltr">
              01028535623
            </p>
          </div>

          {/* WhatsApp */}
          <div className="card-calm">
            <h2 className="text-lg font-heading mb-4">واتساب</h2>
            <p className="text-muted-foreground text-sm mb-4">
              للتواصل والاستفسار
            </p>
            <a
              href={`https://wa.me/201028535623?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors duration-200 font-heading text-sm"
            >
              فتح واتساب
            </a>
          </div>

          {/* Notice about no targets/goals */}
          <p className="mt-12 text-center text-sm text-muted-foreground">
            لا نعرض أهدافًا مالية أو مبالغ مقترحة — التبرع بأي مبلغ مقبول
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
