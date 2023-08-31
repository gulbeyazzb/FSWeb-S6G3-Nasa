import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Content from "./components/Content";
import Header from "./components/Header";
function App() {
  const [nasaDatas, setNasaDatas] = useState();
  const [nasaDate, setNasaDate] = useState();
  const [showContent, setShowContent] = useState(false);
  const api_key = "eVnQ9WWNDUP2yQrUwrvXglNW2QfcWOYzLUSnahhp";
  const changeHandler = (e) => {
    const { value } = e.target;
    setNasaDate(value);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${nasaDate}`
      )
      .then((res) => setNasaDatas(res.data));
  }, []);

  console.log(nasaDatas);
  return (
    <div className="App bg-dark">
      <Header
        getir={() => {
          setShowContent(!showContent);
        }}
        changeHandler={changeHandler}
      />
      {showContent && (
        <Content
          date={nasaDatas.date}
          hdurl={nasaDatas.hdurl}
          title={nasaDatas.title}
          explanation={nasaDatas.explanation}
          copyright={nasaDatas.copyright}
        />
      )}
    </div>
  );
}

export default App;
