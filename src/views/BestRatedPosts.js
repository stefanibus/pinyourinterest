import React, { useState } from "react";
import { useParam } from "react-router-dom";
const BestRatedPosts = () => {
  // const { Futureuse } = useParams();

  return (
    <div className="bestratedposts  container  centerPage">
     <div>
      <h1>BestRatedPosts</h1>
      <div>
      	Theese are your <b>five favourite  Posts</b>.
      	<br/> 
      	To see <b>all</b> your Posts please visit the navigation above.  
      </div>
     </div> 
    </div>  	
  );
};
export default BestRatedPosts;
