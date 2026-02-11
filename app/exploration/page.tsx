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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0078B7] rounded-xl flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.1c0 1.1.9 2 2 2h2.5m-11-11a9 9 0 1111 11.065" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Tourisme & Culture</h2>
              <p className="text-gray-600">Exploration approfondie du patrimoine béninois, de ses sites historiques et de ses richesses culturelles inexplorées.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0078B7] rounded-xl flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Artisanat & Savoir-faire</h2>
              <p className="text-gray-600">Mise en lumière des artisans locaux et préservation du patrimoine immatériel à travers la documentation visuelle.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0078B7] rounded-xl flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Galerie Visuelle</h2>
              <p className="text-gray-600">Une collection immersive de projets artistiques, photos et vidéos témoignant de la vitalité créative du territoire.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-12 text-[#1B2441]">Projets en cours & Réalisations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-[#1B2441]/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Immersion Patrimoine</h3>
                <p className="text-gray-500">Documentation numérique des sites historiques majeurs du Sud-Bénin.</p>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-[#1B2441]/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Les Mains du Bénin</h3>
                <p className="text-gray-500">Série documentaire sur les techniques ancestrales de tissage et de poterie.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}