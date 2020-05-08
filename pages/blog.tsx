import { Container, Row } from "react-bootstrap";
import FilterableBlogs from "../components/FilterableBlogs/FilterableBlogs";
import BlogKeyChoices from "../components/BlogKeyChoices/BlogKeyChoices";
//
import { useState } from "react";
import { filterContext } from "../helper/ChoiceContext/ChoiceContext";

function HomePage() {
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <filterContext.Provider value={{ filterChoice, setFilterChoice }}>
      <Container>
        <Row>
          <FilterableBlogs />
          <BlogKeyChoices />
        </Row>
      </Container>
    </filterContext.Provider>
  );
}

export default HomePage;
