import React, { useEffect, useState } from "react";
import { Switch, Route,   Redirect } from "react-router-dom";
import axios from "axios";
import AllPosts from "./views/AllPosts.js";
import BestRatedPosts from "./views/BestRatedPosts";
import PageNotFound from "./views/404"; 
import NavBar from "./components/NavBar"; 
import "./App.css";

 

export default function App() {
  const [userData, setUserData] = useState([]);
  const [postsDataForUsers, setPostsDataForUsers] = useState([]);

const getAllUserData = () => {
      // 
      console.log(' getAllUserData() was called ');
      axios
      .get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=users"
      )
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.items);
        // console.log(response.data.items[1]);
        // console.log(response.data.items[1].fields);
        // console.log(response.data.items[1].fields.firstname);
        // console.log(response.data.items[1].sys.id);
        setUserData(response.data.items);
      //   console.log('grab the userData from all users: ');
       //   console.log(userData);
      })
      .catch((error) => console.error(error)); 
}


const getArrayOfUserIDs = () => { 
      // console.log('getArrayOfUserIDs-Function-Call'); 
      // console.log('userData');
      // console.log(userData);
      const result = userData.map(iteration =>{ 
        //console.log('iteration in map sys id');
          //  console.log(iteration.sys.id); 
          return iteration.sys.id
        // result + iteration.sys.id; 
         }); 
     // console.log('result from map') 
      // console.log('this is an array of the userData-ID-Values from all users: ');
     // 
     //  console.log(result)
      return result; 
} 
// console.log('getArrayOfUserIDs: = ');
// console.log(getArrayOfUserIDs()); 
//  getArrayOfUserIDs();







const getAllPostsFromUser = (UserArray) => {  
console.log('getArrayOfUserIDs only the relevant  UsersIDs in an array via getArrayOfUserIDs(): ')
console.log(getArrayOfUserIDs(UserArray)) ;

let result =   getArrayOfUserIDs(UserArray)  ;


console.log('do axios Request on all posts with a filter to display merely those Posts from relevant  UsersIDs')
// console.log(getArrayOfUserIDs(UserArray)) ;
 
//
let getURLDynamic = "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[all]="+result;
//let getURLStatic = "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[all]=14U1y0dzbaaqOkvjr9kW4T,4CrLLnhKykpOV9fu2v7Odg,7gusLBhWbTDHN2ax00HnEk,6eCJKi4fMxQPQZCBRUF1dh,YrNbyp3ac9ibMecerzmv1" ;
 let getURLStatic = "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[all]=4CrLLnhKykpOV9fu2v7Odg" ;

console.log('getURLStatic : ');
console.log(getURLStatic);


    axios
      .get(
        //getURLDynamic
        getURLStatic
      )
      .then((response) => { 
        console.log('response.data.includes.Entry (USERS): ');
        console.log(response.data.includes.Entry);
        console.log('response.data.includes.Asset (POSTS): ');
        console.log(response.data.includes.Asset); 



        console.log('all posts from relevant User(s)');
        setPostsDataForUsers(response); 
        // console.log('postsDataForUsers: ');
        // console.log(postsDataForUsers);

        console.log('postsDataForUsers.data: ): ');
        console.log(postsDataForUsers.data);

        // console.log('postsDataForUsers.data.sys): ');
        // console.log(postsDataForUsers.data.sys);

        console.log('postsDataForUsers.data.items (all POSTS are 21 Items?! )): ');
        console.log(postsDataForUsers.data.items);

        console.log('postsDataForUsers.data.includes (relevant USERS? are 4 and 7  )): ');
        console.log(postsDataForUsers.data.includes);

        console.log('postsDataForUsers.data.includes.Asset (relevant 7 )): ');
        console.log(postsDataForUsers.data.includes.Asset);

        console.log('postsDataForUsers.data.includes.Asset[0].fields.description): ');
        console.log(postsDataForUsers.data.includes.Asset[0].fields.description);

        console.log('postsDataForUsers.data.includes.Entry (relevant USERS 4 items )): ');
        console.log(postsDataForUsers.data.includes.Entry);

        console.log('postsDataForUsers.data.includes.Entry[0].fields.firstname (relevant USERS )): ');
        console.log(postsDataForUsers.data.includes.Entry[0].fields.firstname);


        // console.log('postsDataForUsers.data.sys.includes.Entry (USERS): ');
        // console.log(postsDataForUsers.data.sys.includes.Entry);
        // console.log('postsDataForUsers.data.sys.includes.Asset (POSTS): ');
        // console.log(postsDataForUsers.data.sys.includes.Asset);
      })
      .catch((error) => console.error(error));


}






  useEffect(() => {

     getAllUserData();

  }, []); 




  return (
    <div className="App">
 
 <button onClick={() => {getAllPostsFromUser(getArrayOfUserIDs)}}>getAllPostsFromUser</button>
 <br/>
      <NavBar/> 
    
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

    {/*  {cars.map((iteration, index) => (
        <div key={index}>
          Car <img src={iteration.fields.image} />
        </div>
      ))}*/}
    </div>
  );
}
