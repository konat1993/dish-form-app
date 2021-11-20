import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import Form from "./components/Form"
import Loader from "./components/Loader/Loader";

import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2300);
  }, [])
  return (
    <>
      {isLoading ? <Loader /> : (

        <div className="App">

          <Header />
          <Form />
          {/* <ResultPage /> */}
        </div>
      )}
    </>
  );
}

export default App;
