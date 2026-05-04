import React, { useState } from 'react';
import { Search, Menu, X, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronRight, TrendingUp, Mail } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Couleurs de la charte basée sur le logo
  const ecofinRed = "#E60000";

  // Données factices basées sur les captures d'écran
  const topArticle = {
    category: "FINANCE",
    title: "Banque Mondiale : Les prix des matières premières vont s'envoler en 2026 suite aux perturbations",
    excerpt: "L'institution a déclaré que les perspectives pour les prix des matières premières restent soumises à des risques importants, y compris une durée d'hostilités plus longue que prévue...",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    author: "Rédaction",
    time: "Il y a 2 heures"
  };

  const trendingArticles = [
    {
      category: "DÉVELOPPEMENT",
      title: "BAD en 2026 : Au-delà du débat Résilience vs Transformation",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=600"
    },
    {
      category: "ÉCOLOGIE",
      title: "Forêts d'Afrique : Quels pays détiennent les plus grandes parts ?",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=600"
    },
    {
      category: "TRANSPORT",
      title: "Lobito, TAZARA, Nacala : Comment les corridors ferroviaires influencent l'économie",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const newsFeed = [
    { title: "Le commerce Chine-Afrique en 2026 : une coopération sous tension", time: "10:30" },
    { title: "Le Soudan du Sud refuse de renouveler la licence B3 d'Oranto", time: "09:15" },
    { title: "Les prix records du tungstène placent le Rwanda devant la RDC", time: "08:45" },
    { title: "Le marathon des gorilles de Virunga : relancer des paysages uniques", time: "Hier" },
    { title: "Nosy Iranja, un ruban de sable entre deux mondes au large de Madagascar", time: "Hier" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* 1. TOP BAR (Utilitaires & CX) */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">businessincameroon.com</a>
            <a href="#" className="hover:text-white transition">togofirst.com</a>
            <a href="#" className="hover:text-white transition">wearetech.africa</a>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="hover:text-white transition">FR</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">EN</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Newsletter</a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVIGATION (UX : Hiérarchie claire) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            
            {/* Socials & Mobile Toggle */}
            <div className="flex items-center space-x-3 w-1/3">
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="hidden md:flex space-x-2 text-gray-400">
                <Facebook size={18} className="hover:text-blue-600 cursor-pointer transition" />
                <Twitter size={18} className="hover:text-black cursor-pointer transition" />
                <Linkedin size={18} className="hover:text-blue-700 cursor-pointer transition" />
              </div>
            </div>

            {/* Logo Central (UI : Modernisé textuellement pour la maquette) */}
            <div className="w-1/3 flex justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-black tracking-tighter" style={{ color: ecofinRed }}>
                  agence <span className="font-light text-gray-800">ecofin</span>
                </h1>
              </div>
            </div>

            {/* Search */}
            <div className="w-1/3 flex justify-end">
              <Search size={22} className="text-gray-600 cursor-pointer hover:text-black transition" />
            </div>
          </div>

          {/* Main Navigation (UX : Espacement et lisibilité) */}
          <nav className="hidden md:flex justify-center space-x-8 py-4 border-t border-gray-100 text-sm font-semibold text-gray-600 tracking-wide uppercase">
            <a href="#" className="text-red-600 border-b-2 border-red-600 pb-1">Accueil</a>
            <a href="#" className="hover:text-black transition">Politique Publique</a>
            <a href="#" className="hover:text-black transition">Finance</a>
            <a href="#" className="hover:text-black transition">Agro</a>
            <a href="#" className="hover:text-black transition">Énergie</a>
            <a href="#" className="hover:text-black transition">Mines</a>
            <a href="#" className="hover:text-black transition">Transport</a>
            <a href="#" className="hover:text-black transition">Tech</a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg absolute w-full z-40">
          <div className="flex flex-col space-y-3">
            <a href="#" className="font-bold text-red-600">Accueil</a>
            <a href="#">Finance</a>
            <a href="#">Agro</a>
            <a href="#">Énergie</a>
          </div>
        </div>
      )}

      {/* 3. TICKER INFO (Dynamisme) */}
      <div className="bg-red-50 border-b border-red-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center text-sm">
          <span className="font-bold text-red-600 flex items-center mr-4 whitespace-nowrap">
            <TrendingUp size={16} className="mr-2" /> En direct :
          </span>
          <div className="truncate text-gray-700">
            Le FMI approuve un nouveau programme de financement pour la Côte d'Ivoire... | Les marchés boursiers africains en hausse ce matin...
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* A. HERO SECTION (UI : Grand impact visuel) - 8 colonnes */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl shadow-md h-[400px] md:h-[500px]">
              <img 
                src={topArticle.image} 
                alt="Main" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 p-6 md:p-8 text-white">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
                  {topArticle.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight mb-3 group-hover:text-red-300 transition">
                  {topArticle.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-base hidden md:block max-w-3xl mb-4">
                  {topArticle.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-300 font-medium">
                  <span>Par {topArticle.author}</span>
                  <span className="mx-2">•</span>
                  <span>{topArticle.time}</span>
                </div>
              </div>
            </div>
          </div>

          {/* B. FIL D'ACTUALITÉ (Le plus récent) - 4 colonnes */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
              <h3 className="font-bold text-lg text-gray-900 uppercase">Dernière minute</h3>
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            </div>
            
            <div className="flex-1 space-y-5 overflow-y-auto pr-2">
              {newsFeed.map((news, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="text-xs text-red-600 font-semibold mb-1">{news.time}</div>
                  <h4 className="font-serif text-gray-800 leading-snug group-hover:text-red-600 transition">
                    {news.title}
                  </h4>
                  {idx !== newsFeed.length - 1 && <hr className="mt-4 border-gray-50" />}
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-2 text-sm font-semibold text-gray-600 hover:text-black border border-gray-200 rounded transition hover:bg-gray-50">
              Voir tout le fil
            </button>
          </div>
        </div>

        {/* C. SECTION INSIGHTS (Cartes) */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black uppercase text-gray-900 flex items-center">
              Insights & <span className="text-red-600 ml-2">Analyses</span>
            </h3>
            <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-red-600 transition">
              Voir plus <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingArticles.map((article, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group cursor-pointer border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg font-bold text-gray-900 group-hover:text-red-600 transition leading-snug">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* D. NEWSLETTER CTA (CX : Engagement) */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Mail size={300} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-black mb-4">L'économie africaine au quotidien.</h3>
            <p className="text-gray-400 mb-8">Rejoignez plus de 100 000 décideurs. Recevez nos analyses exclusives et revues de presse chaque matin.</p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Votre adresse email professionnelle" 
                className="px-4 py-3 rounded-lg flex-1 max-w-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg">
                S'abonner gratuitement
              </button>
            </form>
          </div>
        </div>

      </main>

      {/* 4. FOOTER (Refonte contraste et structure) */}
      <footer className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-black text-white tracking-tighter mb-4">
                agence <span className="font-light text-gray-500">ecofin</span>
              </h2>
              <p className="text-sm mb-6 max-w-md">
                L'Agence Ecofin couvre au quotidien l'actualité de 9 secteurs économiques africains stratégiques : gestion publique, finance, télécoms, agro, mines, énergie, transport, communication et formation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition"><Linkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Ventes & Publicité</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-400 hover:text-blue-300 transition">regie@agenceecofin.com</a></li>
                <li>Tél: +41 22 301 98 11</li>
                <li>Mob: +41 78 699 13 72</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Édition</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-400 hover:text-blue-300 transition">redaction@agenceecofin.com</a></li>
                <li className="pt-2"><a href="#" className="hover:text-white transition">L'équipe</a></li>
                <li><a href="#" className="hover:text-white transition">L'éditeur</a></li>
                <li className="pt-4 text-gray-500">
                  Mediamania Sàrl<br/>
                  Rue du Léman, 6<br/>
                  1201 Genève, Suisse
                </li>
              </ul>
            </div>
            
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© {new Date().getFullYear()} Agence Ecofin. Fondée en décembre 2010. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Mentions légales</a>
              <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
