import React, { useState } from "react";

export default function Form({ newName, handleChange, handleSubmit }) {
  return (
    <div className="formdetails">
      <h3>Ajouter un(e) Argonaute</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Charalampos"
          value={newName.name || ""}
          onChange={handleChange}
          autoFocus={true}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
