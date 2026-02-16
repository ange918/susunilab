"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  RocketLaunchIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function LearningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-[#0078B7] text-white overflow-hidden relative">
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Learning & <span className="text-[#1B2441]">Transmission</span></h1>
              <div className="w-24 h-2 bg-[#1B2441] mb-8"></div>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                La transmission des savoirs stratégiques au cœur de notre démarche. Nous formons la prochaine génération de leaders créatifs africains.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-10 text-[#1B2441] flex items-center gap-3">
                <AcademicCapIcon className="w-10 h-10 text-[#0078B7]" />
                Formations & Coaching
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-50 text-[#1B2441] rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#1B2441] group-hover:text-white transition-all duration-300">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1B2441]">Masterclasses Stratégiques</h3>
                    <p className="text-gray-600 leading-relaxed">Des sessions intensives pour maîtriser les codes de la communication et du branding créatif avec des experts du domaine.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-50 text-[#1B2441] rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#1B2441] group-hover:text-white transition-all duration-300">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1B2441]">Ateliers Pratiques</h3>
                    <p className="text-gray-600 leading-relaxed">Apprentissage par l'action sur des thématiques allant du design thinking à la gestion de projet culturel complexe.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-50 text-[#1B2441] rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#1B2441] group-hover:text-white transition-all duration-300">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1B2441]">Mentorat Personnalisé</h3>
                    <p className="text-gray-600 leading-relaxed">Accompagnement individuel et suivi de carrière pour les étudiants et jeunes talents du secteur créatif.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-10 text-[#1B2441] flex items-center gap-3 relative z-10">
                <BookOpenIcon className="w-10 h-10 text-[#0078B7]" />
                Ressources & Éditions
              </h2>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center mb-8 relative z-10 hover:shadow-2xl transition-all group">
                <div className="w-32 h-44 relative rounded-xl shadow-2xl flex-shrink-0 transform group-hover:rotate-2 transition-transform overflow-hidden">
                  <Image
                    src="/ebook/cover.jpg"
                    alt="Et si tu devenais Mannequin ?"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-3 text-[#1B2441]">Et si tu devenais mannequin</h4>
                  <p className="text-gray-500 mb-6 leading-relaxed text-sm italic">"Un guide complet pour naviguer l'industrie avec professionnalisme, de l'image personnelle au développement de carrière."</p>
                  <Link href="/learning/ebook-mannequin" className="flex items-center gap-2 text-[#0078B7] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                    Découvrir l'e-book <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic text-center relative z-10">D'autres ressources exclusives en cours de préparation.</p>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0078B7]/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-[#1B2441] text-white p-16 rounded-[3rem] text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <RocketLaunchIcon className="w-16 h-16 text-[#0078B7] mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">FORMATIONS EN PRÉPARATION</h2>
              <p className="text-xl opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed">Nous préparons actuellement des programmes intensifs pour former les futurs directeurs artistiques de l'écosystème créatif africain.</p>
              <div className="inline-block px-10 py-4 bg-[#0078B7] rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-[#0078B7]/20">
                Bientôt disponible
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0078B7]/10 to-transparent animate-pulse"></div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}