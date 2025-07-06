# 🚀 React.js – Day 2 Notes

## 1️⃣ Setting Up a New React Project

| Option                     | What it does                                                               | Pros                                                                          | Cons                                                                            | Main commands                                                                                                                         |
| -------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Create-React-App (CRA)** | Downloads a **ready-made React template**.                                 | Battle-tested, lots of tutorials.                                             | Startup & rebuild time is **slow**, heavier toolchain, considered “old school”. | `bash\nnpm create-react-app@latest my-app\ncd my-app\nnpm start\n`                                                                    |
| **Vite**                   | Generates a tiny template and serves it with an **ultra-fast dev server**. | Starts in milliseconds, supports **every major JS framework** out of the box. | Slightly newer ecosystem (fewer CRA-style snippets).                            | `bash\nnpm create vite@latest my-app -- --template react\ncd my-app\nnpm install   # downloads deps\nnpm run dev    # start server\n` |

> **Why both give you a “template”?**
> The installer scaffolds a *project skeleton* (folders, config files, demo code) so you can start coding instead of wiring webpack/Babel yourself.

---

## 2️⃣ **npm vs npx** – one-line analogy

| Tool    | Think of…                                                     | When to use                                                        |
| ------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| **npm** | *Hiring an in-house electrician* – lives in your project.     | You’ll need the package **every time** you run/build the app.      |
| **npx** | *Calling a handyman for a one-off fix* – vanishes afterwards. | You just want to **run** a package once (e.g., project generator). |

---

## 3️⃣ Typical Folder / File Map (Vite & CRA look almost the same)

```
my-app/
│
├── node_modules/          ← All downloaded libraries live here.
│
├── public/                ← Images, favicons, static assets exposed to the browser.
│   └── index.html         ← The single HTML page React will “take over”.
│
├── src/                   ← Your code.
│   ├── App.jsx            ← Root component.
│   ├── main.jsx           ← JS entry point that mounts <App/> into index.html.
│   └── components/        ← Reusable UI parts you create.
│
├── .gitignore             ← Tells Git which files **not** to commit (e.g., node_modules).
│
├── package.json           ← Project manifest: name, scripts, dependencies.
│
├── package-lock.json      ← Exact versions of every installed package (auto-generated).
│
├── vite.config.js /       ← Build & dev-server options (only in Vite projects).
│
│   webpack config …       ← (hidden inside CRA, not meant to touch).
│
└── README.md              ← Project instructions.
```

> * **Environment / secret files** (e.g., `.env`) hold API keys – never push them to Git.
> * ESLint / Prettier configs may appear to keep code style consistent.

---

## 4️⃣ Component File Rules

* React components are usually saved as **`.jsx`** or **`.tsx`** (if using TypeScript).
* **First letter capitalised** → tells React it’s a *component*, not an HTML tag.

  ```jsx
  // Good
  const Header = () => { … } ✔️

  // React thinks this is plain <header> if lowercase
  const header = () => { … } ❌
  ```

---

## 5️⃣ Running & Editing the App

## ⚙️ Create React App (CRA) – Traditional Method
#### Step 1: Create the project
```
npx create-react-app my-app
```
#### Step 2: Go into your project folder
```
cd my-app
```
#### Step 3: Start the app
```
npm start
```
#### The app runs at: http://localhost:3000
#### 📝 Note: npx runs CRA without installing it globally.
---

## ⚡ Vite – Fast & Modern Setup
#### Step 1: Create the Vite project with React template
```
npm create vite@latest
```
#### Step 2: Go into your project folder
```
cd my-app
```
#### Step 3: Install required packages
```
npm install
```
#### Step 4: Start the app
```
npm run dev
```
#### 📝 Note: Vite usually runs app at: http://localhost:5173
---

## 6️⃣ Quick JavaScript Refresher → React Style

**Vanilla JS way**

```javascript
let htmlContent = `
  <h2>Hello!</h2>
  <p>This is added using JavaScript.</p>
`;
 
let newDiv = document.createElement("div");
newDiv.innerHTML = htmlContent;
document.body.appendChild(newDiv);
```

**React way (functional component + arrow function)**

```jsx
import React from "react";
import Comp1 from "./Component/Comp1";

const App = () => {

  return (
    <>
      <h1>Hello</h1>
      <Comp1/>
    </>
  );
}

export default App;
```

---

## 7️⃣ Import / Export Cheat-Sheet

```jsx
// Component must export function.
export default Comp1;

// To access Comp1 in other page, need to import
import Comp1 from "./Component/Comp1";
```
---

## 8️⃣ How Everything Connects

```
index.html - (contains <div id="root"></div>)
   │ 
main.jsx                 ← tells ReactDOM to render…
   ↓
<App/> (root component)  ← which nests your pages/components
   │
   ├── Header
   ├── HomePage
   └── Footer
```

React manipulates **only** the `#root` div inside `index.html`, giving you SPA behaviour.

---
© Page by Urvish Patel