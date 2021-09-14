import {
  Flex,
  Box,
  Text,
  Button,
  Link as StyledLink,
} from "rebass/styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {removeBook} from '../api';
import Loader from 'react-loader-spinner'

export const BookItem = ({ title, id, bookDesc }) => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(removeBook);

    const remove = async () => {
        await mutateAsync(id);
        queryClient.invalidateQueries() // Invalidate every query in the cache
        //queryClient.invalidateQueries("books") // Invalidate every query with a key that starts with `books`

    }
  return (
    <Flex p={3} width="100%" alignItems="center">
      <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">
        {title}
      </Link>
      <Text sx={{ color: 'black' }}>{bookDesc}</Text>
      <Button
        sx={{
          ":hover": {
            backgroundColor: "tomato",
          },
        }}
        ml={5}
        onClick={remove}
      >
        { isLoading ? <Loader type="ThreeDots" color="#fff" height={10}/> : "Delete"}
      </Button>
    </Flex>
  );
};
