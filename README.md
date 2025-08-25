# 📝 Next.js To-Do List App

A simple **To-Do List** built with **Next.js 15**, **React**, and **Tailwind CSS**.  
It supports adding, editing, deleting, and marking tasks as completed.  
Tasks are persisted in **localStorage**, so your list stays even after refreshing the page.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks (title, description, mark as critical)
- ❌ Delete tasks with confirmation popup
- ✅ Mark tasks as complete / incomplete
- 💾 Data persistence using **localStorage** (no backend required)
- 🎨 Clean UI styled with Tailwind CSS and modals powered by `reactjs-popup`

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Client Components)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [reactjs-popup](https://www.npmjs.com/package/reactjs-popup) for modals

---

--- 
✨ Future Improvements

🔍 Task Filters → View all, active, or completed tasks

📅 Due Dates & Reminders → Add deadlines with notifications

📱 Mobile Optimization → Improve responsive UI for small screens

⬆️ Drag-and-Drop Reordering → Reorder tasks easily

☁️ Backend Persistence → Save tasks in a real database (Postgres, Firebase, Supabase)

👤 User Authentication → Multi-user support with secure login

---

## 🏃 Run Locally at http://localhost:3000

Clone the repo and start the dev server:

```bash
git clone https://github.com/Telly1597/Simple-Elegant-ToDo-React-app.git
cd your-repo

npm run dev

/app
  /components
    ├── ToDoListCard.tsx      # Input box + Add button
    ├── SingleItem.tsx        # Single task row
    ├── DeletePopup.tsx       # Confirm delete modal
    ├── EditPopUp.tsx         # Edit task modal
  /Data
    └── data.ts               # Initial seed tasks
  page.tsx (HomePage)         # Main page rendering the list

/tailwind.config.js           # Tailwind configuration
/package.json                 # Dependencies & scripts
/README.md
``` 
## 📜 License

This repository is **free to use and modify** for learning purposes.

