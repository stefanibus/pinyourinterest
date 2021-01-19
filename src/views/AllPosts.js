import React, { useState, useEffect } from "react";
import { useParam } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
/* import Col from 'react-bootstrap/Col'; */
/* https://react-bootstrap.github.io/components/cards/#card-columns */
import PostGrid from "../components/PostGrid";

const AllPosts = () => {
  // const { Futureuse } = useParams();
  const listPosts = [];

  return (
    <Container id="allposts">
      <Row>
        <div>
          <div>
            <h1>All your Posts</h1>
            <p>To easily filter <b>'All your Posts'</b></p>
            <p>please use the above Input-field.</p>
          </div> 
        </div>
      </Row>
      <Row>
        {/* empty Array "THERE ARE NO POSTS" will be desplayed */}
        {listPosts===[]
        ? <PostGrid listPosts={listPosts}/>
        : <div>THERE ARE NO POSTS</div>
        }
      </Row>
    </Container>

  );
};
export default AllPosts;
