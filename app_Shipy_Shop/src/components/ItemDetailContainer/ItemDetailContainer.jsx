import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

export function ItemDetailContainer()  {
  const [listaProducto, setListaProducto]=useState({})
  const [loading, setLoading]=useState(true)
  const {id} = useParams()

  const obtenerProducto= ()=>{
    axios
      .get('https://fakestoreapi.com/products')
      .then((res)=> {
      setListaProducto(res.data.find(prod => prod.id == id))
      setLoading(false)})
  }
  
  useEffect (()=>{
    obtenerProducto()
  },[])
  return (
    <>
      {!loading 
      ? 
      <ItemDetail listaProducto={listaProducto} />
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

