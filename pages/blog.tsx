import { Container, Row, Col } from "react-bootstrap";
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
            <Col lg={12}>
              <div className="alert alert-success mt-3 mb-3" role="alert">
                I have also released my first{" "}
                <a
                  href="https://medium.com/@craigwh10/creating-deploying-your-own-blogging-site-for-free-using-reactjs-contentful-nextjs-vercel-b415d01d37e8"
                  target="_blank"
                >
                  medium article
                </a>{" "}
                on how you can make your own blogging site similar to this one
                🎉.
              </div>
            </Col>
          </Row>
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
