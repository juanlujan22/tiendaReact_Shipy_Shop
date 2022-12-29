import { HStack, Link, Flex, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
    <Flex borderTopRadius="30px" alignItems="center" justifyContent="flex-start" background={"#FBC252"} height={"16"} >
      <Heading as='b' fontSize={"2xl"} p='4'> Shipy Shop </Heading>
      <HStack ml="40px">
        <Link p='4'> mens's clothig </Link>
        <Link p='4'> women's clothig </Link>
        <Link p='4'> jewelery </Link>
        <Link p='4'> electronics </Link>
      </HStack>
    </Flex>
    </>
  )
}
export default Footer