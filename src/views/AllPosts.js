import React, { useState, useEffect } from "react";
import { useParam } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
/* import Col from 'react-bootstrap/Col'; */
/* https://react-bootstrap.github.io/components/cards/#card-columns */
import CardColumns from "react-bootstrap/CardColumns";
import Post from "../components/Post";

const AllPosts = () => {
  // const { Futureuse } = useParams();
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    listAllPosts();
  }, [])



  /* maps all Posts in a variable listPosts */
  const listAllPosts = () => {
    setListPosts(
      listPosts.map((post, index) => (
        <Post post={post} key={index} />
      ))
    );
  }

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
        {/* is there on or more Posts in the List of Post show all post. if not show nothing*/}
        { listPosts 
          ? <CardColumns>{listPosts}</CardColumns> 
          : <div>THERE ARE NO POSTS</div> 
        }
        
      </Row>
    </Container>

  );
};
export default AllPosts;
