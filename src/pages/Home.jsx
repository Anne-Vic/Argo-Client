import React, { useState, useEffect } from "react";
import NewName from "./NewName";
import NameList from "./NameList";
import apiHandler from "../api/apiHandler";

export default function Home() {
  const [newName, setNewName] = useState("");
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewName({ [name]: value });
  };
  console.log("newname", newName);
  const [allNames, setAllNames] = useState([""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newName) return;
    apiHandler
      .addArgonaute(newName)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setNewName({});
  };

  useEffect(() => {
    apiHandler.getArgonautes().then((data) => {
      console.log("data", data);
      setAllNames(data);
    });
  }, [newName]);

  return (
    <div>
      <header>
        <img
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
        />
        <h1>Les Argonautes</h1>
      </header>
      {allNames.length < 15 && (
        <div className="form">
          <NewName
            newName={newName}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
      {allNames.length === 15 && (
        <strong className="complet">L'équipage est au complet !</strong>
      )}
      <div className="list">
        <div className="entete">
          <h2>Liste des argonautes:</h2>
          <p>Nombre d'argonautes enregistrés: {allNames.length}</p>
        </div>

        <NameList allNames={allNames} />
      </div>

      <footer>
        <p>Réalisé en chausettes 🧦 par Anne-Victoria - Paris, Fev 2021</p>
      </footer>
    </div>
  );
}
