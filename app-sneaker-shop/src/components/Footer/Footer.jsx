import { HStack, Link, Flex, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
    <Flex alignItems="center" justifyContent="flex-start" background={"#FBC252"} height={"16"} >
      <Heading as='b' fontSize={"2xl"} p='4'> Chipy Shop </Heading>
      <HStack p='10'>
        <Link> mens's clothig </Link>
        <Link> women's clothig </Link>
        <Link> jewelery </Link>
        <Link> electronics </Link>
      </HStack>
    </Flex>
    </>
  )
}
export default Footer