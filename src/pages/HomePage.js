import React, { useState, useEffect } from 'react';
import Search from "../components/Search";
import Picture from '../components/Picture';
import {v4 as uuidv4} from "uuid";

const HomePage = () => {
  let condition = 8;
  let supportFile = ['jpg', 'jpeg', 'png', 'gif']
  let [data, setData] = useState([]);
  const apiURL = "https://random.dog/woof.json" 
  
  const search = async() => {
      // if (data.length >= 8){
      //     data = [];
      //     console.log("reset");
      // }
      setData([]);

      while (data.length < condition) {
        const dataFetch = await fetch(apiURL, {method: "GET", headers: {Accept:"application/json"}});
        let parsedData = await dataFetch.json();
        let url = parsedData.url;
        
        supportFile.forEach(element => {
          if (url.toString().includes(element)){
            console.log(url);
            data.push({url, id: uuidv4()});
          }
        });
      } 
      setData(data);
      console.log("dataArr")
      console.log(data);
  };
  
  useEffect(() => {
    search();
  }, []);

  // useEffect(() => {
  //   search();
  // }, [data]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Welcome Happy Dogs Land</h1>
      <Search search = {search} />
      <div className='pictures'>
        { data&&
          data.map((d) => {
            console.log("dataMap")
            return <Picture url={d.url} />;
          })
        }
      </div>
    </div>
  );
};

export default HomePage;
