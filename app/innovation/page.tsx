import Header from "../components/Header";
import Footer from "../components/Footer";

export default function InnovationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#1B2441] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Innovation <span className="text-[#0078B7]">Créative</span></h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                L'innovation technologique au service de la créativité. Nous explorons les nouvelles frontières numériques pour amplifier l'expression culturelle.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-[#1B2441]">Notre Vision de l'Innovation</h2>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              Pour SUSUNI LAB, l'innovation n'est pas une fin en soi, mais un levier puissant pour amplifier les voix culturelles et créer des solutions durables pour les talents africains. Nous marions technologie de pointe et besoins réels du marché.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-[#0078B7]/10 text-[#0078B7] rounded-full text-sm font-bold mb-6">PROJET PHARE</div>
              <h2 className="text-4xl font-bold mb-6 text-[#1B2441]">FASHLINK</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                FASHLINK est notre solution technologique dédiée à l'écosystème de la mode. Elle connecte les créateurs, les mannequins et les professionnels du secteur pour fluidifier les collaborations et professionnaliser les échanges.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#0078B7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Gestion de portfolio numérique
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#0078B7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Networking professionnel ciblé
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#0078B7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Optimisation des opportunités de carrière
                </li>
              </ul>
              <button className="px-8 py-3 bg-[#1B2441] text-white font-bold rounded-xl hover:bg-[#0078B7] transition-colors">Découvrir FASHLINK</button>
            </div>
            <div className="order-1 lg:order-2 bg-gray-100 aspect-square rounded-3xl overflow-hidden flex items-center justify-center">
              <span className="text-gray-300 text-6xl font-black">FASHLINK</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">IA & Arts</h2>
              <p className="text-gray-600">Recherche et développement sur l'usage éthique et créatif de l'intelligence artificielle dans les arts visuels africains.</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Solutions Durables</h2>
              <p className="text-gray-600">Conception d'outils et d'infrastructures numériques pensés pour les réalités et les besoins spécifiques des marchés locaux.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}