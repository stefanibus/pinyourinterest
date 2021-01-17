import React, { useState } from "react";
import { useParam } from "react-router-dom";
const AllPosts = () => {
  // const { Futureuse } = useParams();

  return (
    <div className="allpots  container centerPage">
     <div>
      	<h1>All your Posts</h1>
      	<div>
      		To easily filter <b>'All your Posts'</b> <br/>
      		please use the above Input-field.<br/>
      		

      	</div>
      </div> 
    </div>
  );
};
export default AllPosts;
