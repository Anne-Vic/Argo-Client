import React from "react";

export default function NameLisr({ allNames, handleDelete }) {
  return (
    <ol>
      {allNames.map(({ name, id }) => (
        <li key={id}>
          <div>
            <h2>{name}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
        </li>
      ))}
    </ol>
  );
}
