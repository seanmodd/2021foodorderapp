import { Heading, useColorMode, VStack } from '@chakra-ui/react';
import MyAppStyles from '../components/MyAppStyles';

const Styling = () => {
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
        Styling Page
      </Heading>
      <MyAppStyles />
    </VStack>
  );
};

export default Styling;
