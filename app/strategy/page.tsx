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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-[#1B2441]">Expertise & Accompagnement</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous accompagnons les porteurs de projets, les marques et les entrepreneurs dans la définition de leur identité et le déploiement de leur stratégie de communication. Notre méthodologie repose sur une analyse fine des enjeux culturels et une créativité rigoureuse.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 text-[#0078B7]">Branding & Image</h3>
                  <p className="text-gray-600">Création d'univers de marque forts, de l'identité visuelle au positionnement stratégique.</p>
                </div>
                <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 text-[#0078B7]">Conseil en Communication</h3>
                  <p className="text-gray-600">Stratégies de déploiement multi-canaux pour maximiser l'impact et la visibilité de vos projets.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-[#1B2441] text-white rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Profils accompagnés</h3>
                <ul className="space-y-3 opacity-80">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full"></div>
                    Entrepreneurs créatifs
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full"></div>
                    Marques de mode & lifestyle
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full"></div>
                    Institutions culturelles
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full"></div>
                    Projets à impact social
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-[#1B2441]">Études de cas</h3>
                <p className="text-sm text-gray-500 mb-4">Découvrez comment nous avons transformé les défis de nos partenaires en succès concrets.</p>
                <button className="text-[#0078B7] font-bold text-sm hover:underline">Consulter les projets →</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}