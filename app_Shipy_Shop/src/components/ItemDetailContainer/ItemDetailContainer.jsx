import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../../DB/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export function ItemDetailContainer()  {
  const [listaProducto, setListaProducto]=useState({})
  const [loading, setLoading]=useState(true)
  const {id} = useParams()
  
  useEffect (()=>{
    const productosCollection = collection(db, "productos");
    const pedido = getDocs(productosCollection);

    pedido
      .then((snapshot) => {
        console.log(snapshot.docs);
        console.log(snapshot.docs.map((doc) => doc.data()));
        const productos = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setListaProducto(productos.find(prod => prod.id === id))
        setLoading(false)  
      })
  },[id])
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

