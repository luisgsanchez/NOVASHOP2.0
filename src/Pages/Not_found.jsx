import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-white">404</h1>
      <p className="text-secondary">Ruta no encontrada.</p>
      <Link className="btn btn-warning" to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
