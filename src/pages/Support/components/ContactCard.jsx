import {
  Box,
  Button,
  Card,
  Checkbox,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text " placeholder="Enter your first name" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="text" placeholder="Enter your surname" />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea
            type="text "
            placeholder="Write your queries or messages..."
          />
        </FormControl>
        <Text fontSize="xs">
          <Checkbox defaultChecked>
            {" "}
            I agree with{" "}
            <Box as="span" color="p.purple">
              Term & Conditions.
            </Box>
          </Checkbox>
        </Text>

        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
