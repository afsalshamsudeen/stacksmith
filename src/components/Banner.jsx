import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #F8FAFC;
    margin-top: 30px;
    h1{
        text-align: center;
        line-height: 1.5;
        font-size: 2rem;
        font-weight: 500;
    }
    p{
        margin: 0;
    }

`;

const Button = styled.button`
    background-color: #3B82F6;
    outline: none;
    color: aliceblue;
    height: 40px;
    width: 120px;
    border: none;
    border-radius: 8px;
    margin-top: 20px;
    font-weight: 700;
    cursor: pointer;    
`;

const Banner = () => {
  return (
    <Container>
      <h1>🚀 Kickstart Your App<br/>in Seconds</h1>
      <p>Choose your stack. Click generate. Start building</p>
      <Button>Get Started</Button>
    </Container>
  )
}

export default Banner
