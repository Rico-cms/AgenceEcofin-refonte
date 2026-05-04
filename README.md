# Agence Ecofin - Refonte

Site d'actualité économique africaine moderne et responsive avec Agence Ecofin.

## 📋 Caractéristiques

- ✨ Design moderne et épuré
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Performance optimisée avec Vite
- 🎨 Tailwind CSS pour le styling
- 🌍 Optimisé pour la production

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## 📦 Installation

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Setup

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🚀 Déploiement

### Pour mettre en ligne :

1. **Build local**
   ```bash
   npm run build
   ```
   Cela génère un dossier `dist/` avec tous les fichiers optimisés.

2. **Déploiement sur Vercel** (recommandé)
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Déploiement sur Netlify**
   - Connectez votre repo GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Déploiement traditionnel**
   - Uploadez le contenu du dossier `dist/` sur votre serveur FTP/Cpanel

## 📁 Structure du Projet

```
.
├── src/
│   ├── components/
│   │   └── App.jsx          # Composant principal
│   ├── main.jsx             # Point d'entrée React
│   └── index.css            # Styles globaux
├── public/                  # Fichiers statiques
├── index.html               # Template HTML
├── vite.config.js          # Configuration Vite
├── tailwind.config.js      # Configuration Tailwind
├── package.json
└── README.md
```

## 📝 Variables d'Environnement

Créez un fichier `.env` si nécessaire pour les variables d'environnement :

```env
# Exemple - À adapter selon vos besoins
VITE_API_URL=https://api.agenceecofin.com
```

## 🔧 Configuration Avancée

- **Vite** : [vite.config.js](vite.config.js)
- **Tailwind** : [tailwind.config.js](tailwind.config.js)
- **PostCSS** : [postcss.config.js](postcss.config.js)

## 📊 Performance

Le build est optimisé pour :
- ✅ Code splitting automatique
- ✅ Minification CSS/JS
- ✅ Compression des ressources
- ✅ Lazy loading des images

## 🎯 Prochaines Étapes

- [ ] Connecter l'API backend
- [ ] Ajouter la pagination
- [ ] Implémenter la recherche
- [ ] Ajouter les commentaires
- [ ] Newsletter subscription

## 📄 License

© 2026 Agence Ecofin. Tous droits réservés.

## 👨‍💻 Support

Pour toute question ou problème, contactez : redaction@agenceecofin.com
