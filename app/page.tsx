import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const branches = [
    {
      id: "EXPLORE",
      title: "SUSUNI LAB EXPLORE",
      description: "Recherche et exploration des dynamiques culturelles et créatives africaines.",
      link: "/exploration",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: "LEARNING",
      title: "SUSUNI LAB LEARNING",
      description: "Programmes de transmission et de formation pour les talents de demain.",
      link: "/learning",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "CONSULTING",
      title: "SUSUNI LAB CONSULTING",
      description: "Accompagnement stratégique pour les institutions et entreprises créatives.",
      link: "/strategy",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "INNOVATIONS",
      title: "SUSUNI LAB INNOVATIONS",
      description: "Laboratoire d'idées et de solutions technologiques ancrées localement.",
      link: "/innovation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="SUSUNI LAB African Vision"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in-up">
              SUSUNI LAB — Explorer, transmettre, conseiller et innover à partir de l’Afrique
            </h1>
            <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
              Laboratoire créatif et stratégique, nous bâtissons des ponts entre héritage culturel, innovation contemporaine et vision internationale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#branches" className="px-8 py-4 bg-[#0078B7] hover:bg-[#005c8d] text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg">
                Découvrir nos branches
              </a>
              <Link href="/a-propos" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#1B2441] text-white rounded-full font-semibold transition-all">
                À propos de nous
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
          </div>
        </section>

        {/* SECTION À PROPOS (COURTE) */}
        <section id="propos" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1B2441] mb-6">Un laboratoire au cœur de <span className="text-[#0078B7]">l'innovation africaine</span></h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  SUSUNI LAB est né de la volonté de repenser la créativité et la stratégie à partir de l'Afrique. Nous sommes un espace d'exploration où la culture rencontre la technologie pour créer des solutions à portée internationale.
                </p>
                <Link href="/a-propos" className="text-[#0078B7] font-bold inline-flex items-center hover:underline group">
                  Découvrir notre histoire
                  <svg className="w-5 h-5 ml-2 group-hover:ml-4 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold italic text-2xl">
                    [Vision Créative]
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION VISION (MISE AVANT NOS BRANCHES) */}
        <section className="py-24 bg-[#1B2441] text-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Notre Vision</h2>
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed italic mb-12 text-blue-100">
              "Ancrés dans les réalités du Bénin et de l'Afrique, nous portons une ambition universelle : transformer la créativité en levier stratégique pour l'avenir."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
              <div><p className="text-2xl md:text-3xl font-bold">Créativité</p></div>
              <div><p className="text-2xl md:text-3xl font-bold">Transmission</p></div>
              <div><p className="text-2xl md:text-3xl font-bold">Stratégie</p></div>
              <div><p className="text-2xl md:text-3xl font-bold">Innovation</p></div>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0078B7] rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0078B7] rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        </section>

        {/* BRANCHES SECTION */}
        <section id="branches" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B2441]">Nos Pôles d'Excellence</h2>
            <div className="w-20 h-1 bg-[#0078B7] mx-auto"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 group">
                <div className="text-[#0078B7] mb-6 group-hover:scale-110 transition-transform">{branch.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#1B2441]">{branch.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{branch.description}</p>
                <Link href={branch.link} className="text-[#0078B7] text-sm font-bold inline-flex items-center hover:underline">
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B2441] mb-16">Questions Fréquentes</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-bold text-[#1B2441] mb-2">Comment puis-je collaborer avec SUSUNI LAB ?</h3>
                <p className="text-gray-600">Vous pouvez nous contacter via notre page "Collaborer" pour nous soumettre vos idées de projets ou propositions de partenariat.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-bold text-[#1B2441] mb-2">Quels types de formations proposez-vous ?</h3>
                <p className="text-gray-600">Nous proposons des masterclasses, des ateliers pratiques et des programmes de mentorat axés sur la créativité et la stratégie.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-bold text-[#1B2441] mb-2">Où êtes-vous basés ?</h3>
                <p className="text-gray-600">Notre siège principal est à Cotonou, au Bénin, mais nous intervenons sur des projets à l'échelle internationale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AVIS CLIENTS SECTION */}
        <section id="avis" className="py-24 bg-[#1B2441] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Ce que disent nos partenaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-lg italic mb-6">"Une approche rafraîchissante et profondément ancrée. SUSUNI LAB a su transformer notre vision en une réalité stratégique impactante."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">Jean-Paul D.</h4>
                    <p className="text-sm opacity-60">Directeur Artistique</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-lg italic mb-6">"Leur expertise en ingénierie culturelle est unique sur le continent. Un partenaire indispensable pour nos projets d'innovation."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">Aminata S.</h4>
                    <p className="text-sm opacity-60">Fondatrice, Tech-Heritage</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-lg italic mb-6">"Plus qu'un laboratoire, c'est un véritable écosystème de création et de réflexion pour l'Afrique de demain."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">Marc K.</h4>
                    <p className="text-sm opacity-60">Consultant Stratégique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS SECTION */}
        <section id="projets" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2441] mb-4">Réalisations</h2>
              <p className="text-gray-500 max-w-md text-lg">Un aperçu des projets qui définissent notre approche du design et de la culture.</p>
            </div>
            <a href="#" className="text-[#0078B7] font-bold uppercase tracking-widest text-sm flex items-center hover:translate-x-2 transition-transform">
              Tous les projets <span className="ml-2">→</span>
            </a>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/5] bg-gray-100 relative group overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2441] to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <span className="text-xs uppercase tracking-widest mb-2 block">Culture & Design</span>
                <h4 className="text-2xl font-bold">Expo 2025 Cotonou</h4>
              </div>
            </div>
            <div className="aspect-[4/5] bg-gray-200 relative group overflow-hidden rounded-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-[#1B2441] to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
               <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <span className="text-xs uppercase tracking-widest mb-2 block">Innovation</span>
                <h4 className="text-2xl font-bold">Digital Heritage Lab</h4>
              </div>
            </div>
            <div className="aspect-[4/5] bg-gray-300 relative group overflow-hidden rounded-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-[#1B2441] to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
               <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <span className="text-xs uppercase tracking-widest mb-2 block">Consulting</span>
                <h4 className="text-2xl font-bold">Strategie Territoriale</h4>
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORER SECTION */}
        <section id="collaborer" className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-block px-4 py-1 bg-blue-100 text-[#0078B7] rounded-full text-xs font-bold uppercase tracking-widest mb-8">Partenariats</div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B2441] mb-8 leading-tight">Prêt à réinventer l'avenir avec nous ?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Nous collaborons avec des institutions, des marques et des créatifs qui partagent notre soif d'excellence et d'authenticité.</p>
            <a href="mailto:contact.susunilabs@gmail.com" className="inline-flex items-center justify-center px-10 py-5 bg-[#1B2441] hover:bg-[#2c3a66] text-white rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
              Démarrer une collaboration
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
