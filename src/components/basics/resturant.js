import React, { useState } from 'react';
import "./style.css";
import MenuApi  from './MenuApi';
import Menucard from './Menucard';
import Navbar from './Navbar';
// console.log(MenuApi);
const uniquelist=[
  ...new Set(MenuApi.map((curElem)=>{
    return curElem.category;
  }))
  ,"All"
];
const Resturant = () => {
  const [menudata,setmenudata] = useState(MenuApi);
  const [menulist,setmenulist]= useState(uniquelist);

  const filteritem=(catagory)=>{
    if(catagory==="All"){
      setmenudata(MenuApi);
      return;
    }
    const updatelist=MenuApi.filter((curElem)=>{
      return curElem.category===catagory;
    });
    setmenudata(updatelist);
  }
  return (
    <section className='Universal'>
      <h1><u>Welcome to abc resturant</u></h1>
      <Navbar filteritem={filteritem} menulist={menulist}/>
      <Menucard menudata={menudata}/>
    </section>
  );
};

export default Resturant;
