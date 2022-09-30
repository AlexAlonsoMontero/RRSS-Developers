import { Card, Container } from "react-bootstrap"
import DeveloperCard from "../components/DeveloperCard"
import imgPrueba from "https://avatars.githubusercontent.com/u/78025567?s=96&v=4"

const DeveloperPage = () => {
  return (
    <Container className="mt-4">
      <h2>Developers</h2>
      <p>Es tos son nuestros developers</p>
      <DeveloperCard />
      <Card>
        <Card.Img variant="top" src={imgPrueba}/>
      </Card>


    </Container>


  )
}

export default DeveloperPage