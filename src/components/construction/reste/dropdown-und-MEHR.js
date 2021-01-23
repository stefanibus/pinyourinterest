




          // const userTest = userArray ? userInformation.data.items.map((arrayOfUserData, index) => {
          //         let firstname = arrayOfUserData.fields.firstname;
          //         let lastname = arrayOfUserData.fields.lastname; 
          //         let id = arrayOfUserData.sys.id;
                   
          //       return 
          //        (    
          //           <div 
          //             onClick={() => triggering(id)}  
          //             key={index} 
          //             className={id}>
          //               <span key={index}> {index}</span> {firstname} {lastname} 
          //           </div>
          //        )   
          // }) 
          //  : 'userArray Data still pending'  ; 

 







import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

function Example() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  )
}







import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import AllPosts from "./views/AllPosts.js";
import BestRatedPosts from "./views/BestRatedPosts";
import PageNotFound from "./views/404";
import NavBar from "./components/NavBar";
import "./App.css";
 


export default function App() {
    const [userData, setUserData] = useState([]);
    const [postsDataForUsers, setPostsDataForUsers] = useState([]);

  
 


    const getAllPostsFromUser = async () => {
        let getURLStatic = "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.userref.sys.id[all]=14U1y0dzbaaqOkvjr9kW4T,4CrLLnhKykpOV9fu2v7Odg,7gusLBhWbTDHN2ax00HnEk,6eCJKi4fMxQPQZCBRUF1dh,YrNbyp3ac9ibMecerzmv1" ;
 
        const callPosts = await axios
            .get(
                getURLStatic
            )
            // .then((response) => {
            //     return (response);
            // })
            // .catch((error) => console.error(error));

        console.log('callPosts', callPosts);
        return callPosts;
 
    }
 


    const logFunction = () => { 
        // console.log('postsDataForUsers   )): ');
        // console.log(postsDataForUsers); 
        console.log('callPosts   )): ');
     //   console.log(callPosts); 

        // console.log('postsDataForUsers.data.items (all POSTS are 21 Items?!   ANSCHEINEND ALLE USER  )): ');
        // console.log(postsDataForUsers.data.items); 
        // console.log('postsDataForUsers.data.items[0].fields.userref.sys.id   ANSCHEINEND ALLE USER  )): ');
        // console.log(postsDataForUsers.data.items[0].fields.userref.sys.id);  // UserREferenzID
        // console.log(postsDataForUsers.data.items[0].fields.description);  // Description 
        // console.log(postsDataForUsers.data.items[0].fields.title);  // Title
        // console.log(postsDataForUsers.data.items[0].fields.rating); // Rating 
        // console.log(postsDataForUsers.data.items[0].fields.webimage); // Webimage  
    }
 

      useEffect(() => {   


        // WHY DOES THIS SAY undefined if I put this line inside of useEffect?! 
        // const myUserArray = getAllUserData();

     
        // const asyncWork1 = async  () =>  {
        // const DataUsers = await  getAllUserData(); 
        // } 
        // //
        // asyncWork1();
  
        // const asyncWork2 = async () =>  { 
        // const ourArrayOfUserIDs = await getAllPostsFromUser(DataUsers);
   
        // console.log('ourArrayOfUserIDs:  ');
        // console.log(ourArrayOfUserIDs);
        // } 
        // //
        // asyncWork2();
 

     }, []);

  

    return (
        <div className="App">
         
        {/*  <button onClick={ () => { console.log('getArrayOfUserIDs(getAllUserData)'); getArrayOfUserIDs(getAllUserData); }} >  getArrayOfUserIDs(getAllUserData)  </button>  <br/>
        */}

   {/*       <button onClick={ () => { console.log('getAllUserData()'); getAllUserData(); }} >  getAllUserData()  </button>  <br/>
    */}
       {/*   <button onClick={ () => { console.log('myUserArray');  console.log(myUserArray);   }} > console.log('myUserArray');  </button>  <br/>
    */}
         {/* <button onClick={ () => { console.log('getArrayOfUserIDs(getUserData)'); getArrayOfUserIDs(getUserData); }} >  getArrayOfUserIDs(getAllUserData)  </button>  <br/>
    */}
    
          <button onClick={ () => { console.log('getAllPostsFromUser()'); getAllPostsFromUser(); }} >  getAllPostsFromUser() </button>  <br/>

          <button onClick={ () => { 
            console.log('logFunction()'); 
            // logFunction(); 
            }} 
            >  logFunction() </button>  <br/>

            

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
 
    </div>
    );
}

























