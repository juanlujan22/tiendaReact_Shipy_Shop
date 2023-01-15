import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount/ItemCount';

const Item = ({image, titulo, precio, descripcion, categoria}) => {
    return (
      <>
        <Card  maxW="sm" mt="5" boxShadow='2xl' backgroundColor="#F0ECCF" >
          <CardBody>
            <Image
              src= {image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{titulo}</Heading>
              <Text>
                {categoria}
              </Text>
              <Text>
                {descripcion}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                {precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <Stack mt="6" justifyContent= "center" alignItems={"center"} > 
          <ItemCount stock={10} incial={1} onAdd={() => {}} /> 
          </Stack>
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Comprar Ahora
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Agregar al Carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </>
    );
}
export default Item