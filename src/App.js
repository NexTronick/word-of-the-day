import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { getRandomWordWithDictionary } from "./util/Word";
import Theme from "./components/Theme";

function App() {
  const [cookie, setCookie] = useCookies();
  const [random, setRandom] = useState();

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
    if (random == null) {
      return;
    }
    setRandom(random[0]);
  };

  const wordDefined = () => {
    //const wordDetails = JSON.parse(cookie["wordDetails"]);
    // setWord(wordDetails.word);
    // setDefinition(wordDetails.definition);
  };

  useEffect(() => {
    if (cookie["wordDetails"] == undefined) {
      console.log(cookie["wordDetails"]);
      loadResource();
    } else {
      //wordDefined();
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
        {random == undefined ? (
          ""
        ) : (
          <div>
            <p>Word: {random.word}</p>
            {random.meanings.map((meaning) => {
              let print;
              print += <p>Part of Speech: {meaning.partOfSpeech}</p>;
              meaning.definitions.map((definitions) => {
                print += <p>definition: {definitions.definition}</p>;
              });
            })}
            <p>Definition: {random.meanings[0].definitions[0].definition}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
