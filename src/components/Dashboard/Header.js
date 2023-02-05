import React from 'react';
import { BsPerson} from "react-icons/bs";


const Header = () => {
  return (
    <div>
      <div className='upperContainer'>
        <div className='upperContainer-left'><h3><span>LOGO</span></h3></div>
        <div className='upperContainer-right'><p> <BsPerson /> admin@example.com </p></div>
      </div>
    </div>
  );
};


export default Header;
