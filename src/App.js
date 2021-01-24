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
  const [filterData, setFilterData] = useState({});
  const [bestRatedPosts, setBestRatedPosts] = useState(); 
  const [initialPostsDataForUsers, setInitalPostsDataForUsers] = useState();
  const [userData, setUserData] = useState([]);
  
  
  
    const filterPost = (text) => {
    // const newArry = initialPostsDataForUsers.filter(postValue) =>

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

  const bestRatedPostsURL = "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.rating[gte]=4"



  const getAllPost = async (passValTest) => { 
 
    
    try {
      const getUserData = await axios.get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=users"
      );  
      // getUserData can be replaced with userData AFTER  we improoved DropDown.js         // DropDown.js can not yet use userData  because  the Elements inside of Dropdown-Select  would get filtered due to their State (that is undesiered behaviour)   // this should be improoved inside of DropDown.js the futue      // The goal is to use only the following   stateVariable: --> arrayofUsers !  // for now we instead use this separate array: getUserData   
      setUserData(getUserData);

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
      // getURLDynamic so abändern das nur die gefilterten Posts angezeigt werden filter() 
      const getURLDynamic =
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[in]=" +
        userIds;

      const callPosts = await axios.get(getURLDynamic);
 
      
      
      
      
      
      
      setInitalPostsDataForUsers(callPosts);
      //Save initial data to later reset.
      // STEFANO COMMENT ==>   I WILL NOT ALLOW THIS CHANGE DURING THE MERGE - - > I WILL LOOK INTO THIS LATER TO RE-ESTABLISH THE FILTER FUNCTION  
      // setInitalPostsDataForUsers(callPosts.data);
     
      setUserData(getUserData); 
      setFilterData(callPosts.data);

      
      
      
      
      
      
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

  
  const getBestRatedPosts = async() => {
    try {
      const callBestRatedPosts = await axios.get(bestRatedPostsURL);
      setBestRatedPosts(callBestRatedPosts);
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