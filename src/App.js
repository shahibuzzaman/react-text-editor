import React from "react";
import TextEditor from "./components/TextEditor";

const App = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>React Text Editor</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextEditor />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
