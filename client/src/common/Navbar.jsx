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
        <div className="md:flex items-center justify-between py-4 bg-[#fcf9ee] md:px-1 px-7 h-20">
          <div className="font-bold text-1xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20" : "top-[-390px]"
              } bg-[#fcf9ee] z-10`}
            >
              {open ? (
                <li className="md:ml-8  md:my-0 my-7">
                  <form>
                    <Input type="text" />
                    <span className="text-1xl ml-2 ">
                      <ion-icon name="search-outline"></ion-icon>
                    </span>
                  </form>
                </li>
              ) : (
                ""
              )}
              {open ? (
                <li className="md:ml-8 text-1xl md:my-0 my-7">
                  <Profile>PROFILE</Profile>
                  <span className="ml-2">
                    <ion-icon name="person-outline"></ion-icon>
                  </span>
                </li>
              ) : (
                ""
              )}
              {open ? (
                <li className="md:ml-8 text-1xl md:my-0 my-7">
                  <Cart>CART</Cart>
                  <span className="ml-5">
                    <ion-icon name="cart-outline" />
                  </span>
                </li>
              ) : (
                ""
              )}

              {open ? (
                <Link to="/">
                  <li className="md:ml-8 text-1xl md:my-0 my-7">
                    <Home>HOME</Home>
                    <span className="ml-4">
                      <ion-icon name="home-outline"></ion-icon>
                    </span>
                  </li>
                </Link>
              ) : (
                <Link to="/">
                  <li className="md:ml-8 text-1xl md:my-0 my-7">HOME</li>
                </Link>
              )}

              {open ? (
                <li className="md:ml-8 text-1xl md:my-0 my-7">
                  <Categorias>CATEGORIAS</Categorias>
                  <span className="ml-5">
                    <ion-icon name="bookmarks-outline"></ion-icon>
                  </span>
                </li>
              ) : (
                <li className="md:ml-8 text-1xl md:my-0 my-7">CATEGORIAS</li>
              )}
            </ul>
          </div>

          <div className="font-bold text-3xl cursor-pointer  items-center font-[Poppins] text-gray-800   md:flex">
            <span className="text-2xl text-orange-600 mr-1 pt-2">
              <ion-icon name="basketball-outline"></ion-icon>
            </span>
            OlympicSports
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "hidden" : "top-[-490px]"
            } bg-[#fcf9ee] z-100`}
          >
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
                  <span className="text-2xl mr-5 pt-10">
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
    </nav>
  );
};

const Input = styled.input`
  font-size: 20px;
  border: 1px solid black;
  border-radius: 12px;
  height: 29px;
  background-color: #fcf9ee;
  text-align: center;
  margin-left: 27vw;
  &::placeholder {
    color: #000;
    background-color: #fcf9ee;
  }
  @media screen and (max-width: 570px) {
    margin-left: 23vw;
  }
  @media screen and (max-width: 490px) {
    margin-left: 20vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 15vw;
  }
  @media screen and (max-width: 410px) {
    margin-left: 5vw;
  }
`;

const Profile = styled.span`
  margin-left: 40vw;
  @media screen and (max-width: 490px) {
    margin-left: 35vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 30vw;
  }
`;
const Cart = styled.span`
  margin-left: 41.5vw;
  @media screen and (max-width: 490px) {
    margin-left: 37.5vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 32.5vw;
  }
`;
const Home = styled.span`
  margin-left: 41vw;
  @media screen and (max-width: 490px) {
    margin-left: 36vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 31vw;
  }
`;
const Categorias = styled.span`
  margin-left: 37.5vw;
  @media screen and (max-width: 490px) {
    margin-left: 32.5vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 27.5vw;
  }
`;

export default Navbar;
