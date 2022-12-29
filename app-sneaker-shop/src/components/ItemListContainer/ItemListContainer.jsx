import {  Flex } from "@chakra-ui/react";

export function ItemListContainer({ greeting1 }) {
  return (
      <>  
        <Flex maxW="sm" justifyContent="start" mr="-2" > 
            {greeting1} 
        </Flex>
      </>
  )
       
}