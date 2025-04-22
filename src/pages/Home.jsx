import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner';
import GenerateProject from '../components/GenerateProject';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
`;

const Home = () => {
  return (
    <>
    <Banner/>
    <GenerateProject/>
    </>
  )
}

export default Home
