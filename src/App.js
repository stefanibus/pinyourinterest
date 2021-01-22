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
  const [filterData, setFilterData] = useState({});
  const [initialPostsDataForUsers, setInitalPostsDataForUsers] = useState();

  const filterPost = (text) => {
    // const newArry = postsDataForUsers.filter(postValue) =>

    const copyData = { ...initialPostsDataForUsers };
    const newArry = initialPostsDataForUsers.items.filter((postValue) => {
      return postValue.fields.title.toLowerCase().includes(text.toLowerCase());
    });
    copyData.items = newArry;

    copyData.items.forEach((item) => {
      console.log(item.fields.title);
    });
    setFilterData(copyData);
  };

  const resetPosts = () => {
    setFilterData(initialPostsDataForUsers);
  };

  const getAllPost = async (handlefilter) => {
    try {
      const getUserData = await axios.get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=users"
      );
      const userIds = getUserData.data.items.map((iteration) => {
        return iteration.sys.id;
      });
      // getURLDynamic so abändern das nur die gefilterten Posts angezeigt werden filter()
      const getURLDynamic =
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[in]=" +
        userIds;
      const callPosts = await axios.get(getURLDynamic);
      setUserData(getUserData);

      //Save initial data to later reset.
      setInitalPostsDataForUsers(callPosts.data);
      setFilterData(callPosts.data);
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
      {filterData && filterData !== initialPostsDataForUsers && (
        <button onClick={resetPosts} type="button">
          Reset Posts
        </button>
      )}

      <Formular filterPost={filterPost} />
      <Switch>
        <Route path="/allposts">
          <AllPosts filterData={filterData} hello="some random text" />
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
