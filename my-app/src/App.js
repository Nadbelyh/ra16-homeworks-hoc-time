import React, { useState } from "react";
import VideoList from "./components/videoList";
import "./App.css";

export default function App() {
  const [list, setList] = useState([
    {
      type: "video",
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-04-27 13:24:00",
      views: 50,
    },
    {
      type: "article",
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-03-03 12:10:00",
      views: 12,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
      title: "Невероятные события в неизвестном поселке...",
      views: 175,
    },
    {
      type: "article",
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
      title: "Секретные данные были раскрыты!",
      views: 1532,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
      views: 4253,
    },
    {
      type: "article",
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
      title: "Кот Бегемот обладает невероятной...",
      views: 12,
    },
  ]);

  return <VideoList list={list} />;
}
