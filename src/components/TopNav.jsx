import {
  Flex,
  Heading,
  Container,
  Box,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { FaBars, FaCircleUser } from "react-icons/fa6";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" mx="auto" h="16" justify="space-between">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaCircleUser} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
