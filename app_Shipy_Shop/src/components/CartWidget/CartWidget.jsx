import { Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export function CartWidget() {
  return (
    <>
      <Flex
        p="4"
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NavLink to="/cart">
          <FaShoppingCart /> 0
        </NavLink>
      </Flex>
    </>
  );
}
