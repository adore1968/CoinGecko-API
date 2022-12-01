import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { setFormText } = useGlobalContext();
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search a Coin"
          onChange={(e) => setFormText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
