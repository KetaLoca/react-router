import { Link } from "../Link.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <Link to="/about">Ir a Sobre nosotros</Link>
      <br></br>
      <br></br>
      <Link to="/ketatesting">Testing Page Here</Link>
    </>
  );
}
