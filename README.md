# 🎱 Webster's Wise-Ball

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=googlechrome&logoColor=white)](https://jaxonwebster.github.io/WebstersWiseBall/)

Webster's Wise-Ball is a digital twist on the classic Magic 8-Ball. Built with a focus on smooth UI transitions and randomized logic, it provides "expert" mystical advice to users' most pressing questions.

Mostly, this is a fun way for my family to make trivial decisions! The output of the ball is currently configured to display family inside jokes, and reference the names of some of the members of our family. The whole family loves to use this site!

---

## ✨ Features
* **Interactive Input:** Users can submit their questions.
* **Validation Logic:** Prevents "empty" inquiries—the spirits require a typed question before revealing the truth.
* **Dynamic UI:** A clean, centered interface with smooth CSS animations for the ball's responses, including the ball visually shaking like a real in-person ball would do.
* **Randomized Wisdom:** A custom array of "Webster-style" responses that vary with every click.

## 🛠️ Built With
* **HTML5:** Structured for a clean, semantic user experience.
* **CSS3:** Custom styling featuring Flexbox for responsiveness and animated transitions for the 8-ball.
* **JavaScript (ES6):** Logic for input validation, event handling, and randomized response selection.

## 🚀 How It Works
1.  **Input:** The user types a question into the text field.
2.  **Verification:** The script checks to ensure the field isn't blank.
3.  **The Reveal:** Upon clicking "What say Webster?", the `W` logo transitions into a randomly selected answer from the `answers` array.
4.  **Reset:** Users can clear the board and ask a new question instantly.
