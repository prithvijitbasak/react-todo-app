import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");
  };

  return (
    <>
      <div className="header">
        Add items
        <br />
        <input
          type="text"
          className="input-field"
          onChange={inputEvent}
          value={inputList}
        />
        <button className="add-btn" onClick={listOfItems}>
          +
        </button>
        <ol className="items-list">
          {items.map((itemsValue) => {
            return <li>{itemsValue}</li>;
          })}
        </ol>
      </div>
    </>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
