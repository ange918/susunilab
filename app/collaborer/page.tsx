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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0078B7]">Pour les Créatifs</h2>
              <p className="text-gray-600">Vous êtes un artiste, designer ou chercheur ? Collaborons sur des projets innovants.</p>
              <h2 className="text-2xl font-bold text-[#0078B7]">Pour les Marques</h2>
              <p className="text-gray-600">Vous souhaitez donner une dimension culturelle et stratégique à votre projet ? Parlons-en.</p>
            </div>
            <form className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom Complet</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-200" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full p-3 rounded-lg border border-gray-200" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type de collaboration</label>
                <select className="w-full p-3 rounded-lg border border-gray-200">
                  <option>Créatif / Artiste</option>
                  <option>Marque / Institution</option>
                  <option>Autre</option>
                </select>
              </div>
              <button className="w-full py-4 bg-[#1B2441] text-white font-bold rounded-lg hover:bg-[#0078B7] transition-colors">Envoyer ma proposition</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}