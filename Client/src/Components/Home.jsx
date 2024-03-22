import React from "react";
import Navbar from "./Navbar";
import Background from "./../assets/EduFlexBackground.jpeg";
import { Box, Text, Center, Heading, Flex, Button } from "@chakra-ui/react";
import Theme from "./Theme";

const Home = () => {
  return (
    <>
      <Box background={Theme.colors.primary[100]} width="100vw" height="100vh">
        <Flex
          direction="column"
          justify="center"
          align="center"
          bgImage={`linear-gradient(0deg, #22033900 0.00%,#22033933 80.00%),linear-gradient(90deg, #22033966 0.00%,#22033900 30.00%),linear-gradient(90deg, #22033900 70.00%,#22033966 100.00%),linear-gradient(180deg, #22033900 30.00%,#220339 100.00%),url(${Background})`}
          width="100vw"
          height="90vh"
          backgroundSize="cover"
          pt="12vw"
        >
          <Heading
            fontFamily={Theme.fonts.heading}
            color={Theme.colors.secondary[100]}
            fontSize="7vw"
          >
            EDUFLEX
          </Heading>
          <Text
            fontFamily={Theme.fonts.subHeading}
            color={Theme.colors.secondary[100]}
            fontSize="2.3vw"
            my="2vw"
          >
            Redefining online learning through AI
          </Text>
        <Button
          size="md"
          height="48px"
          width="180px"
          // border="2px"
          color={Theme.colors.secondary[100]}
          // borderColor="blue.500"
          backgroundColor={`${Theme.colors.primary[200]}90`}
          _hover={{backgroundColor: Theme.colors.primary[200]}}
        >
          Button
        </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
