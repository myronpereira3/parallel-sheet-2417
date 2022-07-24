import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  Link,
  useMediaQuery
} from "@chakra-ui/react";
import { AiOutlineChrome } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "./GoogleLogin";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export const Login = () => {
   const navigate = useNavigate();
    const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

    const login = (e) => {
      e.preventDefault();     
      axios.post('https://reqres.in/api/login',{email: email, password: pass})
      .then((r)=> {
        alert("login success :)")
        localStorage.setItem("token", r.data.token)
        navigate('/')
      })
      .catch((e)=>{
        alert("login failed! :(")
        console.log(e);
      })
    }
console.log(email,pass);
  return (
    <Box>
      <Flex boxShadow= {"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} pos='sticky' top='0' justify='space-between' align='center' p='15px' bgColor='#fff' zIndex='99' >
        <Image
         onClick={()=>navigate('/')}
          w='180px'
          src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
          alt="timecamp"
        />
        <Box></Box>
      </Flex>

      <Box w="90%" m="auto" mt='50px'>
        <Flex flexDirection={isSmallerThan800?  'column' : 'row'} justifyContent="space-between" alignItems="center">
          <Box textAlign="left" w={isSmallerThan800? "90%": "50%"} h={isSmallerThan800? "500px" : ""} p="20px">
            <Text fontSize="10px" fontWeight="700" color="#25cf60" mb="50px">
              PRODUCT UPDATE
            </Text>
            <Heading w="90%" lineHeight="65px" fontSize="52px" fontWeight="700">
              TimeCamp Plugin for Google Chrome{" "}
            </Heading>
            <Text fontSize="24px" fontWeight="700" color="#7a7a7a" my="20px">
              Track time without leaving Chrome in 70+ online apps.
            </Text>
            <Button
              _hover={{ bgColor: "#25cf20" }}
              borderRadius="25px"
              p="25px 35px 25px 35px"
              fontWeight="330"
              bgColor="#25cf60"
              color="#fff"
            >
              <Flex align="center" gap="10px">
                <AiOutlineChrome fontSize="37px" />
                <Text>Add TimeCamp for Chrome</Text>
              </Flex>
            </Button>
          </Box>

{/*=================================================================================================
                                           Form section
   ================================================================================================= */}

          <Box w={isSmallerThan800? "100%": "50%"}  >
            <Box boxShadow= {"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} m='auto' w='80%' borderRadius="25px" h='550px'  p="20px">
            <Text fontSize="24px" fontWeight="650" my="30px" >
              Log in to TimeCamp
            </Text>
            <Button w="100%" variant="outline" onClick={login}>
              <Flex w="70%" justify={"space-between"} align="center">
                <Text>
                  {/* <FcGoogle fontSize="35px" /> */}
                </Text>
                <GoogleLogin/>
                <Text>Log in with Google</Text>
                <Text></Text>
              </Flex>
            </Button>
            <Text my="15px">Or</Text>
            <FormControl isRequired>
              <Input onChange={(e)=>setEmail(e.target.value)} name='email'  placeholder="Email" />
            </FormControl>{" "}
            <br />
            <FormControl isRequired>
              <Input onChange={(e)=>setPass(e.target.value)} name='password'  placeholder="Password" />
            </FormControl>
            <Text color="#25cf60" fontSize="14px" fontWeight="400" mt="10px">
              Forgotten Password?
            </Text>
            <Button
              _hover={{ bgColor: "#25cf20" }}
              borderRadius="25px"
              p="25px 35px 25px 35px"
              fontWeight="330"
              bgColor="#25cf60"
              color="#fff"
              my="20px"
              onClick={login}
            >
              Log In
            </Button>
            <Flex justify="center">
              <Link color="#25cf60" fontSize="14px" fontWeight="400">
                No account? Sign up
              </Link>
              <Text fontSize="14px" fontWeight="400">
                or
              </Text>
              <Link color="#25cf60" fontSize="14px" fontWeight="400">
                Log in with SSO
              </Link>
            </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
