import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CollaborerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#0078B7] text-white text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Collaborer <span className="text-[#1B2441]">avec nous</span></h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Rejoignez l'écosystème SUSUNI LAB pour construire ensemble le futur de la création africaine.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B2441] mb-6">Pourquoi collaborer avec nous ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              SUSUNI LAB est plus qu'un laboratoire ; c'est un écosystème dynamique où la créativité rencontre la stratégie pour générer un impact réel. Collaborer avec nous, c'est choisir l'excellence, l'innovation et une compréhension profonde des dynamiques culturelles contemporaines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#0078B7]">Partenaires</h3>
              <p className="text-gray-600 mb-6">Institutions, marques et entreprises souhaitant intégrer une dimension culturelle et stratégique forte à leurs projets.</p>
              <ul className="text-sm space-y-2 text-gray-500">
                <li>• Co-création de projets</li>
                <li>• Expertise culturelle</li>
                <li>• Rayonnement de marque</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#0078B7]">Talents</h3>
              <p className="text-gray-600 mb-6">Créatifs, artistes, designers et chercheurs audacieux désireux d'explorer de nouvelles frontières.</p>
              <ul className="text-sm space-y-2 text-gray-500">
                <li>• Résidences créatives</li>
                <li>• Visibilité internationale</li>
                <li>• Développement de carrière</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#0078B7]">Institutions</h3>
              <p className="text-gray-600 mb-6">Organisations publiques ou privées travaillant au développement des industries créatives en Afrique.</p>
              <ul className="text-sm space-y-2 text-gray-500">
                <li>• Ingénierie culturelle</li>
                <li>• Programmes d'éducation</li>
                <li>• Études d'impact</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1B2441] mb-6">Prêt à démarrer une collaboration ?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Remplissez le formulaire ci-contre pour nous faire part de votre projet. Notre équipe étudiera votre proposition et vous reviendra dans les plus brefs délais.
                </p>
                <div className="flex items-center gap-4 text-[#0078B7] font-bold">
                  <span>Rejoignez l'écosystème</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
              <form className="bg-white p-8 rounded-2xl shadow-xl space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Nom Complet / Organisation</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none" placeholder="Votre nom" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Email Professionnel</label>
                  <input type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none" placeholder="votre@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Type de collaboration</label>
                  <select className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none">
                    <option>Partenariat Marque / Institution</option>
                    <option>Collaboration Talent / Créatif</option>
                    <option>Presse / Media</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Parlez-nous de votre projet</label>
                  <textarea className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none" rows={4} placeholder="Description courte..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#1B2441] text-white font-bold rounded-lg hover:bg-[#0078B7] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#1B2441]/20">Envoyer ma proposition</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}