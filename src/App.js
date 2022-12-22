import { BrowserRouter, Route, Routes } from "react-router-dom";
import Galery from "./components/Galery/Galery";
// import Login from "./components/login/Login";
import Home from "./components/pages/Home";
import Organizer from "./components/pages/Organizer";

 
function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/gallery" element={<Galery />}/>
      {/* <Route path="/login"  element={<Login />}/> */}
      <Route path="/organiz" element={<Organizer />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;