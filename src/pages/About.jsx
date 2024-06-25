import { Link } from "../Link.jsx";

export default function AboutPage() {
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
      <Link to="/">Ir a la Home</Link>
    </>
  );
}
