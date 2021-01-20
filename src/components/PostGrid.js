import CardColumns from "react-bootstrap/CardColumns";
import Post from "./Post";


const PostGrid = ( {listPosts} ) => {

  /* Converts fetched post data list to JSX items */
  const allPosts=listPosts.map((post, index) => (
    <Post post={post} key={index} />
  ))

  return(<CardColumns>{allPosts}</CardColumns>);
};

export default PostGrid;