import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
    >
      <Stack maxW="380px">
        {icon ? <Icon as={icon} color="p.purple" boxSize={6} /> : null}

        <Text as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
