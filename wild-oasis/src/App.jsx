// import React from 'react'

import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input"
import Heading from "./ui/Heading";
import Row from "./ui/row";








const StyledApp= styled.div`
  
  /* background-color: orangered; */
  padding: 20px;
`


const App = () => {
  return (
<>
    <GlobalStyles/>
  <StyledApp>
<Row >
    <Row type="horizontal">
    <Heading as='h1'>The Wild Oasis</Heading> 
    
    <div>
    
    
     <Heading as='h2'>Check in and out 
      
      </Heading> 

     <Button  onClick={()=>alert('Check in')}>Check in</Button>

     <Button variation="secondary" size="small" onClick={()=>alert('Check out')}>Check out</Button>
    </div>
     </Row>

     <Heading as='h3'>Form </Heading>

<Row >
     <form >

     <Input type="number" placeholder="Number of gusests"/>

     <Input type="number" placeholder="Number of gusests"/>
     </form>

     </Row>
     </Row>
      </StyledApp>

  
 </>
  )
}

export default App