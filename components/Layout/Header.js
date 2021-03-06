import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => (
  <>
    <header className={classes.header}>
      <h1>FastMeals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <HStack
      maxWidth="800px"
      spacing={0}
      justify="center"
      height="1px"
      bg="white"
    >
      <Image
        objectFit="contain"
        maxWidth="400px"
        src="https://mcdn.wallpapersafari.com/medium/14/21/yoQXiu.png"
      />
      <Image
        maxWidth="400px"
        objectFit="contain"
        src="https://mcdn.wallpapersafari.com/medium/14/21/yoQXiu.png"
      />
    </HStack>
  </>
);

export default Header;
