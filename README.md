# 🌙 Mon Compagnon 2030

Application éducative islamique — audio-guidée, design futuriste "Spatial Computing".

---

## 🚀 Installation rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Ouvrir dans le navigateur
# → http://localhost:3000
```

---

## 📁 Structure du projet

```
mon-compagnon-2030/
├── app/
│   ├── layout.tsx          ← Layout global + AudioProvider + NavBar
│   ├── globals.css         ← Variables CSS, animations, utilitaires
│   ├── page.tsx            ← Page d'accueil
│   ├── shahada/page.tsx    ← Module Shahada
│   ├── salat/page.tsx      ← Module Salat
│   ├── ablutions/page.tsx  ← Module Ablutions
│   ├── gestes/page.tsx     ← Module Gestes (interactif)
│   └── dhikr/page.tsx      ← Module Dhikr (compteur + audio)
├── components/
│   ├── AudioButton.tsx     ← Bouton "Écouter le cours" réutilisable
│   ├── GlobalAudioBar.tsx  ← Barre audio persistante (ne coupe pas entre pages)
│   └── NavLink.tsx         ← Lien de navigation avec état actif
├── context/
│   └── AudioContext.tsx    ← État audio global + TTS (Web Speech API)
├── lib/
│   └── dhikrData.ts        ← 📍 FICHIER PRINCIPAL — Données + chemins MP3
└── public/
    └── audio/
        ├── dhikr/          ← 📍 Tes fichiers MP3 de Dhikr vont ici
        └── cours/          ← 📍 Tes fichiers MP3 de cours vont ici
```

---

## 🎵 Ajouter des fichiers audio MP3

### Recommandation format
| Critère | Recommandation |
|---------|---------------|
| Format | **MP3** (universel, iOS/Android/Web) |
| Bitrate | 128 kbps (mono) pour les courtes formules |
| Durée | 2–8 secondes pour le Dhikr |
| Encodage | UTF-8, pas de caractères spéciaux dans le nom |

> ⚠️ Évite MP4 pour le son pur — c'est un format vidéo. MP3 est le standard audio du web.

---

### Étape 1 — Placer le fichier

```
public/
└── audio/
    ├── dhikr/
    │   ├── subhanallah.mp3       ← formule courte, ex: "SubhanAllah" prononcé
    │   ├── alhamdulillah.mp3
    │   ├── allahuakbar.mp3
    │   ├── lailaha.mp3
    │   ├── astaghfirullah.mp3
    │   └── salawat.mp3
    └── cours/
        ├── shahada-intro.mp3     ← voix off complète du cours
        ├── salat-intro.mp3
        ├── wudu-intro.mp3
        └── dhikr-intro.mp3
```

### Étape 2 — Mettre à jour `lib/dhikrData.ts`

Trouve l'entrée correspondante et remplace `null` par le chemin :

```typescript
// AVANT (utilise la voix synthétique TTS)
audioSrc: null,

// APRÈS (utilise ton fichier MP3)
audioSrc: "/audio/dhikr/subhanallah.mp3",
```

### Étape 3 — C'est tout !

Le badge **MP3** apparaît automatiquement dans l'interface.  
Si `audioSrc` est `null`, la voix synthétique (TTS) est utilisée en fallback.

---

## 🔊 Système audio — Architecture

```
AudioContext.tsx (global, persiste entre pages)
    │
    ├── play(track)          → Lit un fichier MP3
    ├── pause() / resume()   → Contrôles
    ├── toggleLoop()         → Boucle infinie (utile pour le Dhikr)
    ├── speakText(text, lang) → Voix synthétique TTS (fallback)
    │
    └── GlobalAudioBar.tsx   → Barre audio en bas, toujours visible
```

**Point clé** : L'`AudioProvider` est dans `layout.tsx` — il ne se démonte jamais entre les navigations de pages. Le son continue donc sans interruption quand l'utilisateur change d'onglet.

---

## 🎨 Personnalisation du design

Les couleurs sont dans `app/globals.css` :

```css
:root {
  --indigo:   #5B5BD6;   /* Accent principal */
  --emerald:  #10C98F;   /* Accent secondaire */
  --deep-bg:  #0A0B1A;   /* Fond */
}
```

---

## 📦 Déploiement (Vercel)

```bash
# Build de production
npm run build

# Déploiement Vercel (recommandé pour Next.js)
npx vercel --prod
```

Les fichiers dans `/public/audio/` sont servis statiquement — aucune configuration serveur nécessaire.

---

## ✅ Checklist avant mise en production

- [ ] Remplacer les `audioSrc: null` par de vrais fichiers MP3
- [ ] Vérifier les droits sur les enregistrements audio
- [ ] Tester sur iOS Safari (comportement TTS différent)
- [ ] Ajouter un `favicon.ico` dans `/public/`
- [ ] Mettre à jour `metadata` dans `layout.tsx`

---

*Conçu avec ❤️ — Design 2030 · Glassmorphism · Next.js 14 · Framer Motion*
