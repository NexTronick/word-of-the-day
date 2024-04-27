import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./App.css";
import { stringify } from "postcss";
import { Button, Card } from "react-bootstrap";
import { redirect } from "next/dist/server/api-utils";
import { getRandomWordWithDictionary } from "./util/Word";
import Theme from "./components/Theme";

function App() {
  const [cookie, setCookie] = useCookies();
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const loadResource = async () => {
    // const response = await axios.get(
    //   `https://www.dictionaryapi.com/api/v3/references/collinge/random?key=${process.env.REACT_APP_DICTIONARY_API_KEY}`
    // );
    // const response = await axios.get()
    // if (response.status !== 200) {
    //   console.error("Error: ", response);
    //   return;
    // }
    // const data = response.data[0];
    // setWord(data.meta.id);
    // if (data.shortdef) {
    //   setDefinition(data.shortdef[0]);
    // } else {
    //   setDefinition("No definition found.");
    //   redirect("/"); //cannot do no definition found.
    // }
    // let wordDetails = JSON.stringify({
    //   word: data.meta.id,
    //   definition: definition,
    // });
    // const date = new Date(Date.now() + 1000 * 60 * 60 * 24); //set cookie for 24 hours
    // setCookie("wordDetails", wordDetails, {
    //   path: "/",
    //   expires: date,
    //   maxAge: date.getSeconds(),
    // });

    const random = await getRandomWordWithDictionary();
    setWord(random[0].word);
    setDefinition(random[0].meanings[0].definitions[0].definition);
  };

  const wordDefined = () => {
    const wordDetails = JSON.parse(cookie["wordDetails"]);
    setWord(wordDetails.word);
    setDefinition(wordDetails.definition);
  };

  useEffect(() => {
    if (cookie["wordDetails"] == undefined) {
      console.log(cookie["wordDetails"]);
      loadResource();
    } else {
      wordDefined();
    }
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="Header">
        <Theme />
      </div>
      <div>
        <h1 className="text-3xl font-bold underline">Main part of the app</h1>
        <p>Word: {word}</p>
        <p>Definition: {definition}</p>
      </div>
    </div>
  );
}

export default App;
