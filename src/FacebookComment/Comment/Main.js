import React from "react";
import { commentsData, imageUrl1 } from "../Data/JsonData";
import CommentSection from "./CommentSection";

const Main = () => {
  const [list, setList] = React.useState(commentsData);
  const [inputValue, setInputValue] = React.useState("");
  const [showInput, setShowInput] = React.useState(false);
  const [selectId, setSelectId] = React.useState("");

  const callback = (value, id) => {
    setShowInput(value);
    setSelectId(id)
  }

  const messageCreation = (obj) => {
    
    if (obj.id === selectId) {
      if (obj?.items === undefined) {
        obj.items = [];
      }
      obj.items.push({
        id: Date.now(),
        name: "Dheru",
        image: imageUrl1,
        description: inputValue
      })
      return obj
    }

    let res = []
    res = obj?.items?.map((val) => {
      return messageCreation(val)
    })

    return {...obj, items: res}
  }



  const inputPressEnter = (event) => {
    if (event.keyCode === 13) {
      let res = []
      res = list.map((obj) => {
        return messageCreation(obj);
      })
      setList(res);
      setShowInput(false);
      setInputValue("");
    }
  };

  return (
    <>
      {list.map((data, index) => {
        return <CommentSection data={data} callback={callback} key={index} />
      })}
      {showInput && <div className="inputContainer">
        <input
          className="inputClass"
          type="text"
          autoFocus
          value={inputValue}
          onChange={(event) => { setInputValue(event?.target?.value)}}
          onBlur={() => { setShowInput(false); }}
          onKeyDown={inputPressEnter}
        />
      </div>}
    </>

  );

};

export default Main;