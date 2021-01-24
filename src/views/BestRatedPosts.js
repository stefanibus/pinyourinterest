import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
/* import Col from 'react-bootstrap/Col'; */
import PostGrid from "../components/PostGrid";

const BestRatedPosts = ({ bestRatedPosts }) => {
  console.log("bestRatedPosts", bestRatedPosts);

  return (

    <Container id="bestRatedPosts"  className="bestratedposts  container  textLeft">
      <Row>
        <div>
          <div>
            <h1>Only the best rated Posts</h1>
            <p>
              To easily filter <b>'All your Posts'</b>
            </p>
            <p>please use the above Input-field.</p>
          </div>
        </div>
      </Row>
      <Row>
        {/* empty Array "THERE ARE NO POSTS" will be desplayed */}
        {bestRatedPosts !== {} ? (
          <PostGrid listPosts={bestRatedPosts} />
        ) : (
          <div>THERE ARE NO POSTS</div>
        )}
      </Row>
    </Container> 
  );
};
export default BestRatedPosts; 