import { Container, Col, Form, Button } from "react-bootstrap"
function PrincipalHeader() {
  return (
    <header>
      <Container fluid id="headerContainer" className="d-flex align-items-center justify-content-center shadow-lg">
        <Container className="d-flex flex-column align-items-center justify-content-center" md="auto" >
          <Col md="auto" id="header-form" className="p-3">
            <h1> RRSS Developers</h1>
            <p>En esta eb podrás consultar de un solo vistazo , o hacer búsquedas en los aportes que nos dejan los mejores influencers de la comunidad developer en Youtube Github y Twitter</p>
            <Form.Group className="d-flex">
            <Form.Control placeholder="Tu búsqueda"></Form.Control>
            <Button className="ms-2" variant="dark">Buscar</Button>

            </Form.Group>
            
            <Form.Group className="d-flex mt-2">
                <Form.Check type="checkbox" label="Repositorios" />
                <Form.Check className="ms-2" type="checkbox" label="Listas" />
                <Form.Check className="ms-2" type="checkbox" label="Vídeos" />
            </Form.Group>
          </Col>


        </Container>
      </Container>

    </header>


  )
}

export default PrincipalHeader