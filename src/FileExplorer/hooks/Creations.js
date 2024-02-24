export function insertTree(name, isFolder, id, data) {
  if (data.id === id) {
    const obj = {
      name: name,
      id: Date.now(),
      isFolder: isFolder,
    };
    if (data?.items) {
      console.log("inside one")
      data?.items.unshift(obj);
    } else {
      console.log("inside two")
      data.items = [];
      data.items.push(obj);
    }
    
    return data;
  }

  let newRes = [];
  newRes = data?.items?.map((value) => {
    return insertTree(name, isFolder, id, value)
  })

  return {...data, items: newRes}
};

