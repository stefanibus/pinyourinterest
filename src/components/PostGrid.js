import CardColumns from "react-bootstrap/CardColumns";
import Post from "./Post";

const PostGrid = ( {listPosts} ) => {
    /* Convert fetched post data list to JSX items */
    const allPosts = listPosts 
      ? listPosts.data.items.map((post, index)  => {
        // compare userArrayID with userID  
        const userID = post.fields.userref.sys.id 
        const userArray = listPosts.data.includes.Entry   
        /* FIXME: "Array.prototype.map() expects a return value from arrow function. [13, 34]"*/
        userArray.map((i, index) => { 
          // find matching ID Values 
          if (i.sys.id.toString() === userID.toString()) { 
            // add relevant user Data to the post-iteration 
            post.user = i.fields 
          } 
        })   
        return  <Post post={post} key={index} />  
      }) 
      : []

    return(
      <> 
        <CardColumns>{allPosts}</CardColumns>
      </> 
    ); 
};

export default PostGrid;  