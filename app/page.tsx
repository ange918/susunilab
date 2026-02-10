import Image from "next/image";

export default function Home() {
  const branches = [
    {
      id: "EXPLORE",
      title: "SUSUNI LAB EXPLORE",
      description: "Recherche et exploration des dynamiques culturelles et créatives africaines.",
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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-[#1B2441]">
              SUSUNI <span className="text-[#0078B7]">LAB</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-[#0078B7] transition-colors">Accueil</a>
            <a href="#propos" className="hover:text-[#0078B7] transition-colors">À propos</a>
            <a href="#branches" className="hover:text-[#0078B7] transition-colors">Nos branches</a>
            <a href="#projets" className="hover:text-[#0078B7] transition-colors">Projets</a>
            <a href="#collaborer" className="hover:text-[#0078B7] transition-colors">Collaborer</a>
            <a href="#contact" className="hover:text-[#0078B7] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

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
              <a href="#collaborer" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#1B2441] text-white rounded-full font-semibold transition-all">
                Collaborer avec nous
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
          </div>
        </section>

        {/* BRANCHES SECTION */}
        <section id="branches" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B2441]">Nos Pôles d'Excellence</h2>
            <div className="w-20 h-1 bg-[#0078B7] mx-auto"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="text-[#0078B7] mb-6">{branch.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#1B2441]">{branch.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{branch.description}</p>
                <a href="#" className="text-[#0078B7] text-sm font-bold inline-flex items-center hover:underline">
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* VALEURS / VISION */}
        <section className="py-24 bg-[#1B2441] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Notre Vision</h2>
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed italic mb-12 text-blue-100">
              "Ancrés dans les réalités du Bénin et de l'Afrique, nous portons une ambition universelle : transformer la créativité en levier stratégique pour l'avenir."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
              <div><p className="text-3xl font-bold">Créativité</p></div>
              <div><p className="text-3xl font-bold">Transmission</p></div>
              <div><p className="text-3xl font-bold">Stratégie</p></div>
              <div><p className="text-3xl font-bold">Innovation</p></div>
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

      {/* FOOTER */}
      <footer id="contact" className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-[#1B2441] mb-6 block">
              SUSUNI <span className="text-[#0078B7]">LAB</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">Laboratoire créatif africain à portée internationale.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1B2441] hover:bg-[#0078B7] hover:text-white transition-all">LN</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1B2441] hover:bg-[#0078B7] hover:text-white transition-all">IG</a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-[#1B2441] mb-6 uppercase tracking-widest text-xs">Navigation</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#0078B7]">Accueil</a></li>
              <li><a href="#propos" className="hover:text-[#0078B7]">À propos</a></li>
              <li><a href="#branches" className="hover:text-[#0078B7]">Nos branches</a></li>
              <li><a href="#projets" className="hover:text-[#0078B7]">Projets</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#1B2441] mb-6 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:contact.susunilabs@gmail.com" className="hover:text-[#0078B7]">contact.susunilabs@gmail.com</a>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Tel:</span>
                <a href="tel:+2290164469119" className="hover:text-[#0078B7]">+229 01 64469119</a>
              </li>
              <li>Bénin / Afrique / International</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#1B2441] mb-6 uppercase tracking-widest text-xs">Newsletter</h5>
            <p className="text-xs text-gray-500 mb-4">Restez informé de nos explorations.</p>
            <div className="flex">
              <input type="email" placeholder="Votre email" className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-l-lg w-full text-sm outline-none focus:border-[#0078B7]" />
              <button className="bg-[#1B2441] text-white px-4 py-2 rounded-r-lg hover:bg-[#0078B7] transition-all">OK</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SUSUNI LAB. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
