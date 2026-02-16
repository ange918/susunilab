"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24 transition-colors duration-300">
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#1B2441] mb-8 leading-tight">
                À Propos de <span className="text-[#0078B7]">SUSUNI LAB</span>
              </h1>
              <div className="w-24 h-2 bg-[#0078B7] mb-8"></div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Fondé au Bénin avec une ambition internationale, **SUSUNI LAB** est né d'une volonté profonde : raconter l'Afrique de demain à travers le prisme de la créativité, de la stratégie et de l'innovation. Nous sommes un laboratoire hybride où les idées prennent vie pour transformer les industries créatives.
              </p>
              <p>
                Notre vision est celle d'une Afrique audacieuse, capable de définir ses propres standards et de rayonner mondialement par son excellence. Nous croyons que la culture et la technologie sont les deux moteurs essentiels de cette renaissance.
              </p>
              <p>
                En tant que laboratoire, notre mission est triple : **explorer** les richesses culturelles inexplorées, **accompagner** les marques et talents vers l'excellence stratégique, et **transmettre** les savoirs nécessaires pour structurer l'avenir créatif du continent.
              </p>
              <p>
                Que nous travaillions localement au Bénin ou avec des partenaires internationaux, notre approche reste la même : une rigueur sans faille, une authenticité radicale et une quête permanente d'impact durable.
              </p>
            </div>
            </motion.div>
            <motion.div 
              className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="absolute inset-0 bg-[#1B2441]/10 group-hover:bg-transparent transition-colors duration-500"></div>
               {/* Illustration ou image d'ambiance à venir */}
               <div className="absolute inset-0 flex items-center justify-center text-[#1B2441]/20 font-bold text-4xl">
                 CREATIVITÉ • VISION
               </div>
            </motion.div>
          </div>

          <div className="mt-32">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1B2441] mb-4">Notre Équipe</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des passionnés dédiés à l'excellence et à l'innovation.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "Merveille Susuni ATTINMAGBO",
                  role: "Fondateur & Directeur SUSUNI LAB",
                  image: "/team/merveille.jpg",
                },
                {
                  name: "Bienvenue Kpessèton BADOU",
                  role: "Fashion Industry Advisor",
                  image: "/team/bienvenue.jpg",
                },
                {
                  name: "AKITA Steven",
                  role: "UX/UI Designer",
                  image: "/team/steven.jpg",
                },
                {
                  name: "Hermann Richy",
                  role: "Software Engineer",
                  image: "/team/hermann.jpg",
                },
                {
                  name: "Ange AKONDE",
                  role: "Full-Stack Web Developer",
                  image: "/team/ange.jpg",
                },
                {
                  name: "ORE Gauthier",
                  role: "Community Manager",
                  image: "/team/gauthier.jpg",
                },
              ].map((member, idx) => (
                <motion.div 
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-[#1B2441] leading-tight mb-1">{member.name}</h3>
                    <p className="text-[#0078B7] text-xs font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-32">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1B2441] mb-4">Notre Vision & Engagement</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Quatre piliers fondamentaux qui guident chacune de nos actions et définissent notre identité.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <motion.div 
                 className="bg-[#1B2441] text-white p-8 rounded-2xl flex flex-col h-full transform transition-transform hover:-translate-y-2"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
               >
                  <div className="w-12 h-12 bg-[#0078B7] rounded-full flex items-center justify-center mb-6">
                    <span className="text-xl font-bold">01</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">La Vision</h3>
                  <p className="opacity-80 leading-relaxed flex-grow">Être le catalyseur de la nouvelle vague créative et intellectuelle africaine, en connectant traditions et futurisme pour un rayonnement mondial.</p>
               </motion.div>
               <motion.div 
                 className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl flex flex-col h-full transform transition-transform hover:-translate-y-2"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                  <div className="w-12 h-12 bg-[#1B2441] text-white rounded-full flex items-center justify-center mb-6">
                    <span className="text-xl font-bold">02</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1B2441]">La Mission</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">Accompagner les acteurs de demain par l'innovation, le conseil et la transmission de savoirs stratégiques à fort impact.</p>
               </motion.div>
               <motion.div 
                 className="bg-[#0078B7] text-white p-8 rounded-2xl flex flex-col h-full transform transition-transform hover:-translate-y-2"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
               >
                  <div className="w-12 h-12 bg-white text-[#0078B7] rounded-full flex items-center justify-center mb-6">
                    <span className="text-xl font-bold">03</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Les Valeurs</h3>
                  <p className="opacity-90 leading-relaxed flex-grow">Excellence sans compromis, authenticité radicale, audace créative et impact social durable à travers la culture et l'innovation.</p>
               </motion.div>
               <motion.div 
                 className="bg-gray-100 p-8 rounded-2xl flex flex-col h-full transform transition-transform hover:-translate-y-2 border border-transparent"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
               >
                  <div className="w-12 h-12 bg-[#1B2441] text-white rounded-full flex items-center justify-center mb-6">
                    <span className="text-xl font-bold">04</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1B2441]">L'Approche</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">Une méthodologie hybride alliant rigueur stratégique, intuition créative et une compréhension profonde des contextes locaux.</p>
               </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
