// router
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

//context
import DataContextProvider, { DataContext } from "./context/Context";

//pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
   <DataContextProvider>
      <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
      </DataContextProvider>
  );
}

export default App;
