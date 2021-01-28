import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";  
import axios from "axios"; 
import AllPosts from "./views/AllPosts.js";
import BestRatedPosts from "./views/BestRatedPosts";
import PageNotFound from "./views/404";
import NavBar from "./components/NavBar";
import Formular from "./components/Formular";
import Dropdown from "./components/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 

export default function App() { 
    const [filterData, setFilterData] = useState({}); 
    const [postsDataForFilter, setInitalPostsDataForFilter] = useState({}); 
    const [bestRatedPosts, setBestRatedPosts] = useState(); 
    const [initialPostsDataForUsers, setInitalPostsDataForUsers] = useState();
    const [userData, setUserData] = useState([]);
     
    const filterPost = (text) => {  
    const copyData = { ...postsDataForFilter };
    const newArry = postsDataForFilter.items.filter((postValue) => {
      return postValue.fields.title.toLowerCase().includes(text.toLowerCase());
    });
    copyData.items = newArry; 
    setFilterData(copyData);
  };

    const resetPosts = () => {
      setFilterData(initialPostsDataForUsers);
    }; 
    const bestRatedPostsURL = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENV_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&content_type=posts&fields.rating[gte]=4` 
    const getAllPost = async (passValTest) => {  
    try {
      const getUserData = await axios.get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=users"
      );  
       setUserData(getUserData);

      const userIds = getUserData.data.items.map((iteration) => { 
          // ONLY ONE USER -->    
        if (passValTest) { return passValTest; } 
          // ALL USERS -->  
          return iteration.sys.id; 
      });   
       // API-request URL 
      const getURLDynamic =
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[in]=" +
        userIds; 
      const callPosts = await axios.get(getURLDynamic); 
      setInitalPostsDataForUsers(callPosts); 
      setInitalPostsDataForFilter(callPosts.data); 
      setUserData(getUserData); 
      setFilterData(callPosts.data); 
    } catch (err) {
      console.error(err);
    }
  }; 
   
    useEffect(() => {
    getBestRatedPosts(); 
    getAllPost();
  }, []); 
  
  const getBestRatedPosts = async() => {
    try {
      const callBestRatedPosts = await axios.get(bestRatedPostsURL);
      setBestRatedPosts(callBestRatedPosts.data);
    } catch (err) {
      console.error(err);
    }
  }; 
  return (
    <div className="App">  
        <NavBar />  
       {filterData && filterData !== initialPostsDataForUsers && (
        <button onClick={resetPosts} type="button">
          Reset Posts
        </button>
      )}
      <Formular filterPost={filterPost} /> 
        <div className="container">    
             <Dropdown 
                    userInformation={userData} 
                    title="Select User"  
                    multiSelect   
                    userArray={initialPostsDataForUsers} 
                    triggering={ (data) => {  
                       getAllPost(data)
                        } }  
             />
        </div>  
      <Switch>
        <Route path="/allposts">
          <AllPosts filterData={filterData} />
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