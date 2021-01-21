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

export default function App() { 
  const [postsDataForUsers, setPostsDataForUsers] = useState();
 

  const getAllPost = async (passValTest) => { 
    try {
      const getUserData = await axios.get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=users"
      );
      const userIds = getUserData.data.items.map((iteration) => {

        if (passValTest) {
          // console.log('passValTest from inside of the  axios call ');
          // console.log(passValTest);
          return passValTest;          
        } 
          // console.log('pass iteration.sys.id from inside of the  axios call '); 
          return iteration.sys.id; 
      });
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
      <Formular />
      <Dropdown userArray={postsDataForUsers} triggering={ (data) => {  
        getAllPost(data)} }  />
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
