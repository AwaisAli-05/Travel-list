 # 🌴 Far Away — Travel Packing List App

A fun and interactive travel packing list app built with **React**. Never forget your essentials again — add items, set quantities, mark them as packed, and track your packing progress all in one place.

---

## 🖥️ Live Demo

> _Add your deployed link here (e.g. Netlify, Vercel)_

---

## 📸 Preview

![Far Away App Screenshot](./screenshot.png)

---

## ✨ Features

- ➕ **Add items** with a custom quantity selector
- ✅ **Mark items as packed/unpacked** using checkboxes
- ❌ **Delete individual items** from the list
- 🔃 **Sort items** by input order, name, or packed status
- 🗑️ **Clear the entire list** with one click
- 📊 **Live progress tracker** — shows total items and how many are packed (with percentage)

---

## 🛠️ Built With

- [React](https://reactjs.org/) — UI library
- React Hooks (`useState`) — state management
- CSS3 — styling and layout

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/far-away.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd far-away
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
far-away/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Logo.js         # App header with title and emoji
│   │   ├── Form.js         # Input form to add new items
│   │   ├── PackingList.js  # List of all items with sort & clear options
│   │   ├── Item.js         # Individual item with checkbox and delete button
│   │   └── Stats.js        # Footer showing packing progress
│   ├── App.js              # Root component with state management
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
└── README.md
```

---

## 🧠 How It Works

1. Select a **quantity** from the dropdown (1–20)
2. Type the **item name** in the input field
3. Click **ADD** to add it to your packing list
4. **Check the checkbox** next to an item once it's packed
5. Use the **sort dropdown** to organize your list
6. The **footer** updates in real time showing your packing progress
7. Hit **Clear List** to start fresh

---

## 📊 Stats Example

```
You have 4 items in your list and you already packed 0 (0%)
You have 4 items in your list and you already packed 4 (100%) 🎉
```

---

## 🌱 Future Improvements

- [ ] Save list to `localStorage` so it persists on refresh
- [ ] Add categories (Clothes, Electronics, Documents)
- [ ] Drag and drop to reorder items
- [ ] Export list as PDF or share via link

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Upwork: [Your Upwork Profile](https://upwork.com/freelancers/your-profile)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).
