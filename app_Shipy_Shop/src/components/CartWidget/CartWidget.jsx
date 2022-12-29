import { Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export function CartWidget() {
  return (
    <>
      <Flex
        p='4'
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FaShoppingCart /> 0
      </Flex>
    </>
  );
}
