import React from "react";

export default function NameList({ allNames, handleDelete }) {
  return (
    <ol>
      {allNames.map(({ name, _id }) => (
        <li key={_id}>
          <div>
            <p>{name}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
