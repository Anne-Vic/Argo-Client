// import React, { useState } from "react";
// import NewName from "./NewName";
// import NameList from "./NameList";

// export default function Home() {
//   const [newName, setNewName] = useState({});
//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setNewName((prev) => ({ ...prev, id: Date.now(), [name]: value }));
//   };

//   const [allNames, setAllNames] = useState([]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!newName.name) return;
//     setAllNames((prev) => [newName, ...prev]);
//     setNewName({});
//   };

//   const handleDelete = (id) => {
//     setAllNames((prev) => prev.filter((name) => name.id !== id));
//   };

//   return (
//     <div>
//       <header>
//         <h1>
//           <img
//             src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
//             alt="Wild Code School logo"
//           />
//           Les Argonautes
//         </h1>
//       </header>
//       {allNames.length < 3 && (
//         <>
//           <NewName
//             newName={newName}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//           <p>Nombre d'argonautes enregistrés: {allNames.length}</p>
//         </>
//       )}
//       {allNames.length === 3 && <p>L'équipage est au complet !</p>}

//       <NameList allNames={allNames} handleDelete={handleDelete} />
//       <footer>
//         <p>Réalisé en chausettes par Anne-Victoria à Paris en 2021</p>
//       </footer>
//     </div>
//   );
// }
