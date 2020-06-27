import { Container, Row } from "react-bootstrap";
import FilterableBlogs from "../components/FilterableBlogs/FilterableBlogs";
import BlogKeyChoices from "../components/BlogKeyChoices/BlogKeyChoices";
//
import { useState } from "react";
import { filterContext } from "../helper/ChoiceContext/ChoiceContext";
import Head from "next/head";

function BlogPage() {
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <>
      <Head>
        <title>Blogs - Craigwh.it</title>
        <meta name="author" content="Craig White" />
        <meta
          name="keywords"
          content="Blogs,Web Development,Product,Analysis,Development"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>

      <filterContext.Provider value={{ filterChoice, setFilterChoice }}>
        <Container>
          <Row>
            <BlogKeyChoices />
            <FilterableBlogs />
          </Row>
        </Container>
      </filterContext.Provider>
    </>
  );
}

export default BlogPage;
