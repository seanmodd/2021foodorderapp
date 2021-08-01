import { useState, useEffect } from 'react';
import {
  Link as ChakraLink,
  Heading,
  useColorMode,
  VStack,
  Box,
  Button,
} from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import Meals from '../components/Meals/Meals';
import MealItemForm from '../components/Meals/MealItem/MealItemForm';
import Cart from '../components/Cart/Cart';
import CartProvider from '../store/CartProvider';

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
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);
  return (
    <CartProvider>
      <VStack minHeight="150vh" bg={bgColor[colorMode]}>
        <Heading
          style={{ zIndex: 2 }}
          py={20}
          align="center"
          mt={5}
          color={textColor[colorMode]}
          fontSize="3xl"
        >
          Welcome to React
        </Heading>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Meals />
      </VStack>
    </CartProvider>
  );
};

export default Index;
