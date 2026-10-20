import { Container } from "reactstrap";
import HealthStatus from "./components/HealthStatus.jsx";
import InfoIntegrantes from "./components/InfoIntegrantes.jsx";

export default function App() {
  return (
    <Container className="py-4">
      {/*título del frontend*/}
      <h1 className="titulo text-center mb-4">Taller IV</h1>

      {/*sección con div, section, h4, p y estilos CSS*/}
      <HealthStatus />

      {/*componentes de Reactstrap con la info de los integrantes */}
      <InfoIntegrantes />
    </Container>
  );
}
