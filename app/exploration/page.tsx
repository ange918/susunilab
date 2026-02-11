import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ExplorationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#1B2441] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Exploration <span className="text-[#0078B7]">Culturelle</span></h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                Plongez dans les racines et l'avenir de la culture africaine avec SUSUNI LAB. Nous explorons les récits, les formes et les sons qui définissent notre identité.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Patrimoine Immatériel</h2>
              <p>Documentation et valorisation des savoirs ancestraux.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Design Contemporain</h2>
              <p>Réinvention des codes esthétiques africains.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}