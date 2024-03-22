import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Img,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import React from "react";
import Logo from "./../assets/EduFlexLogo.png";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <Center display={["none", "flex"]} w={'99vw'}>
      <Flex
        backdropFilter={"auto"}
        backdropBlur={"5px"}
        pos={"fixed"}
        w={"98%"}
        h={[null, "5vw", null, "4.4vw"]}
        bgColor={"#220339e6"}
        top={"1vw"}
        borderRadius={"5vh"}
        align={"center"}
        px={"3vw"}
        border={"3px solid #22033960"}
        filter={"drop-shadow(0 0.5vw 0.3vw #00000040 )"}
      >
        <Box
          w={"33%"}
          _hover={{
            filter: "drop-shadow(0 0 0.5vw #01EAF980)",
          }}
          transition={"all 0.2s"}
        >
          <Img src={Logo} maxH={"3vw"} />
        </Box>
        <Flex w={"33%"} justify={"space-between"}>
          <Button
            variant={"link"}
            fontSize={"1.3vw"}
            color={"white"}
            h={[null, "5vw", null, "4.4vw"]}
            _hover={{
              filter: "drop-shadow(0 0 0.2vw #ffffff90)",
            }}
            transition={"all 0.2s"}
          >
            Home
          </Button>
          <Center>
            <Divider orientation="vertical" opacity={"0.1"} h={"2.2vw"} />
          </Center>
          <Button
            variant={"link"}
            fontSize={"1.3vw"}
            color={"white"}
            h={[null, "5vw", null, "4.4vw"]}
            _hover={{
              filter: "drop-shadow(0 0 0.2vw #ffffff90)",
            }}
            transition={"all 0.2s"}
          >
            Contact Us
          </Button>
          <Center>
            <Divider orientation="vertical" opacity={"0.1"} h={"2.2vw"} />
          </Center>
          <Button
            variant={"link"}
            fontSize={"1.3vw"}
            color={"white"}
            h={[null, "5vw", null, "4.4vw"]}
            _hover={{
              filter: "drop-shadow(0 0 0.2vw #ffffff90)",
            }}
            transition={"all 0.2s"}
          >
            About
          </Button>
        </Flex>
        <Flex w={"33%"} justify={"end"}>
          <Button
            borderRadius={"1.4vw"}
            h={"3vw"}
            w={"7vw"}
            fontSize={"1.2vw"}
            bgColor={`${Theme.colors.primary[200]}40`}
            _hover={{ backgroundColor: Theme.colors.primary[200] }}
            color={'white'}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Navbar;
