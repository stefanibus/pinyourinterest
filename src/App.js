import React, { useEffect, useState } from "react";
import axios from "axios"; 
import './App.css';

 

export default function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/ifwqcmbkw16n/environments/master/entries?access_token=UtQ8Fkc_XdWNv24l0dq_QQAWVst5MZaGOAIKr6MvOf4&content_type=posts&fields.title[match]={klettern}"
      )
      .then((response) => {setCars(response.data.items) } )
      .catch((error) => console.error(error));
  }, []);
  console.log(cars);
  return (
    <div className="App"> 
  
      {cars.map((iteration, index) => (
        <div key={index}>
          Car <img src={iteration.fields.image} />
        </div>
      ))}
  
    </div>
  );
}
 

 