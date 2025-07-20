# Smart Goal Planner

A simple React app for managing, tracking, and depositing towards your personal financial goals.

## Features

- Add, edit, and delete savings goals
- Deposit money towards your goals
- See a summary overview of your progress
- All data stored in a local `db.json` file served with [json-server](https://github.com/typicode/json-server) (no back-end required)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [json-server](https://github.com/typicode/json-server) (installed automatically if you run `npx json-server ...`)

### Installation

1. **Clone this repository**
   ```sh
   git clone https://github.com/YOUR_USERNAME/smart-goal-planner.git
   cd smart-goal-planner
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Ensure `db.json` exists in your project root.**  
   You can use the provided sample or start with an empty array:
   ```json
   {
     "goals": []
   }
   ```

### Running the App

#### 1. Start the JSON server

> **Disclaimer:**  
> This project requires [json-server](https://github.com/typicode/json-server) to simulate a backend API.  
> All your data will be stored in the local `db.json` file.  
> **You must run the server from the directory containing `db.json`.**

```sh
npx json-server --watch db.json --port 3000
```

- The server will be available at [http://localhost:3000/goals](http://localhost:3000/goals).

#### 2. Start the React development server

In a new terminal tab/window:

```sh
npm run dev
```
or (if you use Create React App)
```sh
npm start
```

- The app will run at [http://localhost:5173](http://localhost:5173) (Vite default) or [http://localhost:3000](http://localhost:3000) (CRA default).

### Usage

- Add, edit, and delete goals.
- Make deposits towards goals using the "Deposit" form.
- Track your progress in the Overview section.

### Important Notes

- **Do not close the terminal running json-server** or the app will not be able to fetch or save your data.
- All data is stored locally in `db.json`. Deleting this file will erase your data.
- For a real deployment, you would need to replace json-server with a real backend.

- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## License

MIT

