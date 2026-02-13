"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const flipWords = ["LEARNING", "INOVATION", "CONSULTING", "EXPLORATION"];

  const branches = [
    {
      id: "LEARNING",
      title: "SUSUNI LAB LEARNING",
      description:
        "Programmes de transmission et de formation pour les talents de demain.",
      link: "/learning",
      icon: <AcademicCapIcon className="w-8 h-8" />,
    },
    {
      id: "INNOVATIONS",
      title: "SUSUNI LAB INNOVATIONS",
      description:
        "Laboratoire d'idées et de solutions technologiques ancrées localement.",
      link: "/innovation",
      icon: <BoltIcon className="w-8 h-8" />,
    },

    {
      id: "CONSULTING",
      title: "SUSUNI LAB CONSULTING",
      description:
        "Accompagnement stratégique pour les institutions et entreprises créatives.",
      link: "/strategy",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
    },
    {
      id: "EXPLORATION",
      title: "SUSUNI LAB EXPLORE",
      description:
        "Recherche et exploration des dynamiques culturelles et créatives africaines.",
      link: "/exploration",
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1B2441]">
          <Image
            src="/hero-bg.jpg"
            alt="SUSUNI LAB African Vision"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B2441]/80 via-transparent to-[#1B2441]"></div>

          <motion.div
            className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              SUSUNI LAB <br />
              <FlipWords
                words={flipWords}
                className="text-[#0078B7]"
              />
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Laboratoire stratégique, culturel et innovant dédié à l'émergence
              des nouveaux imaginaires africains.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#branches"
                className="px-10 py-5 bg-[#0078B7] text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#0078B7]/30"
              >
                Explorer nos branches
              </a>
              <Link
                href="/a-propos"
                className="px-10 py-5 border-2 border-white/20 hover:border-white text-white rounded-2xl font-bold transition-all"
              >
                À propos de nous
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* SECTION À PROPOS (COURTE) */}
        <section id="propos" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-[#1B2441] mb-8 leading-tight">
                  Un laboratoire au cœur de{" "}
                  <span className="text-[#0078B7]">l'innovation africaine</span>
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  SUSUNI LAB est un laboratoire qui aide les personnes, les
                  marques et les organisations à grandir. C’est un lieu où l’on
                  crée, innove, apprend et reçoit des conseils. On y imagine des
                  idées, on teste des solutions, on forme les talents et on
                  accompagne les projets. On y offre l’opportunité de découvrir
                  d’autres cultures et créations sans oublier la découverte des
                  espaces ou site touristique.
                </p>
                <Link
                  href="/a-propos"
                  className="text-[#0078B7] font-bold inline-flex items-center hover:underline group text-lg"
                >
                  Découvrir notre histoire
                  <ChevronRightIcon className="w-6 h-6 ml-2 group-hover:ml-4 transition-all" />
                </Link>
              </motion.div>
              <motion.div
                className="md:w-1/2 relative aspect-square bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#1B2441]/10 font-black text-6xl rotate-12 select-none">
                  VISION
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2441]/5 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION VISION */}
        <section className="py-32 bg-[#1B2441] text-white overflow-hidden relative">
          <motion.div
            className="max-w-7xl mx-auto px-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
                  Notre Vision
                </h2>
                <div className="relative">
                  <p className="text-2xl md:text-4xl font-light opacity-90 leading-relaxed italic mb-16 text-blue-100 tracking-tight relative z-10">
                    "Ancrés dans les réalités du Bénin et de l'Afrique, nous
                    portons une ambition universelle : transformer la créativité
                    en levier stratégique pour l'avenir."
                  </p>
                  <div className="absolute -top-10 -left-10 text-9xl text-white/5 font-serif select-none">
                    “
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "CRÉATIVITÉ",
                    desc: "L'audace comme moteur de solutions uniques.",
                  },
                  {
                    title: "TRANSMISSION",
                    desc: "Partager les savoirs pour bâtir demain.",
                  },
                  {
                    title: "STRATÉGIE",
                    desc: "Une vision claire pour un impact durable.",
                  },
                  {
                    title: "INNOVATION",
                    desc: "Repousser les frontières du possible.",
                  },
                ].map((val, idx) => (
                  <motion.div
                    key={val.title}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-[#0078B7] font-black tracking-widest text-xl mb-4 group-hover:scale-110 transition-transform origin-left">
                      {val.title}
                    </h3>
                    <p className="text-blue-100/70 leading-relaxed">
                      {val.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0078B7] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0078B7] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </section>

        {/* BRANCHES SECTION */}
        <section id="branches" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center mb-24">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 text-[#1B2441] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              NOS PÔLES D'EXCELLENCE
            </motion.h2>
            <motion.div
              className="w-24 h-2 bg-[#0078B7] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {branches.map((branch, idx) => (
              <motion.div
                key={branch.id}
                className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-[#0078B7] mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {branch.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1B2441] leading-tight">
                  {branch.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                  {branch.description}
                </p>
                <Link
                  href={branch.link}
                  className="text-[#0078B7] font-bold inline-flex items-center hover:underline group/btn"
                >
                  En savoir plus
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover/btn:ml-4 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-[#1B2441] mb-20 tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              QUESTIONS FRÉQUENTES
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  q: "Comment puis-je collaborer avec SUSUNI LAB ?",
                  a: 'Vous pouvez nous contacter via notre page "Collaborer" pour nous soumettre vos idées de projets ou propositions de partenariat. Nous étudions chaque demande avec soin.',
                },
                {
                  q: "Quels types de formations proposez-vous ?",
                  a: "Nous proposons des masterclasses, des ateliers pratiques et des programmes de mentorat axés sur la créativité, le branding et la stratégie entrepreneuriale.",
                },
                {
                  q: "Où êtes-vous basés ?",
                  a: "Notre siège principal est à Cotonou, au Bénin, mais nous intervenons sur des projets à l'échelle internationale avec une équipe mobile et connectée.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Disclosure
                    as="div"
                    className="bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100"
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between p-8 text-left focus:outline-none hover:bg-gray-100 transition-colors">
                      <span className="text-xl font-bold text-[#1B2441]">
                        {item.q}
                      </span>
                      <ChevronDownIcon className="size-6 text-[#0078B7] transition-transform group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="px-8 pb-8 text-gray-600 text-lg leading-relaxed">
                      {item.a}
                    </DisclosurePanel>
                  </Disclosure>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION TÉMOIGNAGES */}
        <section id="temoignages" className="py-32 bg-[#1B2441] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                ILS NOUS FONT CONFIANCE
              </h2>
              <div className="w-24 h-1 bg-[#0078B7] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jean-Paul D.",
                  role: "Directeur Artistique",
                  color: "bg-blue-500",
                  text: "Une approche rafraîchissante et profondément ancrée. SUSUNI LAB a su transformer notre vision en une réalité stratégique impactante.",
                },
                {
                  name: "Aminata S.",
                  role: "Fondatrice, Tech-Heritage",
                  color: "bg-green-500",
                  text: "Leur expertise en ingénierie culturelle est unique sur le continent. Un partenaire indispensable pour nos projets d'innovation.",
                },
                {
                  name: "Marc K.",
                  role: "Consultant Stratégique",
                  color: "bg-purple-500",
                  text: "Plus qu'un laboratoire, c'est un véritable écosystème de création et de réflexion pour l'Afrique de demain.",
                },
              ].map((t, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-sm border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="mb-8">
                    <svg
                      className="w-10 h-10 text-[#0078B7] opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.11 0 2.162-.228 3.125-.635C12.446 25.176 10.375 27 8 27c-.552 0-1 .448-1 1s.448 1 1 1c3.866 0 7-3.134 7-7V16c0-4.418-3.582-8-8-8zm14 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.11 0 2.162-.228 3.125-.635C26.446 25.176 24.375 27 22 27c-.552 0-1 .448-1 1s.448 1 1 1c3.866 0 7-3.134 7-7V16c0-4.418-3.582-8-8-8z" />
                    </svg>
                  </div>
                  <p className="text-xl italic mb-10 opacity-90 leading-relaxed flex-grow">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                    <div
                      className={`w-14 h-14 ${t.color} rounded-full flex items-center justify-center text-xl font-bold shadow-lg`}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.name}</h4>
                      <p className="text-sm opacity-60 uppercase tracking-widest">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETS SECTION (PREVIEW) */}
        <section id="projets" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#1B2441] mb-6 tracking-tight">
                RÉALISATIONS
              </h2>
              <p className="text-gray-500 max-w-md text-xl leading-relaxed">
                Un aperçu des projets qui définissent notre approche du design,
                de la tech et de la culture.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projets"
                className="text-[#0078B7] font-black uppercase tracking-[0.2em] text-sm flex items-center group"
              >
                Tous les projets{" "}
                <ChevronRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expo 2025 Cotonou",
                type: "Culture & Design",
                bg: "bg-gray-100",
              },
              {
                title: "Digital Heritage Lab",
                type: "Innovation",
                bg: "bg-gray-200",
              },
              {
                title: "Strategie Territoriale",
                type: "Consulting",
                bg: "bg-gray-300",
              },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                className={`aspect-[4/5] ${p.bg} relative group overflow-hidden rounded-[2.5rem]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2441] to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-[0.3em] mb-3 block font-bold text-[#0078B7]">
                    {p.type}
                  </span>
                  <h4 className="text-3xl font-black tracking-tight">
                    {p.title}
                  </h4>
                  <button className="mt-6 px-6 py-2 border border-white/30 rounded-full text-sm hover:bg-white hover:text-[#1B2441] transition-colors">
                    Explorer
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COLLABORER SECTION */}
        <section
          id="collaborer"
          className="py-40 bg-gray-50 relative overflow-hidden"
        >
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-6 py-2 bg-blue-100 text-[#0078B7] rounded-full text-sm font-black uppercase tracking-widest mb-10">
                Partenariats
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-[#1B2441] mb-10 leading-none tracking-tighter">
                PRÊT À RÉINVENTER <br />
                L'AVENIR WITH NOUS ?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                Nous collaborons with des institutions, des marques et des
                créatifs qui partagent notre soif d'excellence et d'authenticité
                radicale.
              </p>
              <Link
                href="/collaborer"
                className="inline-flex items-center justify-center px-12 py-6 bg-[#1B2441] hover:bg-[#0078B7] text-white rounded-2xl font-black text-xl transition-all shadow-2xl hover:-translate-y-2 group"
              >
                Démarrer une collaboration
                <ChevronRightIcon className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0078B7]/5 skew-x-12 translate-x-20"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
