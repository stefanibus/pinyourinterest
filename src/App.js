import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
/* views */
import AllPosts from "./views/AllPosts.js";
import BestRatedPosts from "./views/BestRatedPosts";
import PageNotFound from "./views/404";
import NavBar from "./components/NavBar";
import Formular from "./components/Formular";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [postsDataForUsers, setPostsDataForUsers] = useState();
  const [bestRatedPosts, setBestRatedPosts] = useState();

  const bestRatedPostsURL = "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.rating[gte]=4"

  const getAllPosts= async () => {
    try {
      const getUserData = await axios.get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=users"
      );
      const userIds = getUserData.data.items.map((iteration) => {
        return iteration.sys.id;
      });
      const getURLDynamic =
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[in]=" +
        userIds;
      const callPosts = await axios.get(getURLDynamic);
      setUserData(getUserData);
      setPostsDataForUsers(callPosts);
    } catch (err) {
      console.error(err);
    }
  };

  const getBestRatedPosts = async() => {
    try {
      const callBestRatedPosts = await axios.get(bestRatedPostsURL);
      setBestRatedPosts(callBestRatedPosts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBestRatedPosts();
  }, []);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="App"> 
      <NavBar />
      <Formular />
      <Switch>
        <Route path="/allposts">
          <AllPosts postsDataForUsers={postsDataForUsers} />
        </Route>
        <Route path="/bestratedposts">
          <BestRatedPosts bestRatedPosts={bestRatedPosts}/>
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
