import { Button, FormControl, FormLabel, Input, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from "react";

const SearchBar = () => {
    const [searchFilter,setSearchFilter] = useState('');
    return (
        <FormControl py={10}>
            <FormLabel htmlFor='country'>Search</FormLabel>
            <SimpleGrid columns={2} spacing={5} display="flex">
                <Input placeholder='Type a mission hint to search' onChange={(e) => setSearchFilter(e.target.value)} />
                <Link href={`/?search=${searchFilter}`} passHref>
                    <Button>Search</Button>
                </Link>
            </SimpleGrid>
        </FormControl>
    )
}

export default SearchBar