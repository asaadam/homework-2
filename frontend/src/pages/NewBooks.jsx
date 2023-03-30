import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { createBook } from "../modules/fetch";

export default function BookForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await createBook(
        formData,
      );
      event.target.reset();
      console.log("Book created successfully!");
    } catch (error) {
      console.error(error.response.data.message || "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input name="title" required />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input name="author" required />
        </FormControl>
        <FormControl>
          <FormLabel>Publisher</FormLabel>
          <Input name="publisher" required />
        </FormControl>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <Input name="year" type="number" required />
        </FormControl>
        <FormControl>
          <FormLabel>Pages</FormLabel>
          <Input name="pages" type="number" required />
        </FormControl>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input name="image" type="file" accept="image/*" required />
        </FormControl>
        <Button type="submit">Create Book</Button>
      </VStack>
    </form>
  );
}
