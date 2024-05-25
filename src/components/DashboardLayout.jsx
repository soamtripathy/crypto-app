import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
import Sidenav from "../components/Sidenav";
import TopNav from "../components/TopNav";
import SideDrawer from "./SideDrawer";
import React from "react";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "block",
        }}
      >
        <Sidenav />
      </Box>{" "}
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container maxW="70rem" px="4" bg="red">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
