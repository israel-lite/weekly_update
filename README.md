# Task Manager Pro

A modern, responsive task management application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Create, edit, and delete tasks
- 🏷️ Organize tasks by category and priority
- 📅 Set due dates for tasks
- 📊 View task statistics and completion rates
- 💾 Local storage persistence
- 🎨 Modern glassmorphism UI design
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for Vercel deployment. Simply connect your repository to Vercel and it will deploy automatically.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application page
├── components/
│   ├── TaskForm.tsx         # Task creation form
│   ├── TaskList.tsx         # Task list display
│   └── TaskStats.tsx        # Statistics dashboard
├── types/
│   └── task.ts              # TypeScript type definitions
├── vercel.json              # Vercel deployment configuration
└── package.json             # Dependencies and scripts
```

## Features Details

### Task Management
- Add tasks with title, description, priority, category, and due date
- Mark tasks as complete/incomplete
- Delete tasks
- Filter tasks by status (all, active, completed)

### Categories
- Personal
- Work
- Shopping
- Health
- Other

### Priority Levels
- Low (green)
- Medium (yellow)
- High (red)

### Statistics
- Total tasks count
- Completed tasks count
- Completion rate percentage
- Tasks due today

The application uses localStorage to persist data between sessions, making it a fully functional client-side task manager.
