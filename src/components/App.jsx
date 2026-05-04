import React, { useState } from 'react';
import { Search, Menu, X, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronRight, TrendingUp, Mail } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('FR');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);

  // Couleurs de la charte basée sur le logo
  const ecofinRed = "#E60000";

  const translations = {
    FR: {
      searchPlaceholder: "Rechercher un article, un secteur ou un pays",
      newsletter: "Newsletter",
      seeMore: "Voir plus",
      latest: "Dernière minute",
      insights: "Insights & Analyses",
      subscribeTitle: "L'économie africaine au quotidien.",
      subscribeDescription: "Rejoignez plus de 100 000 décideurs. Recevez nos analyses exclusives et revues de presse chaque matin.",
      subscribeButton: "S'abonner gratuitement",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      feedAll: "Voir tout le fil",
      languageLabel: "Langue",
      reading: "Lecture en cours",
      noResults: "Aucun résultat trouvé pour",
    },
    EN: {
      searchPlaceholder: "Search for an article, sector or country",
      newsletter: "Newsletter",
      seeMore: "See more",
      latest: "Breaking news",
      insights: "Insights & Analysis",
      subscribeTitle: "African economy every day.",
      subscribeDescription: "Join over 100,000 decision-makers. Receive our exclusive analysis and morning news roundup.",
      subscribeButton: "Subscribe for free",
      legal: "Legal notice",
      privacy: "Privacy policy",
      feedAll: "See full feed",
      languageLabel: "Language",
      reading: "Now reading",
      noResults: "No results found for",
    }
  };

  const t = translations[language];

  const navItems = language === 'FR'
    ? ["Accueil", "Politique Publique", "Finance", "Agro", "Énergie", "Mines", "Transport", "Tech"]
    : ["Home", "Public Policy", "Finance", "Agro", "Energy", "Mines", "Transport", "Tech"];

  // Données factices basées sur les captures d'écran
  const topArticle = {
    category: "FINANCE",
    title: language === 'FR'
      ? "Banque Mondiale : Les prix des matières premières vont s'envoler en 2026 suite aux perturbations"
      : "World Bank: Commodity prices set to surge in 2026 after disruptions",
    excerpt: language === 'FR'
      ? "L'institution a déclaré que les perspectives pour les prix des matières premières restent soumises à des risques importants, y compris une durée d'hostilités plus longue que prévue..."
      : "The institution said commodity price outlooks remain subject to major risks, including a longer-than-expected duration of hostilities...",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    author: "Rédaction",
    time: language === 'FR' ? "Il y a 2 heures" : "2 hours ago"
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

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setSearchResults(null);
    setActiveArticle(null);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setSearchResults(null);
      return;
    }

    const matchingArticles = [topArticle, ...trendingArticles].filter((article) =>
      article.title.toLowerCase().includes(query) || article.category.toLowerCase().includes(query)
    );

    const matchingNews = newsFeed.filter((news) =>
      news.title.toLowerCase().includes(query)
    );

    setSearchResults({ query, matchingArticles, matchingNews });
    setActiveArticle(null);
  };

  const handleOpenArticle = (article) => {
    setActiveArticle(article);
    setSearchResults(null);
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    window.alert(language === 'FR'
      ? 'Merci ! Votre inscription a bien été enregistrée.'
      : 'Thank you! Your subscription has been registered.'
    );
  };

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
            <button
              onClick={() => handleLanguageChange('FR')}
              className={`transition ${language === 'FR' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
              type="button"
            >
              FR
            </button>
            <span>|</span>
            <button
              onClick={() => handleLanguageChange('EN')}
              className={`transition ${language === 'EN' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
              type="button"
            >
              EN
            </button>
            <span>|</span>
            <button type="button" className="hover:text-white transition" onClick={() => setIsSearchOpen(true)}>
              {t.newsletter}
            </button>
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
            <div className="w-1/3 flex justify-end items-center space-x-3">
              <button type="button" onClick={() => setIsSearchOpen(!isSearchOpen)} className="flex items-center gap-2 text-gray-600 hover:text-black transition">
                <Search size={22} />
                <span className="hidden md:inline text-sm">{t.searchPlaceholder}</span>
              </button>
            </div>
          </div>

          {isSearchOpen && (
            <div className="py-3 border-t border-gray-100">
              <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center gap-3 py-3">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="w-full md:max-w-xl px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button type="submit" className="bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                  {language === 'FR' ? 'Chercher' : 'Search'}
                </button>
              </form>
            </div>
          )}

          {/* Main Navigation (UX : Espacement et lisibilité) */}
          <nav className="hidden md:flex flex-wrap justify-center gap-6 py-4 border-t border-gray-100 text-sm font-semibold text-gray-600 tracking-wide uppercase">
            {navItems.map((item, idx) => (
              <a key={idx} href="#" className={`hover:text-black transition ${idx === 0 ? 'text-red-600 border-b-2 border-red-600 pb-1' : ''}`}>
                {item}
              </a>
            ))}
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

      {searchResults && (
        <div className="max-w-7xl mx-auto px-4 py-6 bg-white border border-gray-200 rounded-xl shadow-sm mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <p className="text-sm text-gray-600">
              {searchResults.query
                ? `${t.noResults} “${searchResults.query}”` : language === 'FR' ? 'Fil complet affiché' : 'Full feed displayed'}
            </p>
            <button
              type="button"
              onClick={() => setSearchResults(null)}
              className="text-sm text-red-600 hover:text-red-700 font-semibold"
            >
              {language === 'FR' ? 'Fermer' : 'Close'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Articles</h4>
              {searchResults.matchingArticles.length > 0 ? (
                <ul className="space-y-4">
                  {searchResults.matchingArticles.map((item, idx) => (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => handleOpenArticle(item)}
                        className="text-left text-gray-800 hover:text-red-600 transition font-semibold"
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">{language === 'FR' ? 'Aucun article ne correspond.' : 'No articles match.'}</p>
              )}
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-3">{language === 'FR' ? 'Actualités' : 'News'}</h4>
              {searchResults.matchingNews.length > 0 ? (
                <ul className="space-y-4">
                  {searchResults.matchingNews.map((item, idx) => (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => handleOpenArticle({
                          category: language === 'FR' ? 'FLASH' : 'Flash',
                          title: item.title,
                          excerpt: language === 'FR'
                            ? 'Découvrez la dernière actualité en détail sur Agence Ecofin.'
                            : 'Discover the latest news in detail on Agence Ecofin.',
                          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
                          author: language === 'FR' ? 'Rédaction' : 'Editorial',
                          time: item.time
                        })}
                        className="text-left text-gray-800 hover:text-red-600 transition font-semibold"
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">{language === 'FR' ? 'Aucune actualité ne correspond.' : 'No news match.'}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* A. HERO SECTION (UI : Grand impact visuel) - 8 colonnes */}
          <button
            type="button"
            onClick={() => handleOpenArticle(topArticle)}
            className="lg:col-span-8 group cursor-pointer text-left"
            aria-label={language === 'FR' ? 'Lire l’article principal' : 'Read main article'}
          >
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
          </button>

          {/* B. FIL D'ACTUALITÉ (Le plus récent) - 4 colonnes */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
              <h3 className="font-bold text-lg text-gray-900 uppercase">Dernière minute</h3>
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            </div>
            
            <div className="flex-1 space-y-5 overflow-y-auto pr-2">
              {newsFeed.map((news, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOpenArticle({
                    category: language === 'FR' ? 'FLASH' : 'Flash',
                    title: news.title,
                    excerpt: language === 'FR'
                      ? 'Découvrez la dernière actualité en détail sur Agence Ecofin.'
                      : 'Discover the latest news in detail on Agence Ecofin.',
                    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
                    author: language === 'FR' ? 'Rédaction' : 'Editorial',
                    time: news.time
                  })}
                  className="group w-full text-left"
                  aria-label={language === 'FR' ? `Lire l’actualité ${idx + 1}` : `Read news item ${idx + 1}`}
                >
                  <div className="text-xs text-red-600 font-semibold mb-1">{news.time}</div>
                  <h4 className="font-serif text-gray-800 leading-snug group-hover:text-red-600 transition">
                    {news.title}
                  </h4>
                  {idx !== newsFeed.length - 1 && <hr className="mt-4 border-gray-50" />}
                </button>
              ))}
            </div>
            
            <button
              type="button"
              onClick={() => setSearchResults({ query: '', matchingArticles: [topArticle, ...trendingArticles], matchingNews: newsFeed })}
              className="w-full mt-4 py-2 text-sm font-semibold text-gray-600 hover:text-black border border-gray-200 rounded transition hover:bg-gray-50"
            >
              {t.feedAll}
            </button>
          </div>
        </div>

        {activeArticle && (
          <div className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-3 inline-block">
                  {activeArticle.category}
                </span>
                <h3 className="text-2xl md:text-4xl font-serif font-bold leading-tight mb-3">
                  {activeArticle.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-200">
                  <span>{activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.time}</span>
                </div>
              </div>
            </div>
            <div className="p-8 text-gray-700">
              <p className="text-base leading-relaxed mb-6">{activeArticle.excerpt}</p>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="text-sm font-semibold text-red-600 hover:text-red-800 transition"
              >
                {language === 'FR' ? 'Retourner à la page' : 'Back to page'}
              </button>
            </div>
          </div>
        )}

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
              <button
                key={idx}
                type="button"
                onClick={() => handleOpenArticle(article)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group border border-gray-100 text-left"
                aria-label={language === 'FR' ? `Lire l’article ${idx + 1}` : `Read article ${idx + 1}`}
              >
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
              </button>
            ))}
          </div>
        </div>

        {/* D. NEWSLETTER CTA (CX : Engagement) */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Mail size={300} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-black mb-4">{t.subscribeTitle}</h3>
            <p className="text-gray-400 mb-8">{t.subscribeDescription}</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder={language === 'FR' ? 'Votre adresse email professionnelle' : 'Your professional email address'} 
                className="px-4 py-3 rounded-lg flex-1 max-w-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg">
                {t.subscribeButton}
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
