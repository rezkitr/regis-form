import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Info />
      <Form />
    </div>
  );
};

export default App;
