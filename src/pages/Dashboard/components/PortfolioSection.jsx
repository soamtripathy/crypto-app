import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";

import {
  AiOutlineDownload,
  AiOutlineInfoCircle,
  AiOutlineUpload,
} from "react-icons/ai";
const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{ base: 0, xl: 16 }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Total Portflio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium"> &#8377; 112,312.24</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px" >
              Wallet Balance
            </Text>
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
                22.39401000 <Tag colorScheme="gray">BTC</Tag>
              </Text>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                {" "}
                1,300.00 <Tag colorScheme="gray">INR</Tag>
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack mt={3}>
          <Button leftIcon={<Icon as={AiOutlineDownload} />}>Deposit</Button>
          <Button leftIcon={<Icon as={AiOutlineUpload} />}>Withdrawal</Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
