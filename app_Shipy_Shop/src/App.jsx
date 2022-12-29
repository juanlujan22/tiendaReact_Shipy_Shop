import  products  from "./products/products.json";
import { Container } from '@chakra-ui/react'
import ProductCard from "./components/ProductCard/ProductCard";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Hola, Bienvenido a Mi Tienda!!"}  />
      <Container >
        {products.map((producto)=>{
          return <ProductCard key={producto.id} image={producto.image} titulo={producto.title} precio={producto.price} descripcion={producto.description} categoria={producto.category} />
        })}
      </Container>
      <Footer />
    </>
  );
}

export default App;
