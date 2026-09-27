"use client";
import CountUp from "../Animations/CountUp";
const metrics = [
  {
    value: "117",
    label: "وحدة IntrCooll Plus في مصنع الفنار للتيار المستمر عالي الجهد"
  },
  {
    value: "35%",
    label: "توفير في طاقة المبردات باستخام PreCooll في داماك إدجنكس",
  },
  {
    value: "49,623⃁",
    label: "توفير شهري في إكسترا الورود",
  },
  {
    value: "66%",
    label: "انخفاض في تكلفةالتبريد",
  },
  {
    value: "25°C",
    label: "تريد مستوى الهواء قبل",
  },
];

const Static = () => {
  const getNumber = (value: string) => {
    const cleaned = value.replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
  };
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#071b20] text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 42%, rgba(15, 173, 149, 0.24), transparent 24%), radial-gradient(circle at 52% 100%, rgba(18, 112, 95, 0.22), transparent 30%), linear-gradient(90deg, #050d12 0%, #071b20 38%, #041a1d 100%)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-12 flex flex-col items-start gap-4 lg:mb-16 ">
          <span
            className="inline-flex items-center justify-center rounded-full  px-3 py-1 text-[12px] font-medium text-[#0D7A62]"
            style={{ letterSpacing: "0.6px" }}
          >
            نتائج مقاسة
          </span>

          <h2
            className="text-right text-[clamp(2.2rem,3vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            مُثبت في الموقع لا في الكتالوجات.
          </h2>
          <h5
            className="text-right text-xs font-bold leading-[2] tracking-[-0.04em] text-gray-400 mr-170"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            كل رقم أدناه مأخوذ من تنفيذ فعلي لدوسان للطاقة داخل <br></br>
            المملكة.
          </h5>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-5 ">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="flex min-h-[210px] flex-col justify-end "
            >
              <div className="text-[clamp(2rem,3vw,4rem)] font-bold leading-none tracking-[-0.06em] text-white ]">
                <CountUp
                  from={0}
                  to={getNumber(metric.value)}
                  separator=","
                  direction="up"
                  duration={1}
                  delay={0}
                />
                {metric.value.replace(/[0-9,.]/g, "")}
              </div>

              <div className="mt-4 space-y-1 text-right mb-[150px]">
                <p className="text-xs leading-relaxed text-gray-400">
                  {metric.label}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Static;
