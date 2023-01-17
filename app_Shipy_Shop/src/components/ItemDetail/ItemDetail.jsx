import { Card, Image, Stack, CardBody, Text, CardFooter, Button, Heading } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
export function ItemDetail({ listaProducto }) {
  console.log(listaProducto);
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        m="10"
        backgroundColor="#F0ECCF"
      >
        <Image
          objectFit="contain"
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
