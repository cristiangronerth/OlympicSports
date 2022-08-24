import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const searchingTrue = () => {
    setSearch(true);
  };
  const searchingFalse = () => {
    setSearch(false);
  };

  return (
    <nav>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between py-4 bg-white md:px-10 px-7">
          <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-2xl text-orange-600 mr-1 pt-2">
              <ion-icon name="basketball-outline"></ion-icon>
            </span>
            OlympicSports
          </div>
          <div className="font-bold text-1xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20" : "top-[-490px]"
              }`}
            >
              <Link to="/">
                <li className="md:ml-8 text-1xl md:my-0 my-7">HOME</li>
              </Link>
              <li className="md:ml-8 text-1xl md:my-0 my-7">CATEGORIAS</li>
              <li className="md:ml-8 text-1xl md:my-0 my-7">
                <span className="text-2xl mr-1 pt-2">
                  <ion-icon name="cart-outline"></ion-icon>
                </span>
              </li>
              <li className="md:ml-8 text-1xl md:my-0 my-7">
                <span className="text-2xl mr-1 pt-2">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
              </li>
              <li
                className="md:ml-8 text-1xl md:my-0 my-7"
                onClick={searchingTrue}
                onMouseOut={searchingFalse}
              >
                {search ? (
                  <form>
                    <span className="text-2xl mr-10 pt-10">
                      <ion-icon name="search-outline"></ion-icon>
                    </span>
                    <Input
                      type="text"

                      // className="text-1xl h-6 mr-1 pt-2 outline-solid border-solid"
                    />
                  </form>
                ) : (
                  <span className="text-2xl mr-1 pt-2">
                    <ion-icon name="search-outline"></ion-icon>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Input = styled.input`
  font-size: 20px;
  border: 1px solid black;
  border-radius: 12px;
  height: 29px;

  text-align: center;

  &::placeholder {
    color: #fff;
  }
`;

export default Navbar;
