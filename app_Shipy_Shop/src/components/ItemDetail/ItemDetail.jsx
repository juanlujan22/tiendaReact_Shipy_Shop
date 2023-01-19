import { Card, Image, Stack, CardBody, Text, CardFooter, Button, Heading } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemDetail({ listaProducto }) {
  console.log(listaProducto);
  return (
    <>
      <Card
        overflow="hidden"
        variant="outline"
        m="10"
        backgroundColor="#F0ECCF"
        boxShadow='2xl'
      >
        <Image
          pl="3"
          borderRadius="lg"
          objectFit="fill"
          maxW={{ base: "100%", sm: "200px" }}
          src={listaProducto.image}
          alt={listaProducto.title}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{listaProducto.title}</Heading>

            <Text py="2">
              {listaProducto.description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
               $ {listaProducto.price}
            </Text>
          </CardBody>

            <Stack pl="6" > 
              <ItemCount stock={10} incial={1} onAdd={() => {}} /> 
            </Stack>
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Agregar al Carrito
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
