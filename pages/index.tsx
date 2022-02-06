import type { GetServerSideProps, NextPage } from 'next';
import MainContainer from "../components/MainContainer";
import { client } from '../graphql/client';
import { GetMissions } from '../graphql/queries';

const Home: NextPage = ({missions}: any) => {
  return (
    <MainContainer missionsData={missions}/>
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const { search } = context.query;
  const filter = { mission_name: search }
  const { data } = await client.query({query: GetMissions, variables: {limit:20, find: filter}});

  return {
    props: {
      missions: data.launchesPast,
    },
  };
}

export default Home
