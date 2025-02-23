<p align="left">
  <a href="#--------randomfill--">🇬🇧 English</a> |
  <a href="#--------randomfill---1">🇫🇷 Français</a>
</p>

<h1 align="center">
  <br>
  <img src="https://i.ibb.co/67KDMW6B/random-Fill-logo.png" alt="logo-random-fill" width="150">
  <br>
  randomFill
  <br>
</h1>

<p align="center">
  A script for Adobe Illustrator to randomly fill selected shapes with a customizable color palette 🎨
</p>

<p align="center">
  <img src="https://img.shields.io/badge/languages-1-orange">
  <img src="https://img.shields.io/badge/JavaScript-100%25-yellow">
</p>

<p align="center">
  <a href="#-project-goal">Project goal</a> •
  <a href="#-how-to-use">How to use</a> •
  <a href="#-color-palette">Color palette</a>
</p>

---

### 🎯 **Project goal**
This script allows **random color filling of selected shapes in Adobe Illustrator**. Originally created to replicate the **GitHub commit heatmap** style on the **42 Blockchain** logo, it can be used for any design needing a randomized color scheme.

#### 📸 **Preview**
| Before | After | GIF |
|--------|-------|-----|
| ![Empty](https://i.ibb.co/zWzjWmD0/42-Blockchain-commits.png) | ![Filled](https://i.ibb.co/R4gYRgR6/42-Blockchain-commits-1.png) | <img src="https://s3.gifyu.com/images/bS8QR.gif" width="300"> |

### 🛠 **How to use**
1. **Open Adobe Illustrator** and create or load a design.
2. **Select the shapes** you want to fill randomly.
3. **Go to:** `File` > `Scripts` > `Other Script...`
4. **Use shortcut** `⌘ + F12` *(Mac)* or `CTRL + F12` *(Windows)* to quickly run a script.
5. **Choose the script** `randomFill.jsx` and apply it.
6. The script will fill your selected shapes with **random colors from the predefined palette**.

### 🎨 **Color palette**
The script contains a **color palette** that you can customize:

- **To change colors:** Modify the `colorPalette` array in `randomFill.jsx`, replacing RGB values.
- **To add a color:** Add a new `[R, G, B]` entry inside the array.
- **To remove a color:** Simply delete one of the `[R, G, B]` entries.

#### Example:
```javascript
var colorPalette = [
    [15, 56, 15],   // Dark Green
    [48, 98, 48],   // Medium Dark Green
    [76, 175, 80],  // Bright Green
    [102, 187, 106] // Light Green
];
```
If you want to use blue shades, you could replace it with:
```javascript
var colorPalette = [
    [0, 0, 139],   // Dark Blue
    [30, 144, 255], // Dodger Blue
    [70, 130, 180], // Steel Blue
    [135, 206, 250] // Light Sky Blue
];
```

---

<h1 align="center">
  <br>
  <img src="https://i.ibb.co/67KDMW6B/random-Fill-logo.png" alt="logo-random-fill" width="150">
  <br>
  randomFill
  <br>
</h1>

<p align="center">
  Un script pour Adobe Illustrator permettant de remplir aléatoirement des formes sélectionnées avec une palette de couleurs personnalisable 🎨
</p>

<p align="center">
  <img src="https://img.shields.io/badge/langages-1-orange">
  <img src="https://img.shields.io/badge/JavaScript-100%25-yellow">
</p>

<p align="center">
  <a href="#-objectif-du-projet">Objectif du projet</a> •
  <a href="#-comment-lutiliser">Comment l'utiliser</a> •
  <a href="#-palette-de-couleurs">Palette de couleurs</a>
</p>

---

### 🎯 **Objectif du projet**
Ce script permet **de remplir aléatoirement des formes sélectionnées dans Adobe Illustrator**. Initialement créé pour reproduire le **design des commits GitHub** sur le **logo de l’association 42 Blockchain**, il peut être utilisé pour n'importe quel projet nécessitant une répartition aléatoire des couleurs.

#### 📸 **Aperçu**
| Avant | Après | GIF |
|--------|-------|-----|
| <img src="https://i.ibb.co/zWzjWmD0/42-Blockchain-commits.png" width="300"> | <img src="https://i.ibb.co/R4gYRgR6/42-Blockchain-commits-1.png" width="300"> | <img src="https://s3.gifyu.com/images/bS8QR.gif" width="300"> |

### 🛠 **Comment l'utiliser**
1. **Ouvrir Adobe Illustrator** et charger un design.
2. **Sélectionner les formes** que vous souhaitez remplir aléatoirement.
3. **Aller dans :** `Fichier` > `Scripts` > `Autre script...`
4. **Utiliser le raccourci** `⌘ + F12` *(Mac)* ou `CTRL + F12` *(Windows)* pour exécuter rapidement un script.
5. **Sélectionner le script** `randomFill.jsx` et l’appliquer.
6. Le script remplira vos formes sélectionnées avec **des couleurs aléatoires issues de la palette prédéfinie**.

### 🎨 **Palette de couleurs**
Le script inclut une **palette de couleurs** que vous pouvez personnaliser :

- **Modifier les couleurs** : Remplacez les valeurs RGB dans le tableau `colorPalette` du fichier `randomFill.jsx`.
- **Ajouter une couleur** : Ajoutez une nouvelle entrée `[R, G, B]` dans le tableau.
- **Supprimer une couleur** : Retirez simplement une des entrées `[R, G, B]`.

#### Exemple :
```javascript
var colorPalette = [
    [15, 56, 15],   // Vert foncé
    [48, 98, 48],   // Vert moyen foncé
    [76, 175, 80],  // Vert clair
    [102, 187, 106] // Vert pastel
];
```
Si vous voulez utiliser des nuances de bleu, remplacez par :
```javascript
var colorPalette = [
    [0, 0, 139],   // Bleu foncé
    [30, 144, 255], // Bleu éclatant
    [70, 130, 180], // Bleu acier
    [135, 206, 250] // Bleu ciel clair
];
```
