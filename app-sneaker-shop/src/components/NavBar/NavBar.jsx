import { HStack, Link, Flex, Box, Text, Heading } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Flex alignItems="baseline" justifyContent="space-around" background={"#FBC252"} height={"16"} ml="-20">
      <Heading as='b' fontSize={"2xl"} p='4'> Chipy Shop </Heading>
      <HStack p='4'>
        <Link> clothig </Link>
        <Link> jewelery </Link>
        <Link> electronics </Link>
      </HStack>
      <CartWidget />
    </Flex>
  );
};
export default NavBar;