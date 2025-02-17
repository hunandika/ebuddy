# Turborepo Monorepo Ebuddy

## 📌 Description
This project is a monorepo using Turborepo that contains a frontend built with Next.js and a backend built with Express.js. It also includes a shared `packages/` directory for reusable utilities.

## 🚀 Requirements
- Node.js >22
- npm >10

## 📂 Directory Structure
```
.
├── apps/
│   ├── backend/       # Express.js backend service
│   ├── frontend/      # Next.js frontend application
├── packages/          # Shared utilities and modules
├── turbo.json         # Turborepo configuration
├── package.json       # Root package configuration
```

## 📦 Installation
### 1. Clone the Repository
```sh
git clone git@github.com:hunandika/ebuddy.git
cd ebuddy
```

### 2. Install Dependencies
```sh
npm install
```

## 🏃 Running the Project
```sh
npm run dev
```
This will start both the backend and frontend concurrently.

## 🔨 Build & Deployment
To build the project:
```sh
npm run build
```

To lint the project:
```sh
npm run lint
```
