# Guide de Déploiement - Agence Ecofin

## 🚀 Options de Déploiement

### Option 1: Vercel (⭐ Recommandé - Gratuit et Rapide)

#### Via GitHub
1. Push votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez sur "New Project"
4. Sélectionnez votre repo
5. Configuration automatiquement définie - cliquez "Deploy"
6. Votre site sera live !

#### Via CLI local
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify (Gratuit avec options Premium)

#### Via GitHub
1. Push votre code sur GitHub
2. Allez sur [netlify.com](https://netlify.com)
3. Cliquez "New site from Git"
4. Connectez GitHub et sélectionnez votre repo
5. Configuration:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Cliquez "Deploy"

#### Via Drag & Drop
```bash
npm run build
# Uploadez le dossier 'dist/' sur netlify.com
```

### Option 3: GitHub Pages

1. Editez `vite.config.js`:
```javascript
export default defineConfig({
  base: '/AgenceEcofin-refonte/', // Votre nom de repo
  // ... reste de la config
})
```

2. Créez un fichier `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 4: Serveur Personnel (Cpanel, OVH, etc.)

1. Générez le build:
```bash
npm run build
```

2. Uploadez le contenu du dossier `dist/` via FTP/SFTP:
   - Connectez-vous avec FileZilla ou équivalent
   - Uploadez tous les fichiers de `dist/` dans votre répertoire public_html

3. Assurez-vous que le serveur supporte:
   - ✅ Support HTTPS
   - ✅ Compression gzip
   - ✅ Caching des assets

### Option 5: Docker (Pour les déploiements avancés)

Créez un fichier `Dockerfile`:
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📋 Checklist Pré-Déploiement

- [ ] Vérifier les liens dans le site
- [ ] Tester la version mobile
- [ ] Configurer les métadonnées SEO
- [ ] Ajouter Google Analytics
- [ ] Vérifier les performances (Lighthouse)
- [ ] Tester sur plusieurs navigateurs
- [ ] Configurer le domaine custom

## 🔐 Configuration Domaine Custom

### Sur Vercel
- Allez dans Project Settings > Domains
- Ajoutez votre domaine
- Suivez les instructions DNS

### Sur Netlify
- Allez dans Site Settings > Domain management
- Cliquez "Add custom domain"
- Configurez les records DNS

## 📊 Monitoring Post-Déploiement

### Erreurs Courantes
- **404 sur rechargement**: Vérifiez les règles de redirection (vercel.json/netlify.toml)
- **CSS/JS non chargés**: Vérifiez que les chemins `/assets/` sont corrects
- **Images ne s'affichent pas**: Vérifiez les URLs Unsplash depuis votre pays

### Performance
- Utilisez [PageSpeed Insights](https://pagespeed.web.dev)
- Vérifiez le Lighthouse score
- Optimisez les images if needed

## 💬 Support

Pour tout problème:
- Vérifiez les logs de build
- Consultez la [documentation Vite](https://vitejs.dev)
- Contactez: redaction@agenceecofin.com

---

**Happy Deploying! 🚀**
