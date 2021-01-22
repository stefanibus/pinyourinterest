import CardColumns from "react-bootstrap/CardColumns";
import Post from "./Post";

const PostGrid = ( {listPosts} ) => {
    /* Convert fetched post data list to JSX items */
    /* no listPosts available yet it returns an empty Array, else it returns the Posts components of all items */
    const allPosts = listPosts 
      ? listPosts.data.items.map((post, index)  => {
        // compare userArrayID with userID  
        const userID = post.fields.userref.sys.id 
        const userArray = listPosts.data.includes.Entry   
        /* FIXME: "Array.prototype.map() expects a return value from arrow function. [13, 34]"*/
        userArray.map((user, index) => { 
          // find matching ID Values 
          if (user.sys.id.toString() === userID.toString()) { 
            // add relevant user Data to the post-object 
            post.user = user.fields 
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