"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCartIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function EbookMannequinPage() {
  const points = [
    "La réalité du métier de mannequin, loin des fantasmes",
    "Comment te préparer mentalement, physiquement et professionnellement",
    "Les erreurs les plus fréquentes qui freinent une carrière",
    "Le fonctionnement réel du marché du mannequinat, local et international",
    "Quelle posture adopter pour être crédible face aux agences, créateurs et clients",
    "Comment mieux te positionner pour évoluer durablement"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        {/* HERO EBOOK */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-blue-100 text-[#0078B7] rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                E-BOOK • SUSUNI LAB LEARNING
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-[#1B2441] mb-8 leading-none">
                Et si tu devenais <br />
                <span className="text-[#0078B7]">Mannequin ?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Le guide complet pour se préparer, comprendre et affronter le marché du mannequinat. Ne vends pas du rêve, prépare ta carrière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://susunilabslearn.mychariow.shop/prd_kxuj6a"
                  target="_blank"
                  className="px-10 py-5 bg-[#1B2441] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#0078B7] transition-all shadow-xl"
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                  Acheter l'E-book
                </a>
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-2xl font-bold text-[#1B2441]">Guide Pratique</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-[3/4] bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2441] to-[#0078B7] flex items-center justify-center p-12 text-center">
                  <div className="text-white">
                    <h2 className="text-4xl font-black mb-4 uppercase">Et si tu devenais Mannequin ?</h2>
                    <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
                    <p className="text-sm uppercase tracking-widest opacity-80">Par SUSUNI LAB</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* DESCRIPTION DÉTAILLÉE */}
        <section className="bg-gray-50 py-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-700"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1B2441] mb-12 text-center">Pourquoi ce livre existe ?</h2>
              <p className="text-xl leading-relaxed mb-8 text-center">
                Le mannequinat fait rêver. Podium, campagnes, voyages, visibilité… mais derrière les images, la réalité du métier est exigeante et souvent mal comprise. 
              </p>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 mb-12">
                <p className="italic text-lg text-gray-600 border-l-4 border-[#0078B7] pl-6">
                  "Chaque année, de nombreux profils entrent dans le mannequinat sans préparation réelle, sans connaître les codes, les attentes et les réalités du marché. Résultat : erreurs évitables, opportunités manquées, découragement. Cet e-book a été écrit pour changer cela."
                </p>
              </div>
              
              <div className="space-y-8 mb-20">
                <h3 className="text-2xl font-bold text-[#1B2441]">POURQUOI CE LIVRE EXISTE?</h3>
                <p>Si tu devenais mannequin est né de la rencontre entre l’accompagnement et l’expérience du terrain. D’un côté, la vision d’un coach mannequin, confronté chaque jour aux difficultés, aux questions et aux blocages des aspirants mannequins. De l’autre, l’expérience d’un mannequin international, qui connaît les exigences du métier, les réalités des castings, des agences et du marché professionnel. Ce livre ne vend pas du rêve. Il te donne une préparation lucide, structurée et réaliste.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                <div>
                  <h3 className="text-2xl font-bold text-[#1B2441] mb-6">Ce que tu vas apprendre</h3>
                  <ul className="space-y-4">
                    {points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#0078B7] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1B2441] text-white p-10 rounded-[2.5rem]">
                  <h3 className="text-2xl font-bold mb-6">À qui s'adresse cet Ebook ?</h3>
                  <ul className="space-y-4 opacity-90">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full mt-2 shrink-0"></div>
                      <span>Tu désires devenir mannequin et tu veux comprendre le métier avant de te lancer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full mt-2 shrink-0"></div>
                      <span>Tu es mannequin débutant et tu veux éviter les erreurs courantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full mt-2 shrink-0"></div>
                      <span>Tu es déjà mannequin et tu veux mieux comprendre le marché et te repositionner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0078B7] rounded-full mt-2 shrink-0"></div>
                      <span>Tu veux aborder le mannequinat comme un vrai métier, avec méthode et sérieux.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-24 text-center">
                <div className="inline-block p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#1B2441] mb-6">✔️ Un outil de préparation, de clarté et de professionnalisation.</h3>
                  <a
                    href="https://susunilabslearn.mychariow.shop/prd_kxuj6a"
                    target="_blank"
                    className="inline-flex items-center justify-center px-12 py-6 bg-[#0078B7] text-white rounded-2xl font-black text-xl transition-all shadow-2xl hover:-translate-y-2"
                  >
                    Obtenir ma copie maintenant
                  </a>
                </div>
              </div>

              {/* CE QUE CE LIVRE N'EST PAS */}
              <div className="mt-20 p-10 bg-gray-100 rounded-[2rem] border border-gray-200">
                <h3 className="text-2xl font-bold text-[#1B2441] mb-6">Ce que ce livre n’est PAS</h3>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3">❌ Ce n’est pas une promesse de succès rapide</li>
                   <li className="flex items-center gap-3">❌ Ce n’est pas une recette magique</li>
                   <li className="flex items-center gap-3">❌ Ce n’est pas un discours enjolivé pour vendre du rêve</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}