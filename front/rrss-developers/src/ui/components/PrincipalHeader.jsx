import { useState } from "react";
import { Container, Col, Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
function PrincipalHeader() {
  const [searchText, setSearchText] = useState()
  const [objetiveSearch, setObjetiveSearch] = useState({
    github: false,
    youtube: false
  })
  const [alertMessage, setalertMessage] = useState("d-none");
  const navigate = useNavigate();



  const onTextSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const onCheckChange = (e) => {
    if (e.target.name === "youtube") setObjetiveSearch({ ...objetiveSearch, youtube: !objetiveSearch.youtube })
    if (e.target.name === "github") setObjetiveSearch({ ...objetiveSearch, github: !objetiveSearch.github })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      (searchText === '' || searchText === undefined) &&
      (objetiveSearch.github === false && objetiveSearch.youtube === false)) {
      setalertMessage('')
    }else{
      setalertMessage('d-none');
      navigate(`search/?youtube=${objetiveSearch.youtube}&github=${objetiveSearch.github}`)
    }

  }

  return (
    <header>
      <Container fluid id="headerContainer" className="d-flex align-items-center justify-content-center ">
        <Container className="d-flex flex-column align-items-center justify-content-center"  >
          <Col md="auto" id="header-form" className="p-3">
            <h1> RRSS Developers</h1>
            <p>En esta eb podrás consultar de un solo vistazo , o hacer búsquedas en los aportes que nos dejan los mejores influencers de la comunidad developer en Youtube Github y Twitter</p>
            <Form onSubmit={onHandleSubmit}>
              <Form.Group className="d-flex flex-wrap">
                <Form.Control
                  placeholder="Tu búsqueda"
                  value={searchText || ''}
                  className="mb-2"
                  name={"search"}
                  onChange={(e) => onTextSearchChange(e)}
                />
                <Form.Check
                  type="checkbox" label="Repositorios GitHub"
                  name="github" value={objetiveSearch.github}
                  onChange={(e) => onCheckChange(e)}

                />
                <Form.Check
                  className="ms-2" type="checkbox" label="Videos y listas Youtube"
                  name="youtube" value={objetiveSearch.youtube}
                  onChange={(e) => onCheckChange(e)}

                />

                <Button className="ms-2" variant="dark" type="submit">Buscar</Button>

              </Form.Group>
            </Form>
            <Alert variant="danger" className={`mt-2 ${alertMessage}`} >Debe de introducir un texto y seleccionar un campo de búsqueda</Alert>

          </Col>

        </Container>
      </Container>

    </header>


  )
}

export default PrincipalHeader