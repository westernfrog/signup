import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Signup from "./Signup";

function App() {
  return (
    <div>
      <React.StrictMode>
        <Header />
        <Signup />
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
