# 🎵 Music Player (Vite + React)

A modern music player application built with **Vite** and **React**, featuring playlist management, audio controls, and persistent state using Context API and LocalStorage.

---

## 🌐 Live Demo
[View live site](https://music-player-neo.vercel.app)

---

## 📌 Description

This project was built as a frontend practice application focused on building a scalable and maintainable music player architecture using modern React tools.

- Manage global application state using Context API
- Work with the HTML5 Audio API
- Synchronize UI with real-time audio events
- Implement dynamic playlists with persistent storage
- Structure a React project using clean architecture principles

---
## 🎯 Focus Areas
Frontend practice project focused on:
- React state management (Context API)
- Custom hook architecture
- Audio element synchronization
- Component-driven architecture
- LocalStorage persistence
- Interactive UI development
- Clean and maintainable structure
---
## 🧠 Architecture Overview
The project is organized with a feature-sliced structure:

```text
src/
├── app/        # App composition, providers, layout, routing
├── pages/      # Route-level pages
├── widgets/    # Large reusable UI blocks
├── features/   # User actions and business features
├── entities/   # Domain models: player, playlist, song, track
└── shared/     # Shared UI, formatters, storage helpers
```

### 🔹 Application Layer

- `src/app/App.jsx` composes providers, layout, and routes
- `src/app/providers` connects global providers
- `src/app/router` defines lazy-loaded application routes
- `src/app/layout` contains the app shell and navigation

### 🔹 State Management
The app uses Context API split by domain:

- `PlaybackProvider` manages current track and playback state
- `LibraryProvider` manages playlists and LocalStorage synchronization

Playlist data is restored from LocalStorage on initialization and persisted after updates.

---

### 🔹 Audio Handling
The application:
- Uses a dedicated player widget and player entity UI 
- Listens to:
  - loadedmetadata
  - timeupdate
  - ended
- Implements custom progress bar logic
- Synchronizes UI and playback state

---

🔹 Playlist System:
- Dynamic playlist creation
- Search-based song addition
- Persistent storage via LocalStorage
- Active track highlighting

---

### 🔹 Routing
Routes are handled by React Router:
- `/` - songs page
- `/playlist` - playlists page

Pages are loaded lazily with `React.lazy` and `Suspense`.

---
### 👨‍💻 Main Goals:
Frontend practice project focused on:
- Ability to manage complex UI state
- Understanding of React rendering lifecycle
- Experience with browser APIs
- Component reusability patterns
- Clean folder structure
- Practical frontend problem solving
---

## 🛠 Tech Stack

- **Vite**
- **React 19**
- **React Router 7**
- **Context API**
- **HTML5 Audio API**
- **LocalStorage**
- JavaScript (ES6+)
- CSS3

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository:

```bash
git clone https://github.com/username/music-player.git
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Start development server
```bash
npm run dev
```
The app runs at:
```bash
http://localhost:5173/
```
