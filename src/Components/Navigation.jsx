import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <NavigationStyled>
      <div className='kuang'>
        <ul className='nav'>
          <li>
            转签云省分
          </li>
          {/* <li>
            <Link to="/yanjie">沿街复盘</Link>
          </li>
          <li>
            <Link to="/pianqu">片区复盘</Link>
          </li> */}
        </ul>
      </div>


    </NavigationStyled>
  )
}
const NavigationStyled = styled.nav`
 position:fixed;
   width: 100%;
   z-index:10;
   transition:0.4s;
   border-bottom:1px solid #ccc;
   line-height:3rem;
  
   .nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
   
   }
   li {
           padding:0 0.4rem;
           border-radius:0.9rem;
           transition: 0.3s ease;
      &:hover{
               background-color:#ccc;
               font-size:1.2rem;
               padding:0rem 0.4rem;
             color:#000;
           }
    }
`