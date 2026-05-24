# SciSearch – Portail de Manifestations Scientifiques

Plateforme de recherche de conférences, colloques, séminaires et ateliers scientifiques nationaux et internationaux.

🌐 **Site en ligne :** https://ranim-cmd.github.io/projet-web/

---

## Aperçu

SciSearch permet aux chercheurs, enseignants et étudiants de trouver facilement des manifestations scientifiques selon leurs domaines d'intérêt, avec un système de filtres en temps réel et une navigation intuitive.

---

## Pages du site

| Fichier | Description |
|---------|-------------|
| `index.html` | Page d'accueil avec recherche rapide et recherche avancée |
| `pages/man.html` | Liste complète des manifestations avec filtres |
| `pages/dom.html` | Parcours par domaine scientifique |
| `pages/arch.html` | Archives des manifestations passées |
| `pages/ct.php` | Formulaire de contact (requiert un serveur PHP) |

---

## Fonctionnalités

- Recherche et filtrage en temps réel (mot-clé, type, domaine, pays, date)
- Navigation inter-pages avec état des filtres transmis via URL
- Parcours par domaine avec compteur de manifestations
- Archives groupées par année avec filtres
- Formulaire de contact avec validation complète (PHP côté serveur)
- Pagination des résultats (9 par page)
- Design responsive — Chrome, Firefox, Edge
- Notifications toast, états vides, messages d'erreur inline

---

## Technologies utilisées

- HTML5, CSS3 (variables CSS, Flexbox, Grid)
- Bootstrap 5.3
- JavaScript ES6 vanilla
- PHP 8 (formulaire de contact)

---

## Structure du projet

```
projet-web/
├── index.html              # Page d'accueil
├── css/
│   └── style.css           # Feuille de style globale (partagée par toutes les pages)
├── js/
│   ├── data.js             # Données des manifestations
│   └── app.js              # Fonctions utilitaires partagées
├── pages/
│   ├── man.html            # Manifestations
│   ├── dom.html            # Domaines
│   ├── arch.html           # Archives
│   └── ct.php              # Contact (PHP)
├── docs/
│   └── rapport.pdf         # Rapport technique
├── .gitignore
└── README.md
```

---

## Installation locale (avec PHP)

1. Installer [XAMPP](https://www.apachefriends.org)
2. Copier le dossier dans `C:\xampp\htdocs\projet-web\`
3. Démarrer Apache depuis le panneau XAMPP
4. Ouvrir `http://localhost/projet-web/` dans le navigateur

## Installation locale (sans PHP)

Ouvrir directement `index.html` dans un navigateur. Toutes les fonctionnalités JavaScript fonctionnent sans serveur. Seul le formulaire de contact nécessite PHP.

---

## Déploiement

Le site est déployé sur **GitHub Pages** depuis la branche `main`.

> ⚠️ GitHub Pages ne supporte pas PHP. Le formulaire `ct.php` fonctionne uniquement en local avec XAMPP.

---

## Auteur

**Ranim Ben Thaer** – Conception, développement front-end, JavaScript, PHP, déploiement