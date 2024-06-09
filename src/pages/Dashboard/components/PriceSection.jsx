import { HStack, Text, Stack, Icon, Button, Flex } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const PriceSection = () => {
  return (
    <CustomCard>
      <Flex justifyContent="space-between" align="start">
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
        <HStack mt={3}>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
    </CustomCard>
  );
};

export default PriceSection;
