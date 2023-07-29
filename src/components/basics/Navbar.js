import React from 'react';
import "./Navbar.css";
const Navbar = ({menulist,filteritem}) => {
  return (
    <>
      <nav className='navBar'>
        <div className='btn-group'>
        {
            menulist.map((curElem)=>{
            return(
            <button className='btn-group-item' 
            onClick={()=>filteritem(curElem)}>{curElem}</button>

            )})
        }
        </div>
      </nav>
    </>
  )
}

export default Navbar;
