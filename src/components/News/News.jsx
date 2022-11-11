import React, { useState, useEffect } from "react";
import NewsMenu from "./NewsMenu";
import NewsGrid from "./NewsGrid";

import styles from "./news.css";

export const News = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchValue}&apiKey=4322cfee457c40ab8820593f1bcb485c`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "error") {
          return;
        }
        setItems(data.articles);
      });
  }, [category, searchValue]);

  return (
    <div className="news">
      <NewsMenu
        active={active}
        setActive={setActive}
        setCategory={setCategory}
      />
      <input
        className="newsSearchBar"
        placeholder="Search For News"
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
      />
      <NewsGrid items={items} />
    </div>
  );
};
