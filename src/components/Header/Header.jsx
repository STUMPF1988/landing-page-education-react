import react from 'react';
// import { RiComputerLine, RiStackLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { AiOutlineLaptop } from "react-icons/ai";
import {StyledHeader} from './style';
// import NavBar from '../navBar/NavBar';

function Header() {
  return (
    <StyledHeader>
        <div>
<AiOutlineLaptop/>
        </div>
        <div>
            <h1>ADM MASTER INSTITUTE</h1>
        </div>
      
    </StyledHeader>
  );
}

export default Header;
