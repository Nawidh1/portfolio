# Deployment Guide - Portfolio Website

Deze gids helpt je om je portfolio website online te zetten. Er zijn verschillende gratis opties beschikbaar.

## Optie 1: Netlify (Aanbevolen - Eenvoudigst)

### Stappen:
1. **Maak een account** op [netlify.com](https://www.netlify.com)
2. **Upload je bestanden**:
   - Ga naar je dashboard
   - Sleep de map met je bestanden (index.html, styles.css, script.js) naar het upload gebied
   - Of gebruik "Add new site" > "Deploy manually"
3. **Je site is live!** Je krijgt direct een URL zoals `jouw-site.netlify.app`

### Via Git (Geavanceerd):
1. Push je code naar GitHub
2. In Netlify: "Add new site" > "Import an existing project"
3. Kies je GitHub repository
4. Netlify deployt automatisch bij elke update!

---

## Optie 2: Vercel

### Stappen:
1. **Maak een account** op [vercel.com](https://vercel.com)
2. **Installeer Vercel CLI** (optioneel):
   ```bash
   npm i -g vercel
   ```
3. **Deploy**:
   - Via website: Sleep je bestanden naar vercel.com
   - Via CLI: Run `vercel` in je project folder
4. **Je site is live!** Je krijgt een URL zoals `jouw-site.vercel.app`

---

## Optie 3: GitHub Pages (Gratis)

### Stappen:
1. **Maak een GitHub repository**:
   - Ga naar [github.com](https://github.com)
   - Maak een nieuwe repository (bijv. "portfolio")
   - Upload je bestanden

2. **Activeer GitHub Pages**:
   - Ga naar Settings > Pages
   - Kies "main" branch als source
   - Kies "/ (root)" als folder
   - Klik "Save"

3. **Je site is live!** Op `jouw-username.github.io/portfolio`

**Let op**: Voor GitHub Pages moet je repository public zijn (of je hebt een GitHub Pro account).

---

## Optie 4: Cloudflare Pages

### Stappen:
1. **Maak een account** op [cloudflare.com](https://www.cloudflare.com)
2. **Ga naar Pages** in het dashboard
3. **Create a project**:
   - Upload je bestanden direct
   - Of verbind met Git voor automatische deploys
4. **Je site is live!** Op `jouw-site.pages.dev`

---

## Welke optie kiezen?

- **Netlify**: Beste voor beginners, super eenvoudig
- **Vercel**: Zeer snel, geweldig voor developers
- **GitHub Pages**: Perfect als je al GitHub gebruikt
- **Cloudflare Pages**: Zeer snel en betrouwbaar

Alle opties zijn **gratis** voor statische websites!

---

## Tips voor Deployment

1. **Test lokaal eerst**: Open index.html in je browser om te controleren of alles werkt
2. **Update je contact informatie**: Zorg dat alle links en contactgegevens kloppen
3. **Custom domain** (optioneel): Alle platforms bieden gratis SSL en custom domain support
4. **SEO**: Voeg meta tags toe aan je HTML voor betere zoekresultaten

---

## Problemen oplossen

- **404 errors**: Zorg dat index.html in de root folder staat
- **CSS/JS niet geladen**: Controleer of de bestandspaden kloppen
- **Formulier werkt niet**: Je moet een backend service toevoegen (bijv. Formspree, Netlify Forms)

---

## Volgende stappen

Na deployment kun je:
- Een custom domain toevoegen (bijv. jouwnaam.nl)
- Analytics toevoegen (Google Analytics)
- Een contact formulier backend toevoegen
- Performance optimalisaties toepassen

Veel succes met je portfolio! 🚀
