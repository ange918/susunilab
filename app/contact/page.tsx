import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#1B2441] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Contactez-<span className="text-[#0078B7]">nous</span></h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-80">
              Une question, un projet ou juste envie de dire bonjour ? Notre équipe est à votre écoute.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-gray-700 mb-8">
                Une question, un projet ou juste envie de dire bonjour ? Notre équipe est à votre écoute.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#0078B7] uppercase tracking-wider text-sm">Adresse</h3>
                  <p className="text-lg">Cotonou, Bénin</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0078B7] uppercase tracking-wider text-sm">Email</h3>
                  <p className="text-lg">hello@susunilab.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0078B7] uppercase tracking-wider text-sm">Réseaux Sociaux</h3>
                  <p className="text-lg">Instagram / LinkedIn</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none" placeholder="Nom" />
                <input type="email" className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none" placeholder="Email" />
              </div>
              <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none" placeholder="Sujet" />
              <textarea rows={6} className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0078B7] outline-none" placeholder="Votre message"></textarea>
              <button className="px-12 py-4 bg-[#1B2441] text-white font-bold rounded-xl hover:bg-[#0078B7] transition-all transform hover:scale-105">Envoyer le message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}