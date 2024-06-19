import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Input, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the newest features.",
    price: 699,
    category: "Electronics",
    rating: 4.5,
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    price: 999,
    category: "Electronics",
    rating: 4.7,
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 199,
    category: "Accessories",
    rating: 4.2,
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const filteredProducts = sampleProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedPriceRange === "" || (
        selectedPriceRange === "0-500" && product.price <= 500 ||
        selectedPriceRange === "500-1000" && product.price > 500 && product.price <= 1000 ||
        selectedPriceRange === "1000+" && product.price > 1000
      )) &&
      (selectedRating === "" || product.rating >= parseFloat(selectedRating))
    );
  });

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Electronics Store</Heading>
        <Text fontSize="lg">Find the best electronics at unbeatable prices.</Text>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={5}
        />
        <Select placeholder="Select category" value={selectedCategory} onChange={handleCategoryChange} mb={5}>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <Select placeholder="Select price range" value={selectedPriceRange} onChange={handlePriceRangeChange} mb={5}>
          <option value="0-500">$0 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000+">$1000+</option>
        </Select>
        <Select placeholder="Select rating" value={selectedRating} onChange={handleRatingChange} mb={5}>
          <option value="4">4 stars & up</option>
          <option value="4.5">4.5 stars & up</option>
        </Select>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.imageUrl} alt={product.name} />
              <VStack align="start" mt={4}>
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold">${product.price}</Text>
                <Text>Rating: {product.rating}</Text>
                <Button as={Link} to={`/product/${product.id}`} colorScheme="teal">View Details</Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;