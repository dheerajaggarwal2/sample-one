import React from "react"
import "./FileMain.css"

const FileMain = ({ data, treeCreation }) => {
  const [toggle, setToggle] = React.useState(false);
  const [createFileFolder, setCreateFileFolder] = React.useState({});
  const [inputValue, setInputValue] = React.useState("");

  const createFolderButton = (event, isFolder) => {
    event?.stopPropagation();
    setInputValue("");
    setCreateFileFolder({
      isVisible: true,
      isFolder
    });
  }

  const inputPressEnter = (event) => {
    if (event.keyCode === 13) {
      treeCreation(event?.target?.value, createFileFolder?.isFolder, data?.id )
      setCreateFileFolder({ ...createFileFolder, isVisible: false})
    }
  };

  if (data?.isFolder) {
    return (
      <div>
        <div
          className="childFiles"
          onClick={() => { setToggle(!toggle); }}
        >
          <span>
            {data?.name}
            <span className="buttonsStyle">
              <button onClick={(event) => { createFolderButton(event, true)}}>+</button>
              <button onClick={(event) => { createFolderButton(event, false)}}>/</button>
            </span>
          </span>
        </div>
        {createFileFolder?.isVisible &&
          <div className="inputContainerFile">
            <input
              type="text"
              autoFocus
              className="inputStyleFile"
              value={inputValue}
              onBlur={() => { setCreateFileFolder({ ...createFileFolder, isVisible: false}); }}
              onKeyDown={inputPressEnter}
              onChange={(event) => { setInputValue(event?.target?.value)}}
            />
          </div>
        }
        <div className="callingComp" >
          {toggle && data?.items?.map((item, index) => {
            return (
              <FileMain data={item} key={item?.id + index} treeCreation={treeCreation} />
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className="childFiles">
        <div>{data?.name}</div>
      </div>
    )
  }
}

export default FileMain;

// import { useState } from "react";

// function FileMain({ handleInsertNode = () => {}, explorer }) {
//   const [expand, setExpand] = useState(false);
//   const [showInput, setShowInput] = useState({
//     visible: false,
//     isFolder: false
//   });

//   const handleNewFolder = (e, isFolder) => {
//     e.stopPropagation();
//     setExpand(true);
//     setShowInput({
//       visible: true,
//       isFolder
//     });
//   };

//   const onAddFolder = (e) => {
//     if (e.keyCode === 13 && e.target.value) {
//       handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

//       setShowInput({ ...showInput, visible: false });
//     }
//   };

//   if (explorer.isFolder) {
//     return (
//       <div style={{ marginTop: 5 }}>
//         <div onClick={() => setExpand(!expand)} className="folder">
//           <span>📁 {explorer.name}</span>

//           <div>
//             <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
//             <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
//           </div>
//         </div>

//         <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
//           {showInput.visible && (
//             <div className="inputContainer">
//            <span>{showInput.isFolder? "📁" : "📄"}</span> 
//            <input
//               type="text"
//               className="inputContainer__input"
//               autoFocus
//               onKeyDown={onAddFolder}
//               onBlur={() => setShowInput({ ...showInput, visible: false })}
//               />
//               </div>
//           )}

//           {explorer.items.map((exp) => {
//             return (
//               <FileMain
//                 handleInsertNode={handleInsertNode}
//                 key={exp.id}
//                 explorer={exp}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   } else {
//     return <span className="file">📄 {explorer.name}</span>;
//   }
// }

// export default FileMain;