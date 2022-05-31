import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

//NavBar Items
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        
        {/* Logo for system */}
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
       <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
       <a 
            className="flex flex-row justify-center items-center my-5 bg-[#FFFFFF] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            href='https://coinmarketcap.com/'
            target='_blank'
            rel='noreferrer'
          >
            
              Crypto Charts 
           
          </a>

          <a 
            className="flex flex-row justify-center items-center my-5 bg-[#FFFFFF] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            href='https://www.cnbc.com/cryptoworld/'
            target='_blank'
            rel='noreferrer'
          >
            
              Crypto News 
           
          </a>
          <a 
            className="flex flex-row justify-center items-center my-5 bg-[#FFFFFF] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            href='https://metamask.io/'
            target='_blank'
            rel='noreferrer'
          >
            
              Download A Crypto Wallet
           
          </a>
        {/* <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p> */}
      </div> 
    </div>

{/*       
       <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <a
            href='https://info.uniswap.org/#/'
            target='_blank'
            rel='noreferrer'
          >
            
              Charts 
           
          </a>
         <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> 
      </ul> 
       */}

      {/*MOBILE DEVICES*/}
      
      {/* <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
