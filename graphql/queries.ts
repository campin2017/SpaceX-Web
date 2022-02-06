import gql from 'graphql-tag';

export const GetMissions = gql`
  query LaunchesPast($limit: Int,$find: LaunchFind) {
    launchesPast: launchesPast(limit: $limit, find: $find) {
        mission_name
        launch_site {
          site_name_long
        }
        links {
          video_link,
          flickr_images
        }
        rocket {
          rocket_name
        }
        ships {
           image
        }
    }
  }
`;