import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import Video from "../components/Video";
import { v4 as uuidv4 } from "uuid";

let condition = 8;

const HomePage = () => {
  let supportFile = ["jpg", "jpeg", "png", "gif", "mp4"];
  let [data, setData] = useState([]);
  const apiURL = "https://random.dog/woof.json";

  const search = async () => {
    let temp = [];
    while (temp.length < condition) {
      const dataFetch = await fetch(apiURL, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      let parsedData = await dataFetch.json();
      let url = parsedData.url;
      supportFile.forEach((element) => {
        if (url.toString().includes(element)) {
          console.log(url);
          temp.push({ url, id: uuidv4() });
        }
      });
    }
    setData(temp);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Welcome Happy Dogs Land</h1>
      <Search search={search} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            if (d.url.includes("mp4")) {
              return <Video url={d.url} key={d.id} />;
            } else {
              return <Picture url={d.url} key={d.id} />;
            }
          })}
      </div>
    </div>
  );
};

export default HomePage;
