"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  LightBulbIcon, 
  PresentationChartLineIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function StrategyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 right-0 w-1/3 h-full bg-[#0078B7]/5 skew-x-12 translate-x-20"
            initial={{ opacity: 0, x: 50 }}
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
              <h1 className="text-5xl md:text-7xl font-bold text-[#1B2441] mb-8 leading-tight">Stratégie & <span className="text-[#0078B7]">Conseil</span></h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Accompagnement stratégique pour marques et institutions. Nous transformons les visions en stratégies d'impact durable.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-10 text-[#1B2441] flex items-center gap-3">
                <ShieldCheckIcon className="w-10 h-10 text-[#0078B7]" />
                Expertise & Accompagnement
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Nous accompagnons les porteurs de projets, les marques et les entrepreneurs dans la définition de leur identité et le déploiement de leur stratégie de communication. Notre méthodologie repose sur une analyse fine des enjeux culturels et une créativité rigoureuse.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div 
                  className="p-10 bg-white border border-gray-100 shadow-xl rounded-[2.5rem] hover:-translate-y-2 transition-transform group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-[#0078B7] group-hover:bg-[#0078B7] group-hover:text-white transition-all">
                    <LightBulbIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1B2441]">Branding & Image</h3>
                  <p className="text-gray-600 leading-relaxed">Création d'univers de marque puissants, de l'identité visuelle radicale au positionnement stratégique haut de gamme.</p>
                </motion.div>
                <motion.div 
                  className="p-10 bg-white border border-gray-100 shadow-xl rounded-[2.5rem] hover:-translate-y-2 transition-transform group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-[#0078B7] group-hover:bg-[#0078B7] group-hover:text-white transition-all">
                    <PresentationChartLineIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1B2441]">Communication</h3>
                  <p className="text-gray-600 leading-relaxed">Stratégies de déploiement multi-canaux pensées pour maximiser l'impact, la visibilité et la conversion de vos projets.</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-10 bg-[#1B2441] text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-8 relative z-10">Profils accompagnés</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    "Entrepreneurs créatifs ambitieux",
                    "Marques de mode & lifestyle",
                    "Institutions culturelles majeures",
                    "Projets à fort impact social"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg">
                      <div className="w-2 h-2 bg-[#0078B7] rounded-full"></div>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0078B7]/20 rounded-full blur-3xl"></div>
              </div>
              
              <motion.div 
                className="p-10 bg-[#0078B7] text-white rounded-[2.5rem] shadow-2xl group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-4">Études de cas</h3>
                <p className="opacity-90 mb-8 leading-relaxed">Découvrez comment nous avons transformé les défis complexes de nos partenaires en succès retentissants.</p>
                <button className="flex items-center gap-2 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all bg-white text-[#0078B7] px-6 py-3 rounded-xl">
                  Consulter les projets <ChevronRightIcon className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}