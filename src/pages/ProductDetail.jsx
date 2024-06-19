import { useParams } from "react-router-dom";
import { Box, Container, VStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the newest features.",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Image src={product.imageUrl} alt={product.name} />
        <Heading as="h1" size="xl">{product.name}</Heading>
        <Text>{product.description}</Text>
        <Text fontWeight="bold" fontSize="2xl">{product.price}</Text>
        <Button as={Link} to="/cart" colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Container>
  );
};

export default ProductDetail;