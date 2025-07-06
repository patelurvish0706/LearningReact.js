# 🚀 React.js – Day 1 Notes


## 🧾 What is React.js?

* **React.js** is a **JavaScript library** used for building **user interfaces**, particularly for **Single Page Applications (SPAs)**.
* Developed by **Jordan Walke**, a software engineer at **Facebook**, starting in **2011**.
* **First public release**: **2013**.

---

## 🌐 Single Page Application (SPA) vs Multi Page Application (MPA)

### 🕸️ SPA:

* Loads a **single HTML page**, and **dynamically updates** content without refreshing the page.
* Only necessary components are updated, improving speed and user experience.
* **Example**: Gmail, Facebook.

### 🗂️ MPA:

* Loads a **new HTML file** every time you navigate to a new page.
* Results in full-page reloads, which can increase **server load** and affect **performance**.

---

## 🧩 React Components

* React is **component-based**.
* A **component** represents a part of the UI (like a button, form, or page).
* Components can be:

  * **Function components**
  * **Class components**
* Components are **reusable**, **independent**, and can be **nested**.

---

## ⚙️ Why Use React?

* Prevents **full page reloads** when content changes.
* Uses **Virtual DOM** to optimize performance.
* Easy to maintain and scale with **component reusability**.
* Great for building **interactive UIs** with minimal effort.

---

## 🌳 DOM and Virtual DOM Explained

### 📜 DOM (Document Object Model)

* The **DOM** is a **tree-like structure** created by the browser to represent the HTML content.

### Example HTML:

```html
<html>
  <head>
    <title>React Demo</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>This is a paragraph</p>
  </body>
</html>
```

### DOM Tree Structure:

```
          html
         /    \
     head      body
       |      /     \
    title    h1      p
       |     |       |
React Demo  Hello  This is a paragraph
```

---

### 🪞 Virtual DOM

* React creates a **copy of the actual DOM** in memory → Virtual DOM.
* When changes happen:

  1. React updates the **Virtual DOM**.
  2. It **compares** the new Virtual DOM with the previous one (using a process called **diffing**).
  3. **Only the changed elements** are updated in the real DOM (using **reconciliation**).
* This makes React **fast and efficient**.

---

## 🤔 Why is React a Library (Not a Framework)?

* React focuses **only on the "view" layer** (UI) of the application.
* It **does not enforce structure**, routing, or state management — these can be added using other libraries.
* Because of this **modularity and flexibility**, React is classified as a **library**.

---

## 📊 Library vs Framework

| Aspect      | Library (e.g., React)                 | Framework (e.g., Angular, Vue)           |
| ----------- | ------------------------------------- | ---------------------------------------- |
| Control     | You control flow                      | Framework controls the flow              |
| Flexibility | Highly flexible                       | More structured                          |
| Scope       | Focuses on a specific part (e.g., UI) | Full set of tools (routing, state, etc.) |
| Integration | Requires manual integration of tools  | Comes with tools pre-integrated          |

### 🔧 Analogy:

* **Framework** = Scooter (everything built-in).
* **Library** = Brake (a part you can use as needed in a custom vehicle).

---

## ✅ Which One is Better?

> **There is no one-size-fits-all. It depends on your project.**

* **Large-scale apps**:

  * Frameworks are ideal as they come with predefined architecture, routing, and tools.
  * Reduces the hassle of finding and integrating different libraries.

* **Small/medium projects**:

  * Libraries like React offer **more control**, and you can pick only what you need.
  * Frameworks may feel **bloated** with unnecessary features.

> **Bike Analogy**:

* Which is better: **Pleasure or Bullet**?

  * **Pleasure**: Efficient for daily, long-distance rides.
  * **Bullet**: Great for power and show-off, but not practical for everyone.
  * Same logic applies to **React (Library)** vs **Angular/Vue (Frameworks)**.

---

## 🛠️ Node.js & NPM Basics

### 🔧 Node.js

* A **JavaScript runtime** that lets you run JS code **outside the browser**.
* Required to build React apps and manage packages.

### 📦 NPM (Node Package Manager)

* Comes installed with Node.js.
* Used to **install, update, and remove** JavaScript packages.

### 📌 Common NPM Commands:

```bash
npm install <package-name>       # Install a package
npm uninstall <package-name>     # Remove a package
```

---
© Page by Urvish Patel.