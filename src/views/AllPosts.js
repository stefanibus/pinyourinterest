import React, { useState, useEffect } from "react";
import { useParam } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
/* import Col from 'react-bootstrap/Col'; */
/* https://react-bootstrap.github.io/components/cards/#card-columns */
import PostGrid from "../components/PostGrid";

const AllPosts = ({ postsDataForUsers }) => {

  return (
    <Container id="allposts" className="textLeft">
      <Row>
        <div>
          <div>
            <h1>All your Posts</h1> 
          </div>
        </div>
      </Row>
      <Row>
        {/* empty Array "THERE ARE NO POSTS" will be desplayed */}
        {postsDataForUsers !== [] ? (
          <PostGrid listPosts={postsDataForUsers} />
        ) : (
          <div>THERE ARE NO POSTS</div>
        )}
      </Row>
    </Container>
  );
};
export default AllPosts;
