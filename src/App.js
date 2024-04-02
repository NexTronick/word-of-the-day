import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./App.css";

function App() {
  const [cookie, setCookie] = useCookies();

  const loadResource = async () => {
    const response = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/test?key=${process.env.REACT_APP_DICTIONARY_API_KEY}`
    );
    if (response.status !== 200) {
      console.error("Error: ", response);
      return;
    }

    console.log(response.data);
    const date = new Date(Date.now());
    date.setFullYear(date.getFullYear() + 1);
    setCookie("word", JSON.stringify(response.data), {
      path: "/",
      expires: date,
      maxAge: date.getSeconds(),
    });
  };

  useEffect(() => {
    if (cookie["word"] == undefined) {
      loadResource();
    }
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
