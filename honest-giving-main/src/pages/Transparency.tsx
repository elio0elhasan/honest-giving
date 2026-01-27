import Layout from "@/components/Layout";

const Transparency = () => {
  return (
    <Layout>
      <section className="section-calm">
        <div className="container-calm">
          <h1 className="text-2xl md:text-3xl font-heading text-center mb-8">
            الشفافية والثقة
          </h1>

          {/* Organizer section */}
          <div className="card-calm">
            <h2 className="text-lg font-heading mb-6">منسق المبادرة</h2>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Organizer photo */}
              <div className="w-24 h-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <img
                  src="/photo.jpg"
                  alt="منسق المبادرة"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="text-center sm:text-right">
                <p className="text-muted-foreground mb-3">
                  يمكن التحقق من هوية المنسق عبر الروابط التالية
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <a
                    href="https://www.facebook.com/mahmoud.saad.248647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-calm text-sm"
                  >
                    الملف الشخصي على فيسبوك
                  </a>
                  <a
                    href="https://www.instagram.com/ma_saaad?igsh=MTZvMzQzOW5rODJpdA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-calm text-sm"
                  >
                    حساب انستغرام
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ethical notice */}
          <div className="mt-12 space-y-4 text-sm text-muted-foreground">
            <p>
              هذا الموقع لا يجمع بيانات شخصية ولا يستخدم تتبع أو تحليلات.
            </p>
            <p>
              لا نعرض إحصائيات أو أرقام إنجازات أو أهداف مالية.
            </p>
            <p>
              الهدف الوحيد هو تسهيل التواصل للراغبين في المساهمة.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transparency;
