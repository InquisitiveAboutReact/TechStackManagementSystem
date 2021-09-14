import React from "react";
import { useQuery } from "react-query";
import { getAllBooks } from "../api";
import Container from "../shared/Container";
import { Flex,Box } from "rebass/styled-components";
import Loader from "react-loader-spinner";
import { BookItem } from "./BookItem";
import './bookStyle.css';
import editbooklogo from './editlogo.png';

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery("data", getAllBooks);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if(isError) {
      return <span>Error: {error.message}</span>
  }
  return (
   <Container>
      <Flex>
  <Box 
    style={{ borderRadius:4, backgroundColor:'#900C3F', display:'flex', alignItems:'center', justifyContent:'center'}}
    p={3}
    width={1/2}
    color='white'
    bg='primary'>
    Technology
  </Box>
  <Box
    style={{ borderRadius:4, backgroundColor:'#900C3F',display:'flex', alignItems:'center', justifyContent:'center'}}
    p={3}
    width={1/2}
    color='white'
    bg='secondary'>
    Useful Information
  </Box>
</Flex>
       <Flex flexDirection="column" alignItems="center" my={2} style={{backgroundColor:'#FBECEC', borderRadius:12}}>
            {
              
                data.map(({title, bookDesc, id})=>(
                  
                  <BookItem 
                  title={title} 
                  bookDesc={bookDesc} 
                  key={id} 
                  id={id} />
                 
                    
                ))
            }
       </Flex>
   </Container>
  );
};

export default BooksList;
