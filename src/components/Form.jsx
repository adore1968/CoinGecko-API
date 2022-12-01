import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { setFormText } = useGlobalContext();
  return (
    <form className="mb-5">
      <input
        type="text"
        placeholder="Search a Coin"
        onChange={(e) => setFormText(e.target.value)}
        className="w-full bg-gray-700 rounded p-2 text-center text-lg sm:text-xl"
      />
    </form>
  );
}

export default Form;
