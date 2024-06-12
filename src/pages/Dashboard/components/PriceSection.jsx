import {
  HStack,
  Text,
  Stack,
  Icon,
  Button,
  Flex,
  Image,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timeStamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
      >
        {" "}
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Current Price</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                {" "}
                &#8377; 22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight}></Icon>
                <Text fontSize="sm" fontWeight="medium">
                  {" "}
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack mt={{base : "2" , md : "0"}}>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex >
      <Tabs variant="soft-rounded">
        <Flex justify="flex-end"  direction={{ base: "column", md: "row" }} mt={{base : "2" , md : "0"}}>
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="cover" src="/graph.svg" mt="48px" />
            <HStack justify="space-between">
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
