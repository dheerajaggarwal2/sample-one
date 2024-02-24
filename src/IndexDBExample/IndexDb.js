const IndexDb = () => {
  const addItem = (obj) => {
    const request = indexedDB.open("my-database", 1);

    request.onupgradeneeded = (event) => {
      console.log("dheeraj onupgradeneeded", event)
      const db = event.target.result;
      // db.createObjectStore("my-object-store", { keyPath: "name" });
      db.createObjectStore("my-object-store-3", { keyPath: "age" });
    };

    request.onsuccess = (event) => {
      console.log("dheeraj success", event)
      const db = event.target.result;
      // const transaction = db.transaction("my-object-store", "readwrite");
      // const objectStore = transaction.objectStore("my-object-store");

      // objectStore.add(obj);
      const transaction1 = db.transaction("my-object-store-3", "readwrite");
      const objectStore1= transaction1.objectStore("my-object-store-3");

      objectStore1.add({
        age: "30",
        name: "test",
        id: "1",
        address: "55"
      });
    };

    request.onerror = () => {
      console.log("Failed to open the database.");
    };
  };

  const getItem = () => {
    const request = indexedDB.open("my-database", 1);

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("my-object-store", "readwrite");
      const objectStore = transaction.objectStore("my-object-store");


      console.log(objectStore.get("dheeraj"));
    };

    request.onerror = () => {
      console.log("Failed to open the database.");
    };
  };

  const putItem = () => {
    const request = indexedDB.open("my-database", 1);

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("my-object-store", "readwrite");
      const objectStore = transaction.objectStore("my-object-store");


      const addItem = {
        name: "dheeraj",
        age: 25,
        look: "good",
        addres: "fsfdg"
      };

      objectStore.put(addItem);
    };

    request.onerror = () => {
      console.log("Failed to open the database.");
    };
  };


  return (
    <div >
      <div onClick={() => { addItem({
        name: "dheeraj",
        age: 25,
        look: "good",
      }) }}>
        Add
      </div>
      <div onClick={getItem}>
        get
      </div>
      <div onClick={putItem}>
        put
      </div>
      
      <div onClick={() => { addItem({
        name: "ram",
        age: 20,
        look: "mnew",
      }) }}>
        Add 2
      </div>
    </div>
  );
};

export default IndexDb;