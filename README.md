# Portfolio

Portfolio personnel construit avec Next.js pour présenter un profil de développeur full-stack orienté backend, infrastructure, data et outils IA.

Le projet sert de vitrine technique: page d'accueil éditoriale, mise en avant de projets, branding personnel, base SEO et architecture simple à faire évoluer.

## Objectif

Ce dépôt pose la fondation d'un site portfolio professionnel capable de :

- présenter une identité claire et un positionnement technique,
- mettre en avant plusieurs projets avec une structure homogène,
- centraliser les données du site dans des fichiers simples,
- rester rapide à maintenir et à personnaliser.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- App Router

## Ce qui existe aujourd'hui

- une homepage déjà structurée avec un hero, une introduction, des projets mis en avant, des domaines d'expertise et un appel à l'action final
- un layout global avec header, footer, typographies et métadonnées SEO
- une configuration centralisée du profil dans `data/site.ts`
- une liste de projets centralisée dans `data/projects.ts`
- des composants réutilisables pour afficher les cartes et sections projet

## Etat du projet

Le projet est une base fonctionnelle, mais il n'est pas encore entièrement finalisé.

- la page d'accueil est la partie la plus avancée,
- les routes `about`, `contact`, `projects` et `projects/[slug]` sont déjà prévues dans l'arborescence,
- certaines de ces pages sont encore vides et doivent être implémentées,
- les visuels réels et le CV final ne sont pas encore ajoutés.

## Structure

```text
app/
  about/
  contact/
  projects/
    [slug]/
components/
  home/
  layout/
  projects/
  ui/
data/
lib/
public/
  cv/
types/
```

## Donnees du site

Les deux points d'entrée les plus utiles pour personnaliser le portfolio sont :

- `data/site.ts` pour le nom, le rôle, la bio courte, les liens sociaux et l'email
- `data/projects.ts` pour les projets, leur description, leur stack, leur statut et leurs liens

Cette approche évite de disperser le contenu dans plusieurs composants.

## Installation

Prerequis :

- Node.js 20+ recommande
- npm

Installation locale :

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Personnalisation rapide

Pour adapter ce portfolio a ton profil :

1. remplace les informations dans `data/site.ts`
2. mets a jour les projets dans `data/projects.ts`
3. ajoute tes images dans `public/images/`
4. ajoute ton CV dans `public/cv/`
5. implemente les pages secondaires encore vides

## Ameliorations prevues

- finaliser les pages `about`, `contact` et `projects`
- ajouter les pages detail des projets
- remplacer les placeholders par de vrais assets
- brancher un formulaire de contact
- enrichir le SEO et les metadonnees sociales

## Auteur

Projet portfolio de Léo Sollvelles.
