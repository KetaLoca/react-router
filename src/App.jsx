import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1"
          alt="Foto gatito"
        />
        <p>Holaaa, estamos creando un clon de React Router</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a la Home</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath == "/" && <HomePage />}
      {currentPath == "/about" && <AboutPage />}
    </main>
  );
}

export default App;
