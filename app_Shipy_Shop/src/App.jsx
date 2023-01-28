import NavBar from "./components/NavBar/NavBar";
import  {ItemListContainer}  from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Cart} from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"  element={ <ItemListContainer  /> } />
        <Route path="/category/:category" element={<ItemListContainer  />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
