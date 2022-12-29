import { HStack, Link, Flex, Heading } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Flex borderBottomRadius="30px" alignItems="baseline" justifyContent="space-around" background={"#FBC252"} height={"16"} >
      <Heading as='b' fontSize="2xl" p='4'> Shipy Shop </Heading>
      <HStack >
        <Link p='4'> clothing </Link>
        <Link p='4'> jewelery </Link>
        <Link p='4'> electronics </Link>
      </HStack>
      <CartWidget />
    </Flex>
  );
};
export default NavBar;