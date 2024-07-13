import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import StopWatch from "../StopWatch/StopWatch";

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state)
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [list, setList] = React.useState(storeData?.userlist || []);

  // const apiCall = fetch("/dummy").then((data) => data.json()).then(() => {})

  const saveInfo = () => {
    const obj = {
      name: name,
      age: age
    };
    setList([...list, obj]);
  };

  const gotoDetails = () => {
    // navigate(`/details/1233?name=${name}&age=${age}`);
    dispatch({ type: "LIST_DATA", payload: list })
    navigate({
      pathname: "/details/1233",
      search: `name=${name}&age=${age}`
    })
  };

  return (
    <div className="userListContainer">
      <StopWatch />
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event?.target?.value);
          }}
        />
      </div>
      <div>
        <input
          type="number"
          value={age}
          onChange={(event) => {
            setAge(event?.target?.value);
          }}
        />
      </div>
      <button type="button" onClick={saveInfo}>
        Save
      </button>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {list.map((val, index) => {
          return (
            <tr key={index}>
              <td 
                onClick={gotoDetails}
              >
                <Link to="">{val?.name}</Link>
                {/* <Link to={`/details/${name}`}>{val?.name}</Link> */}
            </td>
              <td>{val?.age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserList;
