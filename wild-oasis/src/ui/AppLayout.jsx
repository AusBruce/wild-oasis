import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Styled from "styled-components"

const StyledAppLayout = Styled.div`

display:grid;
grid-template-columns: 26rem  1fr;
grid-template-rows: auto 1fr;
height:100vh;

`;



const Main = Styled.main`

background-color: var(--color-grey-50)；
padding: 4rem 4.8rem 6.4rem;

`;


function AppLayout  () {
  return (
    <StyledAppLayout>
    
        <Header/>
       
        <Sidebar />
        <Main>
        <Outlet/>
        </Main>
   </StyledAppLayout>
  );
}

export default AppLayout