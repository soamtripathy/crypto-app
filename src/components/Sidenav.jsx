import { Box, Stack, HStack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: GrTransaction, text: "Transactions", link: "/transactions" },
  ];
  return (
    <Stack justify="space-between" boxShadow="lg" W="16rem" h="100vh">
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          {" "}
          @SOAMTRIPATHY{" "}
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              mx="3"
              key={nav.text}
              py="3"
              px="4"
              _hover={{ bg: "#F3F3F7", color: "#171717" }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb= "6">
        <HStack
          borderRadius="10px"
          mx="3"
          py="3"
          px="4"
          _hover={{ bg: "#F3F3F7", color: "#171717" }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;