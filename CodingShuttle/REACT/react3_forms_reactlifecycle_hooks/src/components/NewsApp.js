import React, { useEffect, useState,useRef } from "react";
import News from "./News";
function NewsApp() {
  const apiKey = "a21b60ed1b9e448f977187c295894683";
  const [query, setQuery] = useState("tesla")
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-07-18&sortBy=publishedAt&apiKey=${apiKey}`;
  const [news, setNews] = useState([]);
  const input = useRef(null)
  async function fetchData() {
    let resp = await fetch(apiUrl);
    let jsonData = await resp.json();
    setNews(jsonData.articles);
  }

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={()=>{
          setQuery(input.current.value)
      }}>submit</button>
      {news.map((e,i) => {
        return <News key={i} news={e} />;
      })}
    </div>
  );
}

export default NewsApp;
