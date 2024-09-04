import React from "react";
import { Box, Button, Flex, Hide, Image, Spacer } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const TopButton = () => {
  return (
    <Flex
      pos="absolute"
      top={0}
      zIndex={1}
      width={"100%"}
      px={12}
      py={4}
      minWidth={"max-content"}
      alignItems={"center"}
      gap={"2"}
    >
      <Hide below="sm">
        <Box p="2">
          <Image src={logo} alt="company-logo" objectFit="cover" width={"107px"} height={"83px"} left={"100px"} top={"33px"} />
        </Box>
      </Hide>
      <Spacer />
      <Button
        colorScheme="whiteAlpha"
        color="#FFFFFF"
        variant="outline"
        borderRadius={"40px"}
        size={{base:"sm", md:"md"}}
      >
        Get in touch
      </Button>
    </Flex>
  );
};

export default TopButton;