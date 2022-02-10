import React, {useState, useEffect} from 'react'
import styled, { css } from 'styled-components/macro'
import { Link, useLocation } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { BsMenuUp } from 'react-icons/bs'


const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;


`

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
 ${NavLink}
font-style: italic;

`;


const MenuBars = styled(BsMenuUp)`
   display: none;
    
   @media screen and (max-width: 768px) {
     display: block;
     color: #fff;
     font-size: 1.8rem;
   }
`;


const NavMenu = styled.div`
   display: flex;
   align-items: center;
   margin-right: -48px;

   @media screen and (max-width: 768px) {
    display: none;
   }

`;



const NavMenuLinks = styled(Link)`
 ${NavLink}

`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  

  @media screen and (max-width: 768px) {
    display: none;
   }


`

const  Navbar = ({ toggle}) => {
 
  const [navbar, setnavbar] = useState(false);
  const location = useLocation();

   const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

   useEffect(() => {
     const watchScroll = () => {
       window.addEventListener('scroll' , changeBackground);
   };

   watchScroll();

   return () => {
     window.removeEventListener('scroll',
      changeBackground); 
   };  
  }, []);

   let style = {
     backgroundColor: 
     navbar || location.pathname !== '/' ? '#CD853F' : 'transparent',
     transition: '0.4s'
   };
   

    return (
        <Nav style={style}>
            <Logo to="/">DAYS</Logo>
            <MenuBars onClick={toggle} /> 
            <NavMenu>
               {menuData.map((item, index) => ( 
               <NavMenuLinks to={item.link} key={index}>
                   {item.title}
                 </NavMenuLinks>
               ))}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' primary='true'>Contact US</Button>
                </NavBtn>
            
        </Nav>
    )
}

export default  Navbar


