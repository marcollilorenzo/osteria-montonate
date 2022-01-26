// router
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

//pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
    </div>
  );
}

export default App;
