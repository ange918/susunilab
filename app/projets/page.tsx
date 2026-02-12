"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  CameraIcon, 
  LightBulbIcon, 
  AcademicCapIcon, 
  SparklesIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

const projectCategories = [
  {
    id: "creatifs",
    title: "Projets Créatifs",
    icon: <SparklesIcon className="w-8 h-8" />,
    description: "Direction artistique, design et productions visuelles innovantes.",
    projects: [
      { title: "Symphonie Urbaine", desc: "Campagne visuelle pour une marque de mode locale.", type: "Visual Arts" },
      { title: "Identité Renaissance", desc: "Refonte d'image pour un collectif d'artistes.", type: "Branding" }
    ]
  },
  {
    id: "culturels",
    title: "Culture & Tourisme",
    icon: <GlobeAltIcon className="w-8 h-8" />,
    description: "Mise en valeur du patrimoine et promotion des destinations locales.",
    projects: [
      { title: "Route des Palais", desc: "Guide numérique interactif du patrimoine royal.", type: "Tourisme" },
      { title: "Echos d'Ancetres", desc: "Série documentaire sur les rites traditionnels.", type: "Patrimoine" }
    ]
  },
  {
    id: "formation",
    title: "Learning & Formation",
    icon: <AcademicCapIcon className="w-8 h-8" />,
    description: "Programmes éducatifs et transmission de savoirs stratégiques.",
    projects: [
      { title: "Fash-Mentors", desc: "Programme de mentorat pour designers émergents.", type: "Mentoring" },
      { title: "Elite Strategy", desc: "Masterclass sur le branding de luxe africain.", type: "Workshop" }
    ]
  },
  {
    id: "innovation",
    title: "Innovation & Tech",
    icon: <LightBulbIcon className="w-8 h-8" />,
    description: "Solutions technologiques au service des industries créatives.",
    projects: [
      { title: "FashLink Pro", desc: "Plateforme de mise en relation B2B pour la mode.", type: "Tech" },
      { title: "Art-Intelligence", desc: "Exploration des arts génératifs au Bénin.", type: "IA" }
    ]
  }
];

export default function ProjetsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#1B2441] text-white overflow-hidden relative">
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full bg-[#0078B7]/10 skew-x-12 translate-x-20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 20 }}
            transition={{ duration: 1 }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Projets & <span className="text-[#0078B7]">Réalisations</span></h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                Découvrez comment nous transformons les visions en réalités concrètes à travers nos différentes branches d'expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {projectCategories.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-[#0078B7] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1B2441]">{cat.title}</h3>
                <p className="text-gray-500 text-sm">{cat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Galleries Section */}
          {projectCategories.map((cat, idx) => (
            <div key={cat.id} className="mb-32">
              <motion.div 
                className="flex items-center gap-4 mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-1 bg-[#0078B7]"></div>
                <h2 className="text-3xl font-bold text-[#1B2441]">{cat.title}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {cat.projects.map((project, pIdx) => (
                  <motion.div 
                    key={project.title}
                    className="group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden mb-6 relative">
                      <div className="absolute inset-0 bg-[#1B2441]/0 group-hover:bg-[#1B2441]/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <button className="px-8 py-3 bg-white text-[#1B2441] font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          Voir le projet
                        </button>
                      </div>
                      {/* Placeholder for images */}
                      <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-lg">
                        IMAGE PROJET
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-[#0078B7] uppercase tracking-widest">{project.type}</span>
                        <h4 className="text-2xl font-bold text-[#1B2441] mt-1">{project.title}</h4>
                        <p className="text-gray-500 mt-2">{project.desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#0078B7] group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 py-24">
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#1B2441] mb-8">Vous avez un projet en tête ?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Nous sommes toujours à la recherche de nouvelles opportunités pour explorer, innover et créer de l'impact.
            </p>
            <button className="px-12 py-5 bg-[#0078B7] text-white font-bold rounded-2xl hover:bg-[#1B2441] transition-all transform hover:scale-105 shadow-xl shadow-[#0078B7]/20">
              Travaillons ensemble
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}