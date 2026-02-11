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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#1B2441]">Formations & Coaching</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2441] text-white rounded-full flex items-center justify-center font-bold">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Masterclasses Stratégiques</h3>
                    <p className="text-gray-600">Des sessions intensives pour maîtriser les codes de la communication et du branding créatif.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2441] text-white rounded-full flex items-center justify-center font-bold">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ateliers Pratiques</h3>
                    <p className="text-gray-600">Apprentissage par l'action sur des thématiques allant du design à la gestion de projet culturel.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2441] text-white rounded-full flex items-center justify-center font-bold">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mentorat Personnalisé</h3>
                    <p className="text-gray-600">Accompagnement individuel pour les étudiants et jeunes talents du secteur créatif.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-[#1B2441]">Ressources & Éditions</h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-center mb-6">
                <div className="w-24 h-32 bg-gray-200 rounded shadow-inner flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Si tu devenais mannequin</h4>
                  <p className="text-sm text-gray-500 mb-4">Guide complet sur les fondamentaux de l'image et de la carrière de mannequin.</p>
                  <button className="text-[#0078B7] font-bold text-sm hover:underline">Découvrir l'e-book →</button>
                </div>
              </div>
              <p className="text-gray-500 text-sm italic">D'autres ressources et livres blancs sont en cours de préparation pour enrichir notre bibliothèque numérique.</p>
            </div>
          </div>

          <div className="bg-[#1B2441] text-white p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">E-learning en préparation</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8">Nous structurons actuellement une plateforme d'apprentissage en ligne pour rendre nos formations accessibles partout dans le monde.</p>
            <div className="inline-block px-8 py-3 bg-[#0078B7] rounded-full font-bold">Bientôt disponible</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}