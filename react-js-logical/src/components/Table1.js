import React, { useState } from 'react';
import { object } from '../object/object';
import moment from "moment";

const Table1 = () => {
const [sortedObj, setSortedObj] = useState(object);

const createSortFunction = (sortedObj,sort,sortBy) => {
  return () => {
    let sorted;
    switch (sortBy) {
      case 'name':
        sorted = [...sortedObj].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        break;
        case 'id':
          sorted = [...sortedObj].sort((a, b) => a[sortBy] - b[sortBy]);
          break;
        case 'date':
          sorted = [...sortedObj].sort((a, b) =>
          moment(a[sortBy], "DD/MM/YYYY hh:mm A").diff(moment(b[sortBy], "DD/MM/YYYY hh:mm A"),'asc'));
          break;
      default:
           console.log("wrong sort")
        break;
    }
    if(sort==='desc'){
      sorted.reverse();
       return setSortedObj(sorted);
    }
    setSortedObj(sorted);
  };
};
const sortById = createSortFunction(sortedObj,"desc",'id');
const sortByName = createSortFunction(sortedObj,'asc','name');
const sortByDate = createSortFunction(sortedObj,'asc','date');

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
