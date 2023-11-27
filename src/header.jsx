import { useState } from "react";
import placeholder_person from "./assets/images/placeholder_person.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="leftNavDiv">
          <div className="leftNavDivUp">NTI Gymnasiet</div>
          <div className="leftNavDivDown">Personal</div>
        </div>
        <div className="rightNavDiv">
          <img src={placeholder_person} alt="Person photo" />
        </div>
      </header>
    </>
  );
}

export default App;
