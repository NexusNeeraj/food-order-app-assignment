import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../../assets/header_bg.jpeg";
import vector from "../../assets/header_vector.png";

const LandingPage = () => {
  return (
    <Box mb="9rem" color="white">
      <Flex alignItems={{base: "center"}} flexDir={{base:"column-reverse", md:"row"}} gap={[20, 15, 15]}>
        <Box ml={{base:0, md:14}} textAlign={{base: "center", md:"inherit"}} flex={0.5}>
          <Flex  pt={["0", "0", '2rem', '4rem']} flexDirection="column" gap={5} width={300}>
            <Text
              color="#0E2368"
              fontSize={["4xl", "5xl", "6xl"]}
              fontWeight={700}
              lineHeight={1.2}
            >
              Discover the Best{" "}
              <Box as="span" color="#E23744">
                Food{" "}
              </Box>
              and Drinks
            </Text>
            <Text fontSize="sm" color="#444957">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
            <Button
              size="md"
              px={10}
              margin={{base: "auto", md:0}}
              width="max-content"
              colorScheme="red"
              color="white"
              borderRadius={40}
            >
              Explore Now!
            </Button>
          </Flex>
        </Box>
        <Box flex={0.5} pos="relative" >
          <Image
            boxSize="auto"
            objectFit="cover"
            src={bg}
            alt="pizza"
            borderRadius={"0 0 0 200px"}
          />
          <Image
            pos="absolute"
            top={0}
            right={0}
            boxSize="auto"
            objectFit="cover"
            src={vector}
            alt="pizaa-img"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;