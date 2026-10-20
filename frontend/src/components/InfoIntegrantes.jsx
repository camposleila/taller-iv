import { useEffect, useState } from "react";
import {
  Alert,
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from "reactstrap";

export default function InfoIntegrantes() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/info")
      .then((res) => {
        if (!res.ok) throw new Error("Respuesta no válida");
        return res.json();
      })
      .then(setInfo)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <Alert color="danger">No se pudo obtener la información del API.</Alert>;
  }

  if (!info) {
    return (
      <div className="text-center">
        <Spinner color="primary" />
      </div>
    );
  }

  return (
    <>
      <Alert color="success" className="text-center">
        {info.message}
      </Alert>

      <Row>
        {info.integrantes.map((p) => (
          <Col md="6" lg="4" key={p.nombre} className="mb-3">
            <Card className="shadow-sm h-100">
              <CardHeader className="fw-bold">{p.nombre}</CardHeader>
              <CardBody>
                <CardTitle tag="h5">{p.carrera}</CardTitle>
                <ListGroup flush>
                  <ListGroupItem>
                    Edad: <Badge color="info">{p.edad} años</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Materias aprobadas:{" "}
                    <Badge color="primary">{p.materiasAprobadas}</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
