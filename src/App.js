import React, { useEffect, useState } from "react";
import { Switch, Route,   Redirect } from "react-router-dom";
import axios from "axios";
/* views */
import AllPosts from "./views/AllPosts.js";
import BestRatedPosts from "./views/BestRatedPosts";
import PageNotFound from "./views/404"; 
/* components */
import NavBar from "./components/NavBar"; 
/* styles */
import "./App.css";

 

export default function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.title[match]={klettern}"
      )
      .then((response) => {
        setCars(response.data.items);
      })
      .catch((error) => console.error(error));
  }, []);
 // console.log(cars);

  return (
    <div className="App">
 
      <NavBar /> 
    
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

      {cars.map((iteration, index) => (
        <div key={index}>
          Car <img src={iteration.fields.image} />
        </div>
      ))}
    </div>
  );
}
