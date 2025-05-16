# Test technique – File Tree Viewer

## 1 · Jeu de données

Regarder la route api côté nextjs dans `/api/files`

## 2 · But et rendu attendu

### Objectif

- Récupérer les données de l’API `/api/files`.
- Bien typé les données reçu avec TypeScript.
- Stocker les données dans un état local.
- Afficher les données dans un arbre de fichiers.

### Rendu attendu

- Indentation visuelle des sous‑niveaux.
- Différenciez **dossiers** et **fichiers** (icône, couleur…).
- Gestion de l’état _ouvert / fermé_ d’un répertoire (cliquable).

### Exemple (ASCII)

```
test-technique
├─ pages
│  ├─ index.js
│  ├─ _app.js
│  ├─ _document.js
│  └─ api
│     └─ hello.js
├─ public
│  ├─ favicon.ico
│  └─ vercel.svg
├─ styles
│  ├─ globals.css
│  └─ Home.module.css
├─ .gitignore
├─ README.md
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ tsconfig.json
```

---

## 3 · Lancer le projet

1. **Install** : yarn
2. **Dev server** : `yarn dev`
3. Ouvrez [http://localhost:3000](http://localhost:3000).
