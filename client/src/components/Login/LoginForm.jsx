import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import leftLogin from "../../assets/images/login/leftLogin1.png";
import rightLogin from "../../assets/images/login/rightLogin1.png";

import { log, success, error } from "../../utils/logs";
import { useInput } from "../../hooks/useInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../state/auth";

function LoginForm() {
  const email = useInput("email");
  const password = useInput("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    log("login attempt...");
    dispatch(loginRequest({ email, password }))
      .then(() => {
        success(`You are logged!`);
        navigate("/");
      })
      .catch((res) => error(res.status, res.statusText));
  };

  return (
    <Flex
      minH={"89vh"}
      align={"center"}
      justify={"center"}
      className="sm:flex-col xl:flex-row"
    >
      <Img
        className="relative mr-20 imgLeft"
        src={leftLogin}
        alt=""
        height={500}
        width={500}
      />
      <Stack spacing={8} className="lg:w-[550px] mx-20" py={12} px={6}>
        <Stack align={"center"}>
          <h1 className="font-Avenir text-4xl">Login</h1>
        </Stack>
        <Box p={8} as={"form"} onSubmit={handleLogin}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel className="font-Avenir">
                <span className="text-xs" style={{ letterSpacing: "2px" }}>
                  EMAIL
                </span>
              </FormLabel>
              <Input
                borderColor="black"
                focusBorderColor="black"
                type="email"
                {...email}
              />
            </FormControl>
            <FormControl id="password">
              <div>
                <FormLabel className="font-Avenir">
                  <span
                    className="text-xs float-left mb-1"
                    style={{ letterSpacing: "2px" }}
                  >
                    PASSWORD
                  </span>
                </FormLabel>
                <Link
                  to="/forgotpassword"
                  className="font-Avenir text-xs float-right "
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                borderColor="black"
                focusBorderColor="black"
                type="password"
                minWidth="350px"
                {...password}
              />
            </FormControl>
            <Stack spacing={10}>
              <button
                className="font-Avenir font-bold pt-5 text-md"
                style={{ letterSpacing: "2px" }}
              >
                SIGN IN
              </button>

              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-700"></span>
                <span className="text-gray-400 font-normal">or</span>
                <span className="h-px w-16 bg-gray-700"></span>
              </div>
              <div className="flex justify-center gap-5 w-full ">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center text-black mb-6 md:mb-0 border border-gray-700 hover:border-black hover:bg-black hover:text-white text-sm p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                >
                  <svg
                    className="w-4 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    />
                  </svg>
                  <svg
                    className="w-4"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  <span>Google</span>
                </button>
              </div>

              <Link
                to="/register"
                className="font-Avenir text-sm text-center hover:no-underline"
              >
                Create account
              </Link>
            </Stack>
            <Stack>
              <button className="font-Avenir font-bold pt-5 text-md" style={{letterSpacing:"2px"}}> Continue as Admin</button>
              <FontAwesomeIcon icon={faUserShield} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Img2
        className="relative ml-20 imgRight"
        src={rightLogin}
        alt=""
        height={550}
        width={500}
      />
    </Flex>
  );
}

const Img = styled.img`
  height: 500px;
  width: 500px;

  @media screen and (max-width: 1875px) {
    height: 400px;
    width: 400px;
  }

  @media screen and (max-width: 1725px) {
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 1600px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: 1450px) {
    height: 250px;
    width: 250px;
    margin-right: 0px;
  }

  @media screen and (max-width: 1280px) {
    height: 200px;
    width: 200px;
    margin-top: 100px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Img2 = styled.img`
  height: 500px;
  width: 500px;

  @media screen and (max-width: 1875px) {
    height: 400px;
    width: 400px;
  }

  @media screen and (max-width: 1725px) {
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 1600px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: 1450px) {
    height: 250px;
    width: 250px;
    margin-left: 0px;
  }

  @media screen and (max-width: 1280px) {
    height: 200px;
    width: 200px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export default LoginForm;
