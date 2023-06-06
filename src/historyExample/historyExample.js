import React from "react";

let input = [{id: 1},{id: 2},{id: 3},{id: 4}];
function HistoryExample() {

  const [box, setBox] = React.useState(input);
  React.useCallback(() => {
  }, [])

  const actionOnBox = (item) => {
    const newSet = box.map((val) => {
      return ({
        id: val?.id,
        select: (val?.id === item?.id)
      })
    })
    console.log(newSet)
    setBox(newSet);
  }
  const selextBox = (item) => {
    window.history.pushState({id: item.id}, 'select', `selected=${item?.id}`)
    // actionOnBox(item);
  }


  window.onpopstate = (event) => {
    console.log(event);
    actionOnBox(event.state)
  }

  return(
    <div>
      {
        box.map((item) => {
          return(
            <span
              key={item?.id}
              onClick={() => selextBox(item)}
            >
              {item?.id}{item?.select ? "select" : null}
            </span>
          )
        })
      }
      fsdf
    </div>
  )

}

export default HistoryExample;