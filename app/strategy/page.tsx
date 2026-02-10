import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StrategyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1B2441] mb-8">Stratégie & Conseil</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Accompagnement stratégique pour marques et institutions.
          </p>
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