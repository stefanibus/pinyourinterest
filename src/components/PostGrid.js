import CardColumns from "react-bootstrap/CardColumns";
import Post from "./Post";
 
const PostGrid = ( {listPosts} ) => {
 
		const allPosts = listPosts ? listPosts.data.items.map((post, index)  => {

	      	// map-function to compare userArrayID with userID  
			const userID = post.fields.userref.sys.id 
			const userArray = listPosts.data.includes.Entry   
			userArray.map((i, index) => { 
				// find matching ID Values 
				if (i.sys.id == userID) { 
					// add relevant user Data to the post-iteration 
					post.user = i.fields 
				}  
			})   
			return  <Post post={post} key={index} />  
		}) : []
 
   return(
   	<> 
   	<CardColumns>{allPosts}</CardColumns>
	</> 
   	); 
};

export default PostGrid;

 
 