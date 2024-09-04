import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { foodData } from "./FoodData";

const Articles = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const food = useRef(null);
  const [totalPages, setTotalPages] = useState(0);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      food.current !== null &&
      currentIndex < totalPages - 1
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && food.current !== null) {
      return currentIndex >= totalPages - 1;
    }

    return false;
  };

  useEffect(() => {
    if (food.current !== null) {
      const itemWidth = food.current.offsetWidth;
      const scrollWidth = food.current.scrollWidth;
      maxScrollWidth.current = scrollWidth - itemWidth;
      setTotalPages(Math.ceil(scrollWidth / itemWidth));
    }
  }, []);

  useEffect(() => {
    if (food.current !== null) {
      food.current.scrollLeft = food.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <Box className="food" p={{ base: 5, md: 20 }}>
      <Text
        fontWeight={600}
        fontSize={{ base: 24, md: 45 }}  // Adjusted for mobile
        color="#0E2368"
      >
        Latest Articles
      </Text>

      <Flex
        py={{ base: 4, md: 8 }}
        ref={food}
        gap={{ base: 5, md: 10 }}  // Adjusted gap for mobile
        overflow="hidden"
        scrollSnapType="x mandatory"
        scrollBehavior="smooth"
        zIndex={0}
        className="carousel-container"
        flexWrap={{ base: "wrap", md: "nowrap" }}  // Wrap items on mobile
      >
        {foodData.map((resource, index) => {
          return (
            <Flex 
              key={index} 
              flexDir="column" 
              textAlign="center" 
              scrollSnapAlign="start" 
              border="1px solid"
              borderColor="gray.200"
              borderRadius={5}
              gap={3}
              px={{ base: 5, md: 10 }}  // Adjusted padding for mobile
              py={5}
              shadow="sm"
              alignItems="center"
              justifyContent="center"
              className="food-item"
              width={{ base: "100%", md: "auto" }}  // Full width on mobile
            >
              <Image
                borderRadius={10}
                width={{ base: 150, md: 300 }}  // Smaller image for mobile
                src={resource.imageUrl}
                alt="food__image"
              />
              <Text
                fontSize={{ base: "14px", md: "21px" }}  // Smaller font size for mobile
                color="#0E2368"
                fontWeight={700}
                width={{ base: 160, md: 300 }}
              >
                {resource.title}
              </Text>
              <Text fontSize={{ base: "12px", md: "15px" }} color="#444957">
                {resource.desc}
              </Text>
              <Button
                variant="outline"
                size="sm"  // Smaller button size for mobile
                px={6}  // Reduced padding
                margin={{ base: "auto", md: 0 }}
                width="max-content"
                color="#424961"
                borderRadius={40}
                borderColor="#424961"
                borderWidth={2}
                fontSize={{ base: "12px", md: "15px" }}  // Smaller font size
              >
                Read More
              </Button>
            </Flex>
          );
        })}
      </Flex>

      {/* BUTTONS */}
      <Flex
        mt={10}
        justifyContent="center"
        alignItems="center"
        gap={4}
        className="carousel__buttons"
      >
        {/* PREVIOUS BUTTON */}
        <Button
          variant="outline"
          onClick={movePrev}
          color="white"
          borderRadius={5}
          borderColor="#AFAFAF"
          opacity={0.4}
          _hover={{ opacity: 1 }}
          _disabled={{ opacity: 0, cursor: "not-allowed" }}
          transition="all ease-in-out duration-300"
          disabled={isDisabled("prev")}
          p={{ base: 2, md: 3 }}  // Smaller padding for mobile
          className="text-white w-8 h-8 md:w-10 md:h-10 text-center opacity-70 hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300 bg-gray-400 rounded-full"
        >
          <svg
            width="12px"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Button>
        {/* CURRENT PAGE / TOTAL PAGES */}
        <Text fontSize={{ base: 12, md: 22 }}>
          {currentIndex + 1}/{totalPages}
        </Text>
        {/* NEXT BUTTON */}
        <Button
          variant="outline"
          onClick={moveNext}
          color="white"
          borderRadius={5}
          borderColor="#AFAFAF"
          opacity={0.6}
          _hover={{ opacity: 1 }}
          _disabled={{ opacity: 0, cursor: "not-allowed" }}
          transition="all ease-in-out duration-300"
          disabled={isDisabled("next")}
          p={{ base: 2, md: 3 }}  // Smaller padding for mobile
          className="text-white w-8 h-8 md:w-10 md:h-10 text-center opacity-70 hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300 bg-gray-400 rounded-full"
        >
          <svg
            width="10px"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </Button>
      </Flex>
    </Box>
  );
};

export default Articles;
