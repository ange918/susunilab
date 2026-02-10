import Header from "../components/Header";
import Footer from "../components/Footer";

export default function InnovationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1B2441] mb-8">Innovation Créative</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            L'innovation technologique au service de la créativité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">IA & Arts</h2>
              <p>Exploration des frontières entre technologie et expression artistique.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Digital Arts</h2>
              <p>Création d'expériences numériques immersives.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}