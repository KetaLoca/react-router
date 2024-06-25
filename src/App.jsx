import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("pushstate", onLocationChange);
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("pushstate", onLocationChange);
      window.removeEventListener("popstate", onLocationChange);
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
