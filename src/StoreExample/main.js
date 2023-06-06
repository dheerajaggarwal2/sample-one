import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LIST_DATA } from '../constants';
import "./styles.css";

function StoreExample() {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [list, setList] = React.useState(storeData || []);
  const setFormData = () => {
    const obj = {name: name, age: age};
    const combinedList = [...list, obj];
    dispatch({ type: LIST_DATA, payload: combinedList });
    setList(combinedList);
  };
  return (
    <div className="container">
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => { setName(event?.target?.value); }}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            value={age}
            onChange={(event) => { setAge(event?.target?.value); }}
          />
        </div>
        <button
          type="button"
          onClick={setFormData}
        >
          Submit
        </button>
      </form>
      <div>
        <label>Form listing</label>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td><Link to={`/formDetails/${item.name}/${item.age}`}>{item?.name}</Link></td>
                  <td>{item?.age}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}
export default StoreExample;