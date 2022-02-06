import { Box, chakra } from '@chakra-ui/react';
import React from "react";
import ListCards from './ListCards';
import SearchBar from './SearchBar';

const MainContainer = ({ missionsData }) => {
    return (
        <Box maxW="10xl" mx={'auto'} pt={5} px={{ base: 4, sm: 12, md: 17 }} marginBottom="40px">
            <chakra.h1
                textAlign={'center'}
                fontSize={'3xl'}
                py={4}
                fontWeight={'bold'}>
                SpaceX LaunchesPast
            </chakra.h1>
            <SearchBar></SearchBar>
            <ListCards missions={missionsData}></ListCards>
        </Box>
    )
}

export default MainContainer