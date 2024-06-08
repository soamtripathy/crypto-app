import { HStack, Stack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6">
      <Stack>
        <HStack color="black.80">
          <Text fontSize="14px">Total Portflio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text fontSize="24px"> &#8377; 112,312.24</Text>
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
