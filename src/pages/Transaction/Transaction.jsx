import { Button, Card, Flex, HStack, Icon, Tag, Text } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
      display : {
        base : "block",
        md : "none"
      }
    },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs position="relative" variant="unstyled">
          <TabList
            py="4"
            display="flex"
            w="full"
            justifyContent="space-between"
            
          >
            <HStack flexWrap="wrap">
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineSearch} color="gray.300" />
              </InputLeftElement>
              <Input type="" placeholder="Search by ID or destination " />
            </InputGroup>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="purple.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <Text>Waiting for server!</Text>
            </TabPanel>
            <TabPanel>
              <Text>Waiting for server!</Text>
            </TabPanel>
            <TabPanel>
              <Text>Waiting for server!</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
