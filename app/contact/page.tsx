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
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                Une question, un projet ou juste envie de dire bonjour ? Notre équipe est à votre écoute pour donner vie à vos ambitions créatives.
              </p>
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#0078B7] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B2441] text-sm uppercase tracking-widest mb-1">Email</h3>
                    <p className="text-lg text-gray-600">contact.susunilabs@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#0078B7] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B2441] text-sm uppercase tracking-widest mb-1">Téléphone</h3>
                    <p className="text-lg text-gray-600">+229 01 64469119</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#0078B7] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B2441] text-sm uppercase tracking-widest mb-1">Localisation</h3>
                    <p className="text-lg text-gray-600">Cotonou, Bénin</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1B2441] text-sm uppercase tracking-widest mb-4">Suivez notre aventure</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1B2441] text-white flex items-center justify-center hover:bg-[#0078B7] transition-colors shadow-lg shadow-[#1B2441]/20">IN</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1B2441] text-white flex items-center justify-center hover:bg-[#0078B7] transition-colors shadow-lg shadow-[#1B2441]/20">IG</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1B2441] text-white flex items-center justify-center hover:bg-[#0078B7] transition-colors shadow-lg shadow-[#1B2441]/20">FB</a>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-50 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nom</label>
                  <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#0078B7] outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input type="email" className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#0078B7] outline-none transition-all" placeholder="votre@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Sujet</label>
                <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#0078B7] outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows={6} className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#0078B7] outline-none transition-all resize-none" placeholder="Décrivez votre projet ou votre demande..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-[#1B2441] text-white font-bold rounded-xl hover:bg-[#0078B7] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#1B2441]/20 flex items-center justify-center gap-3">
                <span>Envoyer le message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}