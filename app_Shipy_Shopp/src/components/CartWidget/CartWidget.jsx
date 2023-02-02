import { Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export function CartWidget() {

  const {qty}  = useContext(CartContext)


  return (
    <>
      <Flex
        p="4"
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NavLink to="/cart">
          <FaShoppingCart /> {qty}
        </NavLink>
      </Flex>
    </>
  );
}
