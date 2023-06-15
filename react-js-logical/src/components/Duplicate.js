import React from 'react';
import { object } from '../object/object2';

const Duplicate = () => {
  // Find duplicate ids
  const duplicateIds = object
    .map((item) => item.id)
    .filter((id, index, ids) => ids.indexOf(id) !== index);

  // Filter objects with duplicate ids
  const duplicateObjects = object.filter((item) =>
    duplicateIds.includes(item.id)
  );

  return (
    <>
      <h1 align="center">Duplicate Value Table</h1>
      <table border="1px solid black" align="center">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
        {duplicateObjects.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.date}</th>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Duplicate;
