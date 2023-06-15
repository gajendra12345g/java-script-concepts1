import React from 'react';
import { object } from '../object/object2';

const NonDuplicate = () => {
  // Remove duplicate objects based on the 'id' property
  const uniqueObjects = Array.from(new Set(object.map(item => item.id)))
    .map(id => object.find(item => item.id === id));

  return (
    <>
      <h1 align="center">Non Duplicate Value Table</h1>
      <table border="1px solid black" align="center">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
        {uniqueObjects.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default NonDuplicate;
