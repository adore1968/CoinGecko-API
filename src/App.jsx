import React from "react";
import Form from "./components/Form";
import CoinsContainer from "./components/CoinsContainer";

function App() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <section className="p-5 sm:p-8 flex justify-center">
        <div className="container items-center">
          <Form />
          <CoinsContainer />
        </div>
      </section>
    </div>
  );
}

export default App;
