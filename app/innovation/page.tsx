"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  BoltIcon, 
  CpuChipIcon, 
  LightBulbIcon, 
  BeakerIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function InnovationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#1B2441] text-white overflow-hidden relative">
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full bg-[#0078B7]/10 skew-x-12 translate-x-20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Innovation <span className="text-[#0078B7]">Créative</span></h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                L'innovation technologique au service de la créativité. Nous explorons les nouvelles frontières numériques pour amplifier l'expression culturelle.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-[#1B2441] flex items-center gap-3">
              <BoltIcon className="w-10 h-10 text-[#0078B7]" />
              Notre Vision de l'Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              Pour SUSUNI LAB, l'innovation n'est pas une fin en soi, mais un levier puissant pour amplifier les voix culturelles et créer des solutions durables pour les talents africains. Nous marions technologie de pointe et besoins réels du marché.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-[#0078B7]/10 text-[#0078B7] rounded-full text-sm font-bold mb-6 tracking-widest">PROJET PHARE</div>
              <h2 className="text-5xl font-black mb-6 text-[#1B2441]">FASHLINK</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                FASHLINK est notre solution technologique majeure dédiée à l'écosystème de la mode. Elle connecte les créateurs, les mannequins et les professionnels du secteur pour fluidifier les collaborations et professionnaliser les échanges.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "Gestion de portfolio numérique haute fidélité",
                  "Networking professionnel ciblé et sécurisé",
                  "Optimisation en temps réel des opportunités de carrière"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 text-lg">
                    <div className="w-6 h-6 bg-[#0078B7] rounded-full flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-5 bg-[#1B2441] text-white font-black rounded-2xl hover:bg-[#0078B7] transition-all transform hover:scale-105 shadow-2xl shadow-[#1B2441]/20 flex items-center gap-3">
                Découvrir FASHLINK
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 bg-gray-50 aspect-square rounded-[3rem] overflow-hidden flex items-center justify-center border border-gray-100 shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0078B7]/5 to-transparent"></div>
              <span className="text-gray-100 text-8xl font-black tracking-tighter opacity-50 absolute">FL</span>
              <span className="text-[#1B2441] text-6xl font-black relative z-10 tracking-tighter">FASHLINK</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-[#0078B7] group-hover:bg-[#0078B7] group-hover:text-white transition-all">
                <CpuChipIcon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">IA & Arts</h2>
              <p className="text-gray-600 leading-relaxed text-lg">Recherche et développement sur l'usage éthique et créatif de l'intelligence artificielle pour magnifier les arts visuels africains.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-[#0078B7] group-hover:bg-[#0078B7] group-hover:text-white transition-all">
                <BeakerIcon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Solutions Durables</h2>
              <p className="text-gray-600 leading-relaxed text-lg">Conception d'outils et d'infrastructures numériques pensés pour les réalités et les besoins spécifiques des marchés locaux.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}