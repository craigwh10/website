import React from "react";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import { Col } from "react-bootstrap";

const FilterableBlogs: React.SFC = () => {
  return (
    <React.Fragment>
      <Col>
        <RecentBlogs
          stoppingPoint={50}
          filterTitle={true}
          isConditional={true}
        />
      </Col>
    </React.Fragment>
  );
};

export default FilterableBlogs;
