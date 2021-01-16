import React from 'react'; 
import { Link } from 'react-router-dom';

const src = "https://images.unsplash.com/photo-1600695268275-1a6468700bd5?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MXwxOTgyNjR8MHwxfHNlYXJjaHw3fHw0MDQlMjBlcnJvcnxlbnwwfHx8\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400";
const PageNotFound = () => { return ( 
		 <div> 

		 	<h1>404 </h1>
            <h2>Irgendetwas ist schiefgegangen! </h2> 
 			<p>
            <img src={src}  />
</p>
 			<h1> 
              <Link to="/">Go to Home </Link>
            </h1> 
          </div>); 
      } 

export default PageNotFound

