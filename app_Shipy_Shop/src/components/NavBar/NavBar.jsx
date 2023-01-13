import { Link, Heading, Grid, Box } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";
import Logo from "/logo.png"

const NavBar = () => {
  return (
    <Grid padding={"10px"} templateColumns={"repeat(3, 2fr)"} borderBottomRadius="30px"  background={"#FBC252"} h="fit" >
      <Box display={"flex"} alignItems="center" justifyContent="center" flexWrap="wrap" >
        <img src={Logo} style={{height: "50px" }} alt={"logo"} />
        <Heading as='b' fontSize="2xl" p='4'> Shippy Shop </Heading>
      </Box>
      <Box display={"flex"} alignItems="center" justifyContent="center" flexWrap="wrap" >
        <Link p='4'> clothing </Link>
        <Link p='4'> jewelery </Link>
        <Link p='4'> electronics </Link>
      </Box>
      <Box display={"flex"} justifyContent="center" >
        <CartWidget />
      </Box>
    </Grid>
  );
};
export default NavBar;