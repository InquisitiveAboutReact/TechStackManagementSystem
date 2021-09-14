import {
  Flex,
  Text,
  Button,
  Image,
  Link as StyledLink,
} from "rebass/styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {removeBook} from '../api';
import Loader from 'react-loader-spinner';
import editbooklogo from './editlogo.png';
import "./bookStyle.css";

export const BookItem = ({ title, id, bookDesc }) => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(removeBook);

    const remove = async () => {
        await mutateAsync(id);
        queryClient.invalidateQueries() // Invalidate every query in the cache
    }
  return (
    <>
    <Flex p={3} width="100%" alignItems="center"> 
    <div class="tooltip">
    <Image size={20} src={editbooklogo} className="tooltip"/>
    <span class="tooltiptext">Click on the link to update</span>
    </div>
      <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">
        {title}
      </Link>
      <Text sx={{ color: 'black' }}>{bookDesc}</Text>
      <Button
        sx={{
          backgroundColor:"#ED0B0B",
          cursor:"pointer",
          ":hover": {
            backgroundColor: "#A40202",
          },
        }}
        ml={5}
        onClick={remove}
      >
        { isLoading ? <Loader type="ThreeDots" color="#fff" height={10}/> : "Delete"}
      </Button>
    </Flex>
    </>
  );
};
