import { LinkIcon } from '@chakra-ui/icons';
import { Box, Image, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";

interface CardsProps {
  missionName: string,
  rocketName: string,
  imageLink: string,
  videoLink: string,
  siteNameLong: string
}

export default function Home({ missionName, rocketName, imageLink, siteNameLong, videoLink }: CardsProps) {
  return (
    <Box maxW='sm' maxH='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image maxH='200px' minW='sm' src={imageLink} alt={rocketName}
         width='auto'/>
      <Box p='5'>
        <SimpleGrid columns={2} spacing={10} display="flex">
          <Box
            mt='1'
            fontWeight='semibold'
            as='h5'
            lineHeight='tight'
            isTruncated
            width={270}
          >
            {missionName}
          </Box>
          <Link href={videoLink} target={"_blank"}>
            <LinkIcon height={5} width={5} float="right" color="blue.500" />
          </Link>

        </SimpleGrid>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='12px'
        >
          {rocketName}
        </Box>
        <Box>
          <Box as='span' color='black' fontSize='sm'>
            {siteNameLong}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}