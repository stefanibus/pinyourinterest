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
  const [postsDataForUsers, setPostsDataForUsers] = useState([]);

  const getAllPost = async () => {
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
      setPostsDataForUsers(callPosts.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  const logFunction = () => {
    console.log("postsDataForUsers   )): ");
    console.log(postsDataForUsers);

    console.log("postsDataForUsers  ");
    console.log(postsDataForUsers);
    console.log("postsDataForUsers[0].fields.userref.sys.id   ");
    console.log(postsDataForUsers[0].fields.userref.sys.id); // UserREferenzID
    console.log(postsDataForUsers[0].fields.description); // Description
    console.log(postsDataForUsers[0].fields.title); // Title
    console.log(postsDataForUsers[0].fields.rating); // Rating
    console.log(postsDataForUsers[0].fields.webimage); // Webimage
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log("logFunction()");
          logFunction();
        }}
      >
        {" "}
        logFunction() !
      </button>{" "}
      <br />
      <NavBar />
      <Formular />
      <Switch>
        <Route path="/allposts">
          <AllPosts />
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
