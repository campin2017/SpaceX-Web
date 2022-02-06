import {
    SimpleGrid
} from '@chakra-ui/react';
import React from "react";
import { defaultImage } from "../constants/ExternalSources";
import Card from "./Card";

const ListCards = ({ missions }) => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, sm:2, md: 3, lg: 4, xl: 6 }} spacing={{ base: 5, lg: 8 }}>
                {
                    missions.map((mission, index: number) =>
                        <Card key={index}
                            missionName={mission.mission_name}
                            rocketName={mission.rocket.rocket_name}
                            imageLink={mission.links.flickr_images.length > 0 ? mission.links.flickr_images : defaultImage}
                            siteNameLong={mission.launch_site.site_name_long}
                            videoLink={mission.links.video_link} />)
                }
            </SimpleGrid>
        </>
    )
}

export default ListCards