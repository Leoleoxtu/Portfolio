# Léo Portfolio Foundation

Portfolio professionnel conçu pour présenter des projets full-stack, backend, data et IA dans une logique de recrutement tech.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Architecture modulaire par responsabilités

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
  images/projects/
types/
```

## Ce qui a été ajouté

- Layout global avec navigation, footer et métadonnées SEO de base
- Pages `home`, `about`, `contact`, `projects` et route dynamique `projects/[slug]`
- Données projet centralisées dans `data/projects.ts`
- Types dédiés pour les projets dans `types/project.ts`
- Composants UI réutilisables et composants métier pour les projets
- Base visuelle sobre orientée produit / ingénierie

## Choix techniques

- Les pages orchestrent uniquement le contenu et la composition.
- Les composants portent l’affichage réutilisable.
- Les projets sont définis une seule fois puis réutilisés sur l’accueil, la liste et les pages détail.
- Les assets projet utilisent des placeholders SVG simples pour garder la fondation légère et maintenable.

## Lancer le projet

```bash
npm install
npm run dev
```

## Points d’attention

- Les contenus sont en anglais pour rester pertinents à l’international.
- Les images projet et le CV sont encore des placeholders à remplacer par les assets finaux.
- Aucun formulaire backend n’est branché sur la page contact à ce stade.

## Prochaines étapes

- Remplacer les placeholders par des captures réelles et un vrai CV PDF
- Ajouter éventuellement une section `experience` ou `writing`
- Brancher analytics et formulaire de contact si nécessaire
