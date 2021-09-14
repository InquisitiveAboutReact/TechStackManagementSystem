import React from 'react';
import {Flex, Box, Text, Link as StyledLink , Image } from 'rebass/styled-components';
import {Link} from 'react-router-dom';
import Container from './Container';
import logo from './booklogo.png';
import addbooklogo from './addbook.png';

const NavBar = () => {
    return (
        <Flex bg="#FBAFAF" color="white" justifyContent="center">
        <Container>
        <i style={{color:'black', fontSize:12}}>React Query V3 </i>
            <Flex px={10} my={2} width="100%" alignItems="center">
            <Image size={20} src={logo}/>
                <Link component={StyledLink} variant="nav" to='/'>
                    <Text sx={{ fontSize:24, color:'#F82C2C'}}>Tech Stack Management System </Text></Link>
                
                <Box mx="auto" />
                <Image size={20} src={addbooklogo}/>
                <Link component={StyledLink} variant="nav" to='/create-book'>
                <Text sx={{ fontSize:16, color:'#581845'}}>Add new entry</Text>
                </Link>
            </Flex>
            </Container>
        </Flex>
    )
}

export default NavBar
