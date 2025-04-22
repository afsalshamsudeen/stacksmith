import React from 'react'
import styled from 'styled-components';
import logo from "../assets/layers.png";

const Container = styled.div`
   position: sticky;
   top: 0;
   z-index: 100;
`;
const LogoContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 80px;
    color: aliceblue;
    gap: 10px;
    cursor: pointer;

    
`;
const Logo = styled.img`
    height: 26px;
    width: 26px;
`;
const NavBar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo}/>
        <h2>Stack Smith</h2>
      </LogoContainer>
    </Container>
  )
}

export default NavBar
