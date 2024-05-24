import { Box, Flex, Container } from "@chakra-ui/react";
import Sidenav from "../components/Sidenav";
import TopNav from "../components/TopNav";

const DashboardLayout = ({ title, children }) => {
  return (
    <>
      <Flex>
        <Sidenav />
        <Box flexGrow={1}>
          <TopNav title={title} />
          <Container maxW="70rem" px="4" bg="red">
            {children}
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardLayout;
