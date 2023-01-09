import { useState } from "react"
import { HStack, Button, Text } from "@chakra-ui/react";


export function  ItemCount ({stock, incial, onAdd}) {

   const [count, setCount]=useState(incial)
   console.log(incial)

   const suma= ()=> count < stock && setCount(count+1) 

   const resta=()=> count > incial && setCount(count-1)

   const reset=()=> count > incial && setCount (incial) 
  return (
    <>
        <HStack >
            <Button onClick={resta}> - </Button>
            <Text> {count} </Text> 
            <Button onClick={suma}> + </Button>
            <Button onClick={reset}> Reset </Button>
        </HStack>
    </>
  )
}
