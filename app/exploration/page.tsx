"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  GlobeAltIcon, 
  SparklesIcon, 
  PhotoIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function ExplorationPage() {
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
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Exploration <span className="text-[#0078B7]">Culturelle</span></h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                Plongez dans les racines et l'avenir de la culture africaine avec SUSUNI LAB. Nous explorons les récits, les formes et les sons qui définissent notre identité.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#0078B7] rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:rotate-12 transition-transform">
                <GlobeAltIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Tourisme & Culture</h2>
              <p className="text-gray-600">Exploration approfondie du patrimoine béninois, de ses sites historiques et de ses richesses culturelles inexplorées.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#0078B7] rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:rotate-12 transition-transform">
                <SparklesIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Artisanat & Savoir-faire</h2>
              <p className="text-gray-600">Mise en lumière des artisans locaux et préservation du patrimoine immatériel à travers la documentation visuelle.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#0078B7] rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:rotate-12 transition-transform">
                <PhotoIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B2441]">Galerie Visuelle</h2>
              <p className="text-gray-600">Une collection immersive de projets artistiques, photos et vidéos témoignant de la vitalité créative du territoire.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-[#1B2441]">Projets en cours & Réalisations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1B2441]/5 group-hover:bg-[#1B2441]/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-2 bg-white text-[#1B2441] font-bold rounded-lg shadow-xl">Découvrir</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Immersion Patrimoine
                  <ChevronRightIcon className="w-5 h-5 text-[#0078B7]" />
                </h3>
                <p className="text-gray-500">Documentation numérique des sites historiques majeurs du Sud-Bénin.</p>
              </motion.div>
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1B2441]/5 group-hover:bg-[#1B2441]/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-2 bg-white text-[#1B2441] font-bold rounded-lg shadow-xl">Découvrir</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Les Mains du Bénin
                  <ChevronRightIcon className="w-5 h-5 text-[#0078B7]" />
                </h3>
                <p className="text-gray-500">Série documentaire sur les techniques ancestrales de tissage et de poterie.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}