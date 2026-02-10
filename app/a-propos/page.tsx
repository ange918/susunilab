import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1B2441] mb-8 leading-tight">
                À Propos de <span className="text-[#0078B7]">SUSUNI LAB</span>
              </h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  SUSUNI LAB est un laboratoire créatif, stratégique, culturel et innovant basé au Bénin, avec une résonance internationale. Notre mission est d'explorer les potentiels inexploités de l'Afrique contemporaine pour proposer des solutions visionnaires.
                </p>
                <p>
                  Nous croyons en une Afrique qui ne se contente pas de suivre, mais qui définit les standards de demain à travers la créativité, la transmission de savoirs et l'excellence stratégique.
                </p>
                <p>
                  Que ce soit à travers l'exploration culturelle, l'apprentissage continu, le conseil stratégique ou l'innovation technologique, chaque projet porté par SUSUNI LAB est une brique posée pour l'édification d'un futur créatif et structuré.
                </p>
              </div>
            </div>
            <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl group">
               <div className="absolute inset-0 bg-[#1B2441]/10 group-hover:bg-transparent transition-colors duration-500"></div>
               {/* Illustration ou image d'ambiance à venir */}
               <div className="absolute inset-0 flex items-center justify-center text-[#1B2441]/20 font-bold text-4xl">
                 CREATIVITÉ • VISION
               </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="bg-[#1B2441] text-white p-10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
                <p className="opacity-80 leading-relaxed">Être le catalyseur de la nouvelle vague créative et intellectuelle africaine, en connectant traditions et futurisme.</p>
             </div>
             <div className="bg-[#0078B7] text-white p-10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="opacity-80 leading-relaxed">Accompagner les acteurs de demain par l'innovation, le conseil et la transmission de savoirs stratégiques.</p>
             </div>
             <div className="bg-gray-100 p-10 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-[#1B2441]">Nos Valeurs</h3>
                <p className="text-gray-600 leading-relaxed">Excellence, Authenticité, Audace et Impact social durable à travers la culture.</p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
