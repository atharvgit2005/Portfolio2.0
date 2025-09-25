# Developer & Windsurfer – Portfolio

A modern, single-page portfolio that blends an energetic, ocean-inspired aesthetic with professional polish. Built with React + Tailwind on the frontend and Express + Prisma (SQLite) on the backend.

## Tech Stack
- Frontend: React (Create React App) + Tailwind CSS
- Backend: Node.js + Express.js
- Database/ORM: Prisma + SQLite

## Project Structure
```
Portfolio/
├─ frontend/           # React + Tailwind SPA
│  ├─ public/
│  └─ src/
├─ backend/            # Express API + Prisma ORM
│  └─ prisma/
└─ package.json        # Root helper scripts
```

## Prerequisites
- Node.js 18+
- npm 9+

## 1) Install Dependencies
From the project root `Portfolio/`:

```bash
npm run install:all
```

This installs:
- Root dev tools (concurrently)
- Frontend dependencies (React, Tailwind, CRACO)
- Backend dependencies (Express, Prisma, Nodemon)

## 2) Setup the Database
Generate the Prisma Client and push the schema (creates `dev.db`):

```bash
# From Portfolio/backend
npm run db:generate
npm run db:push
```

If you prefer migrations for development:
```bash
npm run db:migrate
```

## 3) Run the App (Dev)
You can start both servers in parallel from the root:

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend:  http://localhost:5000

Notes:
- The frontend is configured with a CRA proxy to the backend at `http://localhost:5000` (see `frontend/package.json`), so API calls can use relative paths like `/api/contact`.

## 4) Environment Variables
The backend reads variables from `backend/.env` (already created):
```
PORT=5000
NODE_ENV=development
DATABASE_URL="file:./dev.db"
FRONTEND_URL=http://localhost:3000
```

## 5) API Endpoints
- `GET /api/health` – Health check
- `POST /api/contact` – Accepts `{ name, email, message }`, stores in SQLite via Prisma
- `GET /api/contacts` – Returns all contact messages (basic admin/testing)

## 6) Frontend Sections
- Header/Navbar – Sticky links to Home, About, Projects, Contact
- Home/Hero – Name, title, short bio, bold CTA buttons
- About – Ocean-inspired narrative with LFS highlight
- Tech Stack – Clean icon/tag-style grid of skills
- Projects – Feature cards with demo/code links
- Contact – Clean form (Name, Email, Message) that posts to `/api/contact`

## 7) Customization
- Replace "Your Name Here" in:
  - `frontend/src/components/Hero.js`
  - `frontend/src/components/Navbar.js` (brand text)
  - `frontend/src/App.js` (footer)
- Update GitHub and LinkedIn links in `Hero.js` and `Contact.js`.
- Add real project links in `Projects.js`.

## 8) Common Dev Commands
Frontend (in `frontend/`):
```bash
npm start           # Starts CRA via CRACO
npm run build       # Production build
```

Backend (in `backend/`):
```bash
npm run dev         # Starts Express with Nodemon
npm start           # Starts Express
npm run db:generate # Generate Prisma Client
npm run db:push     # Create/update SQLite schema
```

## 9) Troubleshooting
- Tailwind styles not applied: ensure `frontend/src/index.css` begins with `@tailwind base; @tailwind components; @tailwind utilities;` and that the `content` paths in `tailwind.config.js` include `./src/**/*.{js,jsx,ts,tsx}`.
- Prisma errors: re-run `npm run db:generate` and `npm run db:push` in `backend/`.
- CORS issues: confirm `FRONTEND_URL` in `backend/.env` matches your frontend origin.

Enjoy riding both code and waves! 🌊
