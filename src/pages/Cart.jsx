import { Box, Container, VStack, Heading, Text, Button } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Shopping Cart</Heading>
        <Text>Your cart is currently empty.</Text>
        <Button colorScheme="teal">Proceed to Checkout</Button>
      </VStack>
    </Container>
  );
};

export default Cart;