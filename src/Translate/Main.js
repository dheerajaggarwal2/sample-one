import React from "react";
import './Translate.css';
import { FaArrowsAltV } from "react-icons/fa";

function Main() {
  const [inputTextOne, setTextOne] = React.useState("");
  const [inputTextTwo, setTextTwo] = React.useState("");
  const [languageT, setLangT] = React.useState({ 
    flag: true, source: "en", target: "hi", sourceValue: "English", targetValue: "Hindi"
  });

  const changesLnType = () => {
    let obj = {};
    obj.flag = !languageT?.flag
    if (obj.flag) {
      obj.source = "en";
      obj.target = "hi";
      obj.sourceValue = "English";
      obj.targetValue = "Hindi";
    } else {
      obj.source = "hi";
      obj.target = "en";
      obj.sourceValue = "Hindi";
      obj.targetValue = "English";
    }
    setTextOne("");
    setTextTwo("");
    setLangT(obj);
  }

  const translateClick = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", inputTextOne);
    encodedParams.append("target", languageT?.target);
    encodedParams.append("source", languageT?.source);

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '5553d8af1bmshe10a4b0fe19d210p11f060jsnaa04031cc01a',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: encodedParams
    };

    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
      .then(response => response.json())
      .then((response) => {
        console.log(response?.data?.translations[0]?.translatedText);
        setTextTwo(response?.data?.translations[0]?.translatedText);
      })
      .catch(err => console.error(err));
  }

  return(
    <div className="container">
      <div className="textOne">
        <div className="labelD">
          <label>{languageT?.sourceValue}</label>
        </div>
        <textarea
          className="textAreaOne"
          type="text"
          onChange={(event) => { setTextOne(event.target.value); }}
          value={inputTextOne}
          rows="5"
        />
      </div>
      <div className="iconStyle" onClick={changesLnType}>
        <div>
        <span>Switch</span>
          </div>
        <FaArrowsAltV size={40}/>
      </div>
      <div className="textTwo">
        <div className="labelD">
          <label>{languageT?.targetValue}</label>
        </div>
        <textarea
          className="textAreaTwo"
          type="text"
          onChange={(event) => { setTextTwo(event.target.value); }}
          value={inputTextTwo}
          disabled={true}
          rows="5"
        />
      </div>
      <div className="buttonT">
        <button
          onClick={translateClick}
        >
            Translate
        </button>
      </div>
    </div>
  )

}

export default Main;