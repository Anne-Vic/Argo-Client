import React, { useState } from "react";

export default function Form({ newName, handleChange, handleSubmit }) {
  return (
    <div>
      <h2>Ajouter un(e) Argonaute</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Charalampos"
          value={newName.name || ""}
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
