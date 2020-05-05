import { Container, Row } from "react-bootstrap";
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";

function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <RecentBlogs stoppingPoint={50} />
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
