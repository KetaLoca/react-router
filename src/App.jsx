import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import { Router } from "./Router";
import { Link } from "./Link";

const routes = [
  { path: "/", Component: HomePage },
  { path: "/about", Component: AboutPage },
  {
    path: "/ketatesting",
    Component: () => (
      <div>
        <h1>Probando las rutas</h1>
        <img
          src="https://i.pinimg.com/236x/b0/52/fd/b052fd86b510887c2e1e907cdd5fd60f.jpg"
          alt="Gatito tryahrd"
        />
        <p><Link to="/">Volver a la Home</Link></p>
      </div>
    ),
  },
];

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  );
}

export default App;
