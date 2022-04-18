
import Header from "./components/Header"
import Footer from "./components/Footer"
import React from 'react'
import Game from "./components/Game"



function App() {

  return (
    <div className="App">
    
      <div className="main">
          <Header />
          <Game />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
