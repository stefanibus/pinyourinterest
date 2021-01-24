import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
/* import Col from 'react-bootstrap/Col'; */
import PostGrid from "../components/PostGrid";

const BestRatedPosts = ({ bestRatedPosts }) => {
//   console.log("bestRatedPosts", bestRatedPosts); 

  return (

    <Container id="bestRatedPosts"  className="bestratedposts  container  textLeft">
      <Row>
        <div>
          <div>
            <h1>Only the best rated Posts</h1>
          </div>
        </div>
      </Row>
      <Row>

 
 {/* empty Array "THERE ARE NO POSTS" will be desplayed */}
        {bestRatedPosts !== undefined ? (
          <PostGrid listPosts={bestRatedPosts} />
        ) : (
          <div>THERE ARE NO POSTS</div>
        )}
 
      </Row>
    </Container> 
  );
};
export default BestRatedPosts; 