import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Hola, Bienvenido a Mi Tienda!!"}  />
      <Footer />
    </>
  );
}

export default App;
