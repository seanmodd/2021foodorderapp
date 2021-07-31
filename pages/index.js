import {
  Link as ChakraLink,
  Heading,
  useColorMode,
  VStack,
  Box,
  Button,
} from '@chakra-ui/react';

const Index = () => {
  //! this is just for dark mode...
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'black',
    dark: 'white',
  };
  const textColor = {
    light: 'white',
    dark: 'black',
  };
  //!

  return (
    <VStack minHeight="100vh" bg={bgColor[colorMode]}>
      <Heading py={20} color={textColor[colorMode]} fontSize="6xl">
        Welcome to React
      </Heading>
    </VStack>
  );
};

export default Index;
