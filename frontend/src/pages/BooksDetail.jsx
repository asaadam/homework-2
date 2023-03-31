import { Box, Flex, Heading, Image, Skeleton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetailById } from "../modules/fetch";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <Box>
      {isLoading ? (
        <Skeleton height="300px" my="6" />
      ) : (
        <Flex my="6">
          <Box w="300px">
            <Image
              src={`http://localhost:8000/${book.image}`}
              alt={book.title}
            />
          </Box>
          <Box ml="8">
            <Heading as="h1" size="lg">
              {book.title}
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {book.author}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {book.publisher}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb="4">
              {book.year} | {book.pages} pages
            </Text>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
