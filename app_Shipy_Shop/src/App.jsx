import NavBar from "./components/NavBar/NavBar";
import  {ItemListContainer}  from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"  element={ <ItemListContainer  /> } />
        <Route path="/category/:category" element={<ItemListContainer  />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
