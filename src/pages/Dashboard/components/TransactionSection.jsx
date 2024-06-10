import { BsCurrencyBitcoin, BsCurrencyRupee } from "react-icons/bs";
import { CustomCard } from "../../../chakra/CustomCard";
import { Text, Stack, Flex, Grid, Icon } from "@chakra-ui/react";
const TransactionSection = () => {
  const transactions = [
    {
      id: 1,
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamps: "2024-06-09 7:06 PM",
    },
    {
      id: 2,
      icon: BsCurrencyBitcoin,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timeStamps: "2024-05-27 12:32 PM",
    },
    {
      id: 3,
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamps: "2026-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard>
      <Text fontSize="sm" color="black">
        {" "}
        Recent Transaction{" "}
      </Text>
      <Stack>
        {transactions.map((transactions) => (
          <Flex key={transactions.id} gap="4" w="full">
            <Grid
              placeItems="center"
              bg="black.5"
              boxSize={10}
              borderRadius="full"
            >
              <Icon as={transactions.icon} />
            </Grid>
            <Flex justify="space-between" w="full">
              <Stack spacing={0}>
                <Text fontSize="h6">{transactions.text}</Text>
                <Text fontSize="sm" color="black.80">
                  {transactions.timeStamps}
                </Text>
              </Stack>
              <Text fontSize="h6">{transactions.amount}</Text>
            </Flex>
          </Flex>
        ))}
      </Stack>
    </CustomCard>
  );
};

export default TransactionSection;
