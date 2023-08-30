import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Content from "./components/Content";
import Header from "./components/Header";
function App() {
  const [nasaDatas, setNasaDatas] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const api_key = "eVnQ9WWNDUP2yQrUwrvXglNW2QfcWOYzLUSnahhp";
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=2023-08-14`
      )
      .then((res) => setNasaDatas([res.data]));
  }, []);

  console.log(nasaDatas[0]);
  return (
    <div className="App">
      <Header
        getir={() => {
          setShowContent(!showContent);
        }}
      />
      {showContent && (
        <Content
          date={nasaDatas[0].date}
          hdurl={nasaDatas[0].hdurl}
          title={nasaDatas[0].title}
          explanation={nasaDatas[0].explanation}
        />
      )}
    </div>
  );
}

export default App;
