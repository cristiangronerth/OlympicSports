import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useInput } from "../../hooks/useInput";

import { Flex, Box, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import aside from "../../assets/videos/profile.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"
// import "./Btn.css"

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../state/auth";

import axios from "axios";
import styled from "styled-components";

export default function ProfileForm() {


  const email = useInput("email");
  const password = useInput("password");

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth)

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

  }


  useEffect(() => {
    dispatch(getProfile())
  },[])

  // trailer sound toggle
  const [toggleMute, setToggleMute] = useState(true);

  const handleMute = (e) => {
    e.preventDefault();
    setToggleMute(!toggleMute);
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={8} className="lg:w-[550px] mx-20" py={12} px={6} as={'form'} onSubmit={handleSubmit}>
        <Stack align={"center"}>
          <h1 className="font-Avenir text-4xl">
            Change Password
          </h1>
        </Stack>
        <Box p={8}>
          <Stack spacing={4}>

            <FormControl>
                <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >EMAIL</span></FormLabel>
                <Input placeholder='Type your email' borderColor='black' focusBorderColor="black" type="email" {...email}/>
            </FormControl>


            <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >PASSWORD</span></FormLabel>
                  <Input borderColor='black' focusBorderColor="black" type="tel" {...password}/>
            </FormControl>

            <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >CONFIRM PASSWORD</span></FormLabel>
                  <Input borderColor='black' focusBorderColor="black" type="tel" {...password}/>
            </FormControl>
            

            <Stack spacing={10}>
              <button className="font-Avenir font-bold pt-5 text-md" style={{letterSpacing:"2px"}}>Confirm</button>
              <Link to="/" className="font-Avenir text-sm text-center hover:no-underline">Back to Home</Link>
            </Stack>
          
          </Stack>
        </Box>
      </Stack>
      </Flex>
      <Flex flex={1}>
        <Trailer
          src={aside}
          autoPlay
          muted={toggleMute}
          loop
          className="trailer"
        />
        {toggleMute ? (
          <button className="relative upBtn text-white" onClick={handleMute}><FontAwesomeIcon className="relative" icon={faVolumeHigh}></FontAwesomeIcon></button>
        ) : (
            <button className="relative upBtn text-white" onClick={handleMute}><FontAwesomeIcon className="relative" icon={faVolumeMute}></FontAwesomeIcon></button>
        )}
      </Flex>
    </Stack>
  );
}

const Trailer = styled.video`
  height: 100%;
  width: 48.5vw;
  position: absolute;
  object-fit: cover;

  @media screen and (max-width: 2400px) {
    width: 48vw;
  }

  @media screen and (max-width: 1780px) {
    width: 47.5vw;
  }

  @media screen and (max-width: 1490px) {
    width: 46.5vw;
  }

  @media screen and (max-width: 1465px) {
    width: 46vw;
  }

  @media screen and (max-width: 1449px) {
    width: 45.5vw;
  }

  @media screen and (max-width: 1434px) {
    width: 45vw;
  }

  @media screen and (max-width: 1422px) {
    width: 44.5vw;
  }

  @media screen and (max-width: 1410px) {
    width: 44vw;
  }

  @media screen and (max-width: 1396px) {
    width: 43.5vw;
  }

  @media screen and (max-width: 1384px) {
    width: 43vw;
  }

  @media screen and (max-width: 1372px) {
    width: 42.5vw;
  }

  @media screen and (max-width: 1360px) {
    width: 42vw;
  }

  @media screen and (max-width: 1348px) {
    width: 41.5vw;
  }

  @media screen and (max-width: 1336px) {
    width: 41vw;
  }

  @media screen and (max-width: 1326px) {
    width: 40.5vw;
  }
  
  @media screen and (max-width: 1316px) {
    width: 40vw;
  }

  @media screen and (max-width: 1306px) {
    width: 39.5vw;
  }

  @media screen and (max-width: 1293px) {
    width: 39vw;
  }

  @media screen and (max-width: 1283px) {
    width: 38.5vw;
  }

  @media screen and (max-width: 1273px) {
    width: 38vw;
  }

  @media screen and (max-width: 1263px) {
    width: 37.5vw;
  }

  @media screen and (max-width: 1252px) {
    width: 37vw;
  }

  @media screen and (max-width: 1242px) {
    width: 36.5vw;
  }

  @media screen and (max-width: 1232px) {
    width: 36vw;
  }

  @media screen and (max-width: 1222px) {
    width: 35.5vw;
  }

  @media screen and (max-width: 1212px) {
    width: 35vw;
  }

  @media screen and (max-width: 1203px) {
    width: 34.5vw;
  }

  @media screen and (max-width: 1193px) {
    width: 34vw;
  }

  @media screen and (max-width: 1183px) {
    width: 33.2vw;
  }

  @media screen and (max-width: 1173px) {
    width: 32.8vw;
  }

  @media screen and (max-width: 1163px) {
    width: 32.2vw;
  }

  @media screen and (max-width: 1153px) {
    width: 32vw;
  }

  @media screen and (max-width: 1143px) {
    width: 31vw;
  }

  @media screen and (max-width: 1133px) {
    width: 30.5vw;
  }

  @media screen and (max-width: 1123px) {
    width: 29.5vw;
  }

  @media screen and (max-width: 1113px) {
    width: 29vw;
  }

  @media screen and (max-width: 1113px) {
    width: 28.5vw;
  }

  @media screen and (max-width: 1095px) {
    width: 28vw;
  }

  @media screen and (max-width: 1086px) {
    width: 27.5vw;
  }

  @media screen and (max-width: 1077px) {
    width: 27vw;
  }

  @media screen and (max-width: 1068px) {
    width: 26.5vw;
  }

  @media screen and (max-width: 1059px) {
    width: 25.5vw;
  }

  @media screen and (max-width: 1050px) {
    width: 24.5vw;
  }

  @media screen and (max-width: 1036px) {
    width: 24vw;
  }

  @media screen and (max-width: 1029px) {
    width: 23.5vw;
  }
  
  @media screen and (max-width: 1024px) {
    width: 46.5vw;
  }

  @media screen and (max-width: 1017px) {
    width: 46vw;
  }

  @media screen and (max-width: 889px) {
    width: 45.5vw;
  }

  @media screen and (max-width: 804px) {
    width: 44.5vw;
  }

  @media screen and (max-width: 790px) {
    width: 44vw;
  }

  @media screen and (max-width: 784px) {
    width: 43.5vw;
  }

  @media screen and (max-width: 777px) {
    width: 42.8vw;
  }

  @media screen and (max-width: 767px) {
    margin-top: -19vh;
    height: 42.9vh;
    width: 100%;
  }
`;