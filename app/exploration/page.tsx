import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ExplorationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1B2441] mb-8">Exploration Culturelle</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Plongez dans les racines et l'avenir de la culture africaine avec SUSUNI LAB.
          </p>
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