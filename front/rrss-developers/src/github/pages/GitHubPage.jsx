import RepositorieAcordion from "../components/RepositorieAcordion"
import { useDispatch, useSelector } from "react-redux"
import { loadRespositories } from "../../store/developer/thunks";
import { useEffect } from "react";
import { Accordion, Col,Row, Container } from "react-bootstrap";

const GitHubPage = () => {
  const dispatch = useDispatch();
  const { repositories } = useSelector(state => state.developer);

  useEffect(() => {
    dispatch(loadRespositories())
    console.log(repositories)

  }, [dispatch])
  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4 ">Repositorios</h2>
      {repositories.length > 0 &&

        <Accordion >
          <Row>
            {repositories.map((repo) => {

              return (

                <Col lg={4}>
                  <RepositorieAcordion repoData={repo} />
                </Col>
              )

            })
            }
          </Row>
        </Accordion>
      }


    </Container>
  )
}

export default GitHubPage