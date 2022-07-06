---
title: HTML, Introduction
---
# Introduction

## Qu'est-ce que le langage HTML ?

Le HTML veut dire HyperText Markup Language, autrement dit Langage de Balisage HyperTexte. C'est une syntaxe de code héritée du [XML](https://fr.wikipedia.org/wiki/Extensible_Markup_Language) permettant de structurer une page web et dont tous les navigateurs web ont la connaissance.

## Préparer son environnement de travail

Écrire du code nécessite d'avoir un éditeur adapté. Si votre éditeur de texte est acceptable pour lire et écrire un langage naturel, la lisibilité sera bien insuffisante pour un langage informatique.

C'est pourquoi il a été inventé la coloration syntaxique. Chaque  groupe de caractères et mots clé a une fonction différente et celle-ci est représentée par une couleur. Prenez comme exemple l'extrait de code ci-dessous.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ceci est le titre de ma page</title>
  </head>
  <body style="background-color: #eee">
    <h1>Bienvenue sur mon site !</h1>
  </body>
</html>
```

Seul un éditeur de code permet de colorer votre code au cours de l'édition. C'est pourquoi je vous recommande d'installer [Visual Studio Code](https://code.visualstudio.com). La communauté a pris l'habitude d'abréger son nom par *VSCode*, c'est donc tout naturellement que je le nommerai ainsi dans ce guide.

::: info
Cet éditeur développé par Microsoft est parfaitement adapté aux technologies web. Accompagné d'un magasin d'extensions très fourni, il s'adapte facilement à n'importe quel langage.
:::

### Sur Windows

::: warning
Lors de l'installation sur un environnement **Windows**, veillez à **cocher les cases** "Add 'Open with Code'" et "Add to PATH". Cela vous facilitera la vie (Vous me remercierez plus tard :wink:).
:::

### Sur macOS

Pour les utilisateurs de [Homebrew](https://brew.sh) (aka les pro-users), vous pouvez installer *VSCode* à l'aide d'une simple commande dans votre terminal favori.

```sh
brew install --cask visual-studio-code
```

::: tip
***:speech_balloon: Je ne connais pas Homebrew, qu'est-ce que c'est ?***

C'est un gestionnaire de paquets/dépendances pour macOS. Il permet d'installer facilement des outils en ligne de commande (CLI) et des applications graphiques (GUI).
:::

## Créer ma première page HTML

Chaque page web est représentée par un fichier dont l'extension est `.html`. Il est de convention de nommer le fichier de la page d'accueil d'un site web `index.html`.

Créez un dossier "Mon premier site web" et ouvrez-le dans *VSCode*. Dans l'explorateur de fichiers (panneau gauche de l'interface), créez votre `index.html`.

1. Clic-droit dans la zone vide > *Nouveau fichier*
2. Clic-droit sur le fichier fraîchement créé > *Afficher dans le...*
3. Double-droit sur le fichier > *Ouvrir avec* > [Votre navigateur préféré]

Bravo ! Vous avez créé votre première page web !

::: tip
**:speech_balloon: C'est super ! Mais ma page est blanche, c'est normal ?**

Oui, nous avons créé un fichier HTML vide. Avant d'éditer quoi que ce soit, nous devons apprendre la syntaxe du HTML.
:::
