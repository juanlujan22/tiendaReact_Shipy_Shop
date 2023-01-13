import {ItemList} from "../ItemList/ItemList"
import { Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"

export function ItemListContainer() {
  const [listaProductos, setListaProductos]=useState([])
  const [loading, setLoading]=useState(true)
  const obtenerProductos= ()=>{
    axios
      .get('https://fakestoreapi.com/products')
      .then((res)=> {
      setListaProductos(res.data)
      setLoading(false)})
  }
  
  useEffect (()=>{
    obtenerProductos()
  },[])
  return (
    <>
      {!loading 
      ? 
      <ItemList listaProductos={listaProductos} saludo={"Bienvenido a Shippy!!"} />
      :
       <Flex justifyContent={"center"} m="30px"> 
          <Spinner  thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'/>
       </Flex> 
      }
    </>
  );
}
