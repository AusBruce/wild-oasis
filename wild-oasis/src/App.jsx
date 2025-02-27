// import React from 'react'

import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input"

const H1= styled.h1`
font-size: 30px;
font-weight: 600;
background-color: yellow;

`;






const StyledApp= styled.div`
  
  background-color: orangered;
  padding: 20px;
`


const App = () => {
  return (
<>
    <GlobalStyles/>
  <StyledApp>
    <div>
     <H1>The Wild Oasis</H1> 

     <Button onClick={()=>alert('Check in')}>Check in</Button>

     <Button onClick={()=>alert('Check out')}>Check out</Button>

     <Input type="number" placeholder="Number of gusests"></Input>

     <Input type="number" placeholder="Number of gusests"></Input>
      </div>
      </StyledApp>
 </>
  )
}

export default App