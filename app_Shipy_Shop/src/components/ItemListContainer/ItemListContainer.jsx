import {  Heading } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";
import  products  from "../../products/products.json";
import { Container } from '@chakra-ui/react'
import {ItemCount} from "../ItemCount/ItemCount"


export function ItemListContainer({ saludo }) {
  return (
      <>  
        <Heading display="flex" alignItems="center" justifyContent="center" >
            {saludo} 
        </Heading>
        <ItemCount stock={10} incial={1} onAdd={()=>{}} />
        <Container >
        {products.map((producto)=>{
          return <ProductCard key={producto.id} image={producto.image} titulo={producto.title} precio={producto.price} descripcion={producto.description} categoria={producto.category} />
        })}
      </Container>
      </>
  )
       
}