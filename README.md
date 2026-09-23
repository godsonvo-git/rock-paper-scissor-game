# ✊ Rock Paper Scissors

> An interactive Rock Paper Scissors game built with **HTML, CSS, and JavaScript**, featuring computer-generated choices, live score tracking, reset functionality, and interactive animations.

<div align="center">

### 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-View_Project-2ea44f?style=for-the-badge)](https://godsonvo-git.github.io/rock-paper-scissor-game/)

</div>

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📸 Preview

![Rock Paper Scissors Game] <img width="1896" height="901" alt="Screenshot 2026-09-23 163840" src="https://github.com/user-attachments/assets/7cdead4f-1d2f-4457-918e-1cc8047c8ecc" />


---

## ✨ Overview

**Rock Paper Scissors** is an interactive browser-based game created to practice fundamental **JavaScript, DOM manipulation, event handling, and CSS animations**.

The player can choose Rock, Paper, or Scissors and compete against a randomly generated computer choice. The game automatically determines the result and keeps track of wins, losses, and ties.

---

## 🚀 Features

- ✊ Rock selection
- ✋ Paper selection
- ✌️ Scissors selection
- 🤖 Random computer choice
- 🏆 Automatic win detection
- ❌ Loss detection
- 🤝 Tie detection
- 📊 Live score tracking
- 🔄 Reset score functionality
- ✨ Interactive pulse animations
- 🖱️ Hover and click effects
- 🎨 Clean and colorful UI
- ⚡ Lightweight and fast
- 🧩 Built with Vanilla JavaScript

---

## 🎮 Game Rules

| Player Choice | Beats |
|---|---|
| ✊ Rock | ✌️ Scissors |
| ✋ Paper | ✊ Rock |
| ✌️ Scissors | ✊ Rock |

The computer randomly selects one of the three choices, and the game compares both choices to determine the result.

---

## 🏆 Score Tracking

The game keeps track of three different results:

| Score | Description |
|---|---|
| 🟢 **Wins** | Number of rounds won by the player |
| 🔴 **Losses** | Number of rounds won by the computer |
| 🟡 **Ties** | Number of rounds where both choices were the same |

The **Reset Scores** button resets all counters back to zero.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Structure and content of the game |
| **CSS3** | Styling, layout, hover effects, and animations |
| **JavaScript** | Game logic, DOM manipulation, and event handling |
| **Google Fonts** | Nunito typography |

---

## 🧠 JavaScript Concepts Practiced

This project helped me practice several important JavaScript fundamentals:

- DOM element selection
- Variables
- Functions
- `querySelector()`
- `querySelectorAll()`
- `getElementById()`
- `addEventListener()`
- Click events
- Conditional statements
- Random number generation
- Arrays
- Template literals
- `innerText`
- `innerHTML`
- Updating the DOM dynamically
- Score tracking

---

## 🎨 UI & CSS

The interface uses a colorful and minimal design with:

- 🎨 Custom color palette
- 📐 Flexbox layout
- 🔵 Circular game buttons
- ✨ Pulse-glow animations
- 🖱️ Hover effects
- 👆 Active button animations
- 🔄 Interactive reset button
- 🔤 Google Fonts integration
- 🧭 Navigation bar
- 📱 Viewport configuration for different screen sizes

The game buttons also use a custom **pulse-glow animation** when interacting with different elements of the interface.

---

## ⚙️ How It Works

The game generates a random number between `1` and `3` for the computer's choice:

```text
1 → ✊ Rock
2 → ✋ Paper
3 → ✌️ Scissors
