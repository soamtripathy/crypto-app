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
import { FaCircleUser } from "react-icons/fa6";

const TopNav = ({ title }) => {
  return (
    <Box>
      <HStack maxW="70rem" mx="auto" h="16" justify="space-between" px="32">
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
