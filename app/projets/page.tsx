"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  const completedProjects = [
    {
      title: "Et si tu devenais Mannequin ?",
      type: "E-book & Formation",
      image: "/ebook/cover.jpg",
      link: "/learning/ebook-mannequin",
      status: "Réalisé"
    }
  ];

  const ongoingProjects = [
    {
      title: "Digital Heritage Lab",
      type: "Innovation Culturelle",
      description: "Préservation numérique du patrimoine africain.",
      status: "En cours"
    },
    {
      title: "Strategie Territoriale",
      type: "Consulting",
      description: "Accompagnement des institutions locales.",
      status: "En cours"
    },
    {
      title: "Expo 2025 Cotonou",
      type: "Culture & Design",
      description: "Scénographie et identité visuelle.",
      status: "En cours"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#1B2441] mb-6 tracking-tighter">NOS RÉALISATIONS</h1>
            <div className="w-24 h-2 bg-[#0078B7]"></div>
          </motion.div>

          {/* PROJETS RÉALISÉS */}
          <div className="mb-32">
            <h2 className="text-2xl font-bold text-[#1B2441] mb-12 uppercase tracking-widest border-l-4 border-[#0078B7] pl-6">Projets Réalisés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2441] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-10 text-white">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0078B7] mb-3 block">{project.type}</span>
                    <h3 className="text-3xl font-black mb-6 tracking-tight">{project.title}</h3>
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1B2441] rounded-full font-bold text-sm hover:bg-[#0078B7] hover:text-white transition-all shadow-lg"
                    >
                      Voir les détails <ChevronRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PROJETS EN COURS */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B2441] mb-12 uppercase tracking-widest border-l-4 border-gray-300 pl-6 text-gray-400">Projets en cours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="mb-6 flex justify-between items-start">
                    <span className="px-4 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest">{project.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B2441] mb-4">{project.title}</h3>
                  <p className="text-gray-500 mb-8 flex-grow">{project.description}</p>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0078B7]">{project.type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}