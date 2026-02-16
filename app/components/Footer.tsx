import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-[#1B2441] border-t border-gray-100 dark:border-white/10 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="relative h-12 w-40 block mb-6">
            <Image
              src="/logo.jpg"
              alt="SUSUNI LAB"
              fill
              className="object-contain object-left dark:brightness-110"
            />
          </Link>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 italic">
            Laboratoire créatif africain à portée internationale.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#1B2441] dark:text-white hover:bg-[#0078B7] hover:text-white transition-all"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#1B2441] dark:text-white hover:bg-[#0078B7] hover:text-white transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#1B2441] dark:text-white hover:bg-[#0078B7] hover:text-white transition-all"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#1B2441] dark:text-white hover:bg-[#0078B7] hover:text-white transition-all"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#1B2441] dark:text-white mb-6 uppercase tracking-widest text-xs">
            Navigation
          </h5>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#0078B7]">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-[#0078B7]">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/#branches" className="hover:text-[#0078B7]">
                Nos branches
              </Link>
            </li>
            <li>
              <Link href="/#projets" className="hover:text-[#0078B7]">
                Projets
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#1B2441] dark:text-white mb-6 uppercase tracking-widest text-xs">
            Contact
          </h5>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center">
              <span className="font-semibold mr-2 text-[#1B2441] dark:text-white">Email:</span>
              <a
                href="mailto:contact.susunilabs@gmail.com"
                className="hover:text-[#0078B7]"
              >
                contact.susunilabs@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold mr-2 text-[#1B2441] dark:text-white">Tel:</span>
              <a href="tel:+2290164469119" className="hover:text-[#0078B7]">
                +229 01 64469119
              </a>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-[#1B2441] dark:text-white">Lieu:</span>
              <span>Bénin Calavi-Bidossessi</span>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#1B2441] dark:text-white mb-6 uppercase tracking-widest text-xs">
            Newsletter
          </h5>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Restez informé de nos explorations.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 px-4 py-2 rounded-l-lg w-full text-sm outline-none focus:border-[#0078B7] dark:text-white"
            />
            <button className="bg-[#1B2441] dark:bg-[#0078B7] text-white px-4 py-2 rounded-r-lg hover:bg-[#0078B7] dark:hover:bg-[#0078B7]/80 transition-all">
              OK
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 dark:border-white/5 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} SUSUNI LAB. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
