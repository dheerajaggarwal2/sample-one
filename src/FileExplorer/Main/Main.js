import React from "react"
import explorer from "../Data/folderData"
import { insertTree } from "../hooks/Creations";
import FileMain from "./FileMain";

const Main = () => {
  const [data, setData] = React.useState(explorer);
  function treeCreation(name, isFolder, id) {
    const res = insertTree(name, isFolder, id, explorer)
    setData(res);
  }

  return (
    <FileMain
      data={data}
      treeCreation={treeCreation}
    />
  )
}

export default Main;