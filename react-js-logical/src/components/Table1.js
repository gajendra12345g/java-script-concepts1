import React, { useState } from 'react';
import { object } from '../object/object';
import moment from "moment";

const Table1 = () => {
const [sortedObj, setSortedObj] = useState(object);
const sortById=()=>{
    const sorted=[...sortedObj].sort((a,b)=>a.id-b.id)
    setSortedObj(sorted)
}

const sortByName=()=>{
    const sorted=[...sortedObj].sort((a,b)=>a.name.localeCompare(b.name))
    setSortedObj(sorted)
}
const sortByDate = () => {
  const sorted = [...sortedObj].sort((a, b) =>
  moment(a.date,"DD/MM/YYYY hh:mm A").diff(moment(b.date, "DD/MM/YYYY hh:mm A"))
);
    setSortedObj(sorted);
};

  return (
    <>
    <h1 align="center">Sorted Table</h1>

      <table border="1px solid black" align="center">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
        {sortedObj.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.date}</th>
            </tr>
          );
        })}
      </table>
      <div align="center">
        <button onClick={sortById}>Sort by Id</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByDate}>Sort by Date</button>
      </div>
    </>
  );
};

export default Table1;
