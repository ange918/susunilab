import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LearningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#0078B7] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Learning & <span className="text-[#1B2441]">Transmission</span></h1>
              <div className="w-24 h-2 bg-[#1B2441] mb-8"></div>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                La transmission des savoirs stratégiques au cœur de notre démarche. Nous formons la prochaine génération de leaders créatifs africains.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Masterclasses</h2>
              <p>Formations intensives sur la stratégie créative.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Mentorat</h2>
              <p>Accompagnement personnalisé pour les créatifs émergents.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}