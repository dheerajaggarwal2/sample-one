import React from "react";
import { response, debounce } from "./Common";
import "./search.css"
let callfn;


const Header = () => {
  const [searchText, setSearchText] = React.useState("");
  const [suggestionlist, setSuggestionList] = React.useState([]);
  const [viewList, setList] = React.useState([]);

  React.useEffect(() => {
    callfn = debounce(x, 500);
  }, []) 

const x = (text) => {
  let res = [];
  if (text?.length > 3) {
    res = response.filter((data) => {
      return data?.tag?.title?.toLocaleLowerCase()?.indexOf(text?.toLocaleLowerCase()) > -1
    });
    setSuggestionList(res);
  }
}

  const onInputChange = (event) => {
    const text = event?.target?.value;
    setSearchText(text);
    callfn(text);
  };

  const inputPressEnter = (event) => {
    if (event.keyCode === 13) {
      setList(...[suggestionlist])
    }
  };

  return (
    <div>
      <div className="inputContainer">
        <div className="inputSearch">
          <input
            className="inputClass"
            type="text"
            value={searchText}
            onKeyDown={inputPressEnter}
            onChange={onInputChange}
            placeholder="Search a text"
          />
        </div>
        <div className="listSearch">
          {suggestionlist.map((data, index) => {
            return (
              <div
                className="listChildSearch"
                key={index}
                onClick={() => { setList([data]); }}
              >
                {data?.tag?.title} {data?.date}
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="boxContainer">
        {viewList.map((data, index) => {
          return(
            <div
              key={index}
              className="childContainer">
              <div className="imageContaier">
                <img 
                  className="imageClass"
                  src={data?.img}
                  alt="Nimage"
                />
              </div>
              <div className="bottomContainer">
                <div className="bottomtext">
                  {data?.title}
                </div>
                <div className="bottomDate">
                  {data?.date}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Header;