import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StrategyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-[#1B2441] mb-8 leading-tight">Stratégie & <span className="text-[#0078B7]">Conseil</span></h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Accompagnement stratégique pour marques et institutions. Nous transformons les visions en stratégies d'impact durable.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Branding Culturel</h2>
              <p>Développement d'identités fortes ancrées dans le territoire.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Ingénierie Culturelle</h2>
              <p>Conception et structuration de projets d'envergure.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}