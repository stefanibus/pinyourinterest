import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
/* views */
import AllPosts from "./views/AllPosts.js";
import BestRatedPosts from "./views/BestRatedPosts";
import PageNotFound from "./views/404";
import NavBar from "./components/NavBar";
import Formular from "./components/Formular";
import Dropdown from "./components/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// THE DROPDOWN-CLOSE FUNCTION CAN BE ENHANCED   // ESTABLISH ONE OF THE TWO COMPONENTS BELOW  [UNFINISHED BUSINESS] 
// import ClickOutsideTest from "./components/construction/components_under_Construction/ClickOutsideTest.js"; // Does not work on Functional Components 
// import UseOutsideAlerter from "./components/construction/components_under_Construction/OutsideAlerter.js"; // Does not work on Functional Components 
 

export default function App() { 
  const [postsDataForUsers, setPostsDataForUsers] = useState();
  const [arrayofUsers, setArrayofUsers] = useState([]);
  

  const getAllPost = async (passValTest) => { 
    try {
      const getUserData = await axios.get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=users"
      );  
      // getUserData can be replaced with arrayofUsers AFTER  we improoved DropDown.js         // DropDown.js can not yet use arrayofUsers  because  the Elements inside of Dropdown-Select  would get filtered due to their State (that is undesiered behaviour)   // this should be improoved inside of DropDown.js the futue      // The goal is to use only the following   stateVariable: --> arrayofUsers !  // for now we instead use this separate array: getUserData   
      setArrayofUsers(getUserData);

      const userIds = getUserData.data.items.map((iteration) => { 
          // ONLY ONE USER --> if true, then pass that UserID  via API-Request  --> the 'passValTest' Argument is passed via triggering-prop from Component: Dropdown.js   
        if (passValTest) { return passValTest; } 
          // ALL USERS -->  use iteration.sys.id  to get the Array of all USERS from Contentful    
          return iteration.sys.id; 
      });

      // Develop locally and Offline
      const getURL_Offline_Localhost = 
        "http://localhost/WBS/stefano/contentful/pinyourinterest/public/entries.json"
       // API-request URL   
      const getURLDynamic =
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[in]=" +
        userIds;

      const callPosts = await axios.get(getURLDynamic);
 
      setPostsDataForUsers(callPosts);
    } catch (err) {
      console.error(err);
    }
  };
 

  useEffect(() => {
    getAllPost(); 
  }, []);

  return (
    <div className="App">  
        <NavBar /> 
        <div className="container">    
             <Dropdown 
                    userInformation={arrayofUsers} 
                    title="Select User"  
                    multiSelect   
                    userArray={postsDataForUsers} 
                    triggering={ (data) => {  
                       getAllPost(data)
                        } }  
             />
        </div> 
      <Formular />   
      <Switch>
        <Route path="/allposts">
          <AllPosts postsDataForUsers={postsDataForUsers} />
        </Route>
        <Route path="/bestratedposts">
          <BestRatedPosts />
        </Route>
        <Route exact path="/">
          <Redirect to="/allposts" />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
} 