import {  Heading } from "@chakra-ui/react";

export function ItemListContainer({ saludo }) {
  return (
      <>  
        <Heading display="flex" alignItems="center" justifyContent="center" >
            {saludo} 
        </Heading>
      </>
  )
       
}