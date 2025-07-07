# 🚀 React.js – Day 4 Notes

## 🔹 What is `State` in React?

* Think of **state** like a **special variable** that stores values inside a React component.
* But unlike normal variables, when **state changes, the component re-renders** automatically.

### 🧠 State = Variable + Memory + UI Update

---

### 🔸 How to Use `useState`

```jsx
import React from "react";
import { useState } from "react";

const Contact = () => {
    let [name,setName] = useState("Urvish");
    let [city,setCity] = useState("Ahmedabad");

    return(
        <>
            <h1>Contact Me here.</h1>
            <p style={{color:"red",fontSize:"30px"}}>
            I am {name}, living in {city}</p>
        </>
    )
}
export default Contact;
```

### 🔍 Explanation:

| Code                 | Meaning                                             |
| -------------------- | --------------------------------------------------- |
| `useState("Urvish")` | Sets initial state to `"Urvish"`                    |
| `[name, setName]`    | `name` is value, `setName` is function to update it |
| `{name}`             | Print state value inside JSX                        |
| `setName(newValue)`  | Updates the state (re-renders UI)                   |

---

## 🔹 What are **Props** (Properties)?

* **Props** = **Data passed from one component to another**
* Like function arguments, but for components
* They are **read-only**

---

### 👇 Practical Example:

#### ✅ `About.jsx` – Receiving Props

```jsx
import React from "react";

const About = (props) => {
    return(
        <h1>Its all About {props.course}</h1>
    )
}
export default About;
```

#### ✅ `App.jsx` – Sending Props

```jsx
import React from 'react';
import About from './Components/About';

const App = () => {
  return (
    <>
       <About course="React.js" />
    </>
  );
}

export default App;
```

* Shows output as `Its all About React.js`.
---

## 🔹 JSX Rules You MUST Follow

| Rule                      | Explanation                                                                    |
| ------------------------- | ------------------------------------------------------------------------------ |
| **Fragmentation**         | Use `<> </>` or `<React.Fragment>` when returning multiple elements            |
| **CamelCase Naming**      | JSX attributes use camelCase (e.g., `onClick`, `className`)                    |
| **Self-Closing Tags**     | Always close tags: `<img />`, `<input />`, etc.                                |
| **`class` → `className`** | In JSX, use `className` instead of `class` (to avoid conflict with JS `class`) |
| **Inline Styling**        | Use objects: `style={{ color: "red", fontSize: "20px" }}`                      |

---

### 🔹 Example of Correct JSX:

```jsx
function App() {
  return (
    <>
      <h1 className="title" style={{ color: "blue" }}>
        Welcome!
      </h1>
      <img src="logo.png" alt="Logo" />
    </>
  );
}
```

---
© Page by Urvish Patel